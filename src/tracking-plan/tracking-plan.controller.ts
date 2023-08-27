import { Controller, Post, Body, Get } from '@nestjs/common';
import { TrackingPlanService } from './tracking-plan.service';
import { CreateTrackingPlanDto } from './dto/create-tracking-plan.dto';

@Controller('tracking-plans')
export class TrackingPlanController {
  constructor(private readonly trackingPlanService: TrackingPlanService) {}

  @Post()
  create(@Body() createTrackingPlanDto: CreateTrackingPlanDto) {
    return this.trackingPlanService.create(createTrackingPlanDto);
  }

  @Get()
  findAll() {
    return this.trackingPlanService.findAll();
  }
}
