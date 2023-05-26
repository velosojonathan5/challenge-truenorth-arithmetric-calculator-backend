import { ApiProperty } from '@nestjs/swagger';
import { OperationType } from '../entities/operation.entity';

export class CalculateDto {
  @ApiProperty({ enum: OperationType })
  type: OperationType;

  @ApiProperty()
  a: number;

  @ApiProperty()
  b: number;
}
