import { Injectable } from '@nestjs/common';
import { OperationTypeorm } from './operation.typeorm.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Operation, OperationType } from '../../entities/operation.entity';
import { OperationRepository } from '../operation.repository.interface';

@Injectable()
export class OperationsTypeormRepository implements OperationRepository {
  constructor(
    @InjectRepository(OperationTypeorm)
    private operationRepository: Repository<Operation>,
  ) {}

  findByType(type: OperationType): Promise<Operation> {
    return this.operationRepository.findOne({ where: { type } });
  }
}
