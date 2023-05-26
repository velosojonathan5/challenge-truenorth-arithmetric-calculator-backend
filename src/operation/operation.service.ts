import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { operations } from './entities/operation.entity';
import { CalculateDto } from './dto/calculate.dto';
import {
  OPERATIONS_REPOSITORY_TOKEN,
  OperationRepository,
} from './repositories/operation.repository.interface';
import { RecordService } from '../record/record.service';
import { CreateRecordDto } from '../record/dto/create-record.dto';

@Injectable()
export class OperationService {
  constructor(
    @Inject(OPERATIONS_REPOSITORY_TOKEN)
    private operationnRepository: OperationRepository,
    private recordService: RecordService,
  ) {}

  async calculate(calculateDto: CalculateDto, userId: number) {
    const operationFunction = operations.find(
      (o) => o.type == calculateDto.type,
    );

    const operation = await this.operationnRepository.findByType(
      calculateDto.type,
    );

    const record = await this.recordService.findLastRecordByUser(userId);

    if (record.userBalance < operation.cost) {
      throw new BadRequestException('user has no balance');
    }

    const result = operationFunction.calculate(calculateDto.a, calculateDto.b);

    const newRecord = new CreateRecordDto();
    newRecord.amount = operation.cost;
    newRecord.userBalance = record.userBalance - operation.cost;
    newRecord.operationId = operation.id;
    newRecord.userId = userId;
    newRecord.operationResponse = result.toString();
    await this.recordService.create(newRecord);

    return {
      result: result,
      cost: operation.cost,
      balance: newRecord.userBalance,
    };
  }

  generateRandomString() {
    return '';
  }
}
