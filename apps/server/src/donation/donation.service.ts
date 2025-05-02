import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Donation } from './donation.entity';

@Injectable()
export class DonationService {
  constructor(private prisma: PrismaService) {}

  async createDonation(data: Donation): Promise<Donation> {
    return this.prisma.donation.create({
      data,
    });
  }

  async getDonations(): Promise<Donation[]> {
    return this.prisma.donation.findMany();
  }

  async getDonationById(id: number): Promise<Donation> {
    return this.prisma.donation.findUnique({
      where: { id },
    });
  }

  async updateDonation(id: number, data: Partial<Donation>): Promise<Donation> {
    return this.prisma.donation.update({
      where: { id },
      data,
    });
  }

  async deleteDonation(id: number): Promise<Donation> {
    return this.prisma.donation.delete({
      where: { id },
    });
  }
}
