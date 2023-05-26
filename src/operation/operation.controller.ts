import { Controller, Post, Body, Request } from '@nestjs/common';
import { OperationService } from './operation.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CalculateDto } from './dto/calculate.dto';

@ApiTags('operation')
@ApiBearerAuth()
@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Post('calculate')
  calculate(@Body() calculateDto: CalculateDto, @Request() req: any) {
    return this.operationService.calculate(calculateDto, req.user.sub);
  }
}
