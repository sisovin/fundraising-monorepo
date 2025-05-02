import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && await argon2.verify(user.password, pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const hashedPassword = await argon2.hash(registerDto.password);
    const user = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const user = await this.usersService.findOneByEmail(resetPasswordDto.email);
    if (!user) {
      throw new Error('User not found');
    }
    const hashedPassword = await argon2.hash(resetPasswordDto.newPassword);
    await this.usersService.updatePassword(user.id, hashedPassword);
    return { message: 'Password reset successful' };
  }
}
