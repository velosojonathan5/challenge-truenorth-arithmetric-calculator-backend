import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { OPERATIONS_REPOSITORY_TOKEN } from './repositories/operation.repository.interface';
import { OperationsTypeormRepository } from './repositories/implementations/operations.typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationTypeorm } from './repositories/implementations/operation.typeorm.entity';
import { RecordModule } from '../record/record.module';

@Module({
  controllers: [OperationController],
  providers: [
    OperationService,
    {
      provide: OPERATIONS_REPOSITORY_TOKEN,
      useClass: OperationsTypeormRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([OperationTypeorm]), RecordModule],
})
export class OperationModule {}
