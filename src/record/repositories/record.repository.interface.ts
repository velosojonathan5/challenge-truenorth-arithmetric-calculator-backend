import { CreateRecordDto } from '../dto/create-record.dto';
import { Record } from '../entities/record.entity';

export interface RecordRepository {
  create(createRecordDto: CreateRecordDto): Promise<Record>;

  findLastRecordByUser(userId: number): Promise<Record>;

  findAll(userId: number): Promise<Record[]>;
}

export const RECORDS_REPOSITORY_TOKEN = 'records-repository-token';
