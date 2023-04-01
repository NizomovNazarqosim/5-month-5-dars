import { IsString, IsNotEmpty } from 'class-validator';

export class createDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
