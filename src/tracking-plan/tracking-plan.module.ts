import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackingPlanSchema } from './tracking-plan.model';
import { TrackingPlanController } from './tracking-plan.controller';
import { TrackingPlanService } from './tracking-plan.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'TrackingPlan', schema: TrackingPlanSchema }]),
    ],
    controllers: [TrackingPlanController],
    providers: [TrackingPlanService],
})
export class TrackingPlanModule { }
