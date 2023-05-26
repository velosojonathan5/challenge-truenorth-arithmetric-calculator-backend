import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { RECORDS_REPOSITORY_TOKEN } from './repositories/record.repository.interface';
import { RecordTypeormRepository } from './repositories/implementations/record.typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordTypeorm } from './repositories/implementations/record.typeorm.entity';

@Module({
  controllers: [RecordController],
  providers: [
    RecordService,
    {
      provide: RECORDS_REPOSITORY_TOKEN,
      useClass: RecordTypeormRepository,
    },
  ],
  exports: [RecordService],
  imports: [TypeOrmModule.forFeature([RecordTypeorm])],
})
export class RecordModule {}
