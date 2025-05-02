import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile/:id')
  async getProfile(@Param('id') id: number): Promise<User> {
    return this.userService.getProfile(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile/:id')
  async updateProfile(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
    return this.userService.updateProfile(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('donation-history/:id')
  async getDonationHistory(@Param('id') id: number): Promise<User> {
    return this.userService.getDonationHistory(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('admin-permissions/:id')
  async setAdminPermissions(@Param('id') id: number, @Body('isAdmin') isAdmin: boolean): Promise<User> {
    return this.userService.setAdminPermissions(id, isAdmin);
  }
}
