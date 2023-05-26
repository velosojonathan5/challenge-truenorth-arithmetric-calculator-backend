import { Record } from '../../entities/record.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'records' })
export class RecordTypeorm implements Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  userBalance: number;

  @Column()
  operationResponse: string;

  @Column()
  operationId: number;

  @Column()
  userId: number;

  @CreateDateColumn()
  date: Date;
}
