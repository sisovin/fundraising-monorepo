import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async updateProfile(userId: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async getDonationHistory(userId: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { donations: true },
    });
  }

  async setAdminPermissions(userId: number, isAdmin: boolean): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: { isAdmin },
    });
  }
}
