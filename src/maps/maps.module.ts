import { Module } from '@nestjs/common';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';

@Module({
  imports: [],
  controllers: [MapsController],
  providers: [MapsService],
})
export class mapsModule {}
