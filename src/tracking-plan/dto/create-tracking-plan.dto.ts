import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEventDto } from '../../event/dto/create-event.dto';

export class CreateTrackingPlanDto {
  @IsNotEmpty()
  @IsString()
  display_name: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEventDto)
  events: CreateEventDto[];
}
