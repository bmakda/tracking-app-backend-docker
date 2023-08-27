import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './event.model';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name)
    private readonly eventModel: Model<EventDocument>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = new this.eventModel(createEventDto);
    await event.validateRules(); // Validate rules against JSON Schema
    return event.save();
  }
}
