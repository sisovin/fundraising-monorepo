import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DonationService } from './donation.service';
import { Donation } from './donation.entity';

@Controller('donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  async create(@Body() donation: Donation): Promise<Donation> {
    return this.donationService.createDonation(donation);
  }

  @Get()
  async findAll(): Promise<Donation[]> {
    return this.donationService.getDonations();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Donation> {
    return this.donationService.getDonationById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() donation: Partial<Donation>): Promise<Donation> {
    return this.donationService.updateDonation(id, donation);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Donation> {
    return this.donationService.deleteDonation(id);
  }
}
