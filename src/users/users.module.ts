import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersTypeormRepository } from './repositories/implementations/users.typeorm.repository';
import { USERS_REPOSITORY_TOKEN } from './repositories/users.repository.interface';
import { UserTypeorm } from './repositories/implementations/user.typeorm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordModule } from '../record/record.module';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: USERS_REPOSITORY_TOKEN, useClass: UsersTypeormRepository },
  ],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([UserTypeorm]), RecordModule],
})
export class UsersModule {}
