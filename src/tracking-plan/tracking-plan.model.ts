import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Event } from '../event/event.model';

export type TrackingPlanDocument = TrackingPlan & Document;

@Schema()
export class TrackingPlan {
  @Prop()
  display_name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Event' }] })
  events: Event[];
}

export const TrackingPlanSchema = SchemaFactory.createForClass(TrackingPlan);
