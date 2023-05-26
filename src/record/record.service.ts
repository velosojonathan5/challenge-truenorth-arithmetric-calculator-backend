import { Inject, Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import {
  RECORDS_REPOSITORY_TOKEN,
  RecordRepository,
} from './repositories/record.repository.interface';

@Injectable()
export class RecordService {
  constructor(
    @Inject(RECORDS_REPOSITORY_TOKEN)
    private recordRepository: RecordRepository,
  ) {}

  create(createRecordDto: CreateRecordDto) {
    return this.recordRepository.create(createRecordDto);
  }

  findAll(userId: number) {
    return this.recordRepository.findAll(userId);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} record`;
  // }

  findLastRecordByUser(userId: number) {
    return this.recordRepository.findLastRecordByUser(userId);
  }

  // update(id: number, updateRecordDto: UpdateRecordDto) {
  //   return `This action updates a #${id} record`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} record`;
  // }
}
