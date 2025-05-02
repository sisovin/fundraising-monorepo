import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DonationModule } from './donation/donation.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DonationModule,
    UserModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
