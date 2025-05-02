import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  amount: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, user => user.donations)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
