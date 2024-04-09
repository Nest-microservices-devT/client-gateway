import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  controllers: [AuthController],
  imports: [TransportsModule],
})
export class AuthModule {}
