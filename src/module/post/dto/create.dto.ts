import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createPostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNumber()
  @IsNotEmpty()
  readonly categoryId: number;
}

export class UpdateDto {
  @IsNumber()
  @IsNotEmpty()
  readonly categoryId: number;
}
