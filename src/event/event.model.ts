import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty, IsString, IsObject, validate } from 'class-validator';
import { jsonSchema } from './json-schema';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Prop()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Prop({ type: Object })
  @IsNotEmpty()
  @IsObject()
  rules: object;

  async validateRules() {
    const errors = await validate(jsonSchema, this.rules);
    if (errors.length > 0) {
      throw new Error('Invalid event rules');
    }
  }
}

export const EventSchema = SchemaFactory.createForClass(Event);
