import { CacheModule, Module } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { LeaveController } from './leave.controller';
import { leaveschema } from './leave.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Leave',
        schema: leaveschema,
      },
    ]),
    CacheModule.register({
      isGlobal: true,
      ttl: 30,
      max: 300,
    }),
  ],
  providers: [LeaveService],
  controllers: [LeaveController],
})
export class LeaveModule {}
