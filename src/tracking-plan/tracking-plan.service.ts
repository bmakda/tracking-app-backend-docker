import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackingPlan, TrackingPlanDocument } from './tracking-plan.model';
import { CreateTrackingPlanDto } from './dto/create-tracking-plan.dto';

@Injectable()
export class TrackingPlanService {
  constructor(
    @InjectModel(TrackingPlan.name)
    private readonly trackingPlanModel: Model<TrackingPlanDocument>,
  ) {}

  async create(createTrackingPlanDto: CreateTrackingPlanDto) {
    const createdTrackingPlan = new this.trackingPlanModel(
      createTrackingPlanDto,
    );
    return createdTrackingPlan.save();
  }

  async findAll() {
    return this.trackingPlanModel.find().populate('events').exec();
  }
}
