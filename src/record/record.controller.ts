import { Controller, Get, Request } from '@nestjs/common';
import { RecordService } from './record.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('record')
@ApiBearerAuth()
@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  // @Post()
  // create(@Body() createRecordDto: CreateRecordDto) {
  //   return this.recordService.create(createRecordDto);
  // }

  @Get()
  findAll(@Request() req: any) {
    return this.recordService.findAll(req.user.sub);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.recordService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
  //   return this.recordService.update(+id, updateRecordDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.recordService.remove(+id);
  // }
}
