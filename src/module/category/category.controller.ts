import { Category } from '@prisma/client';
import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service';
import { createDto } from './dto/create.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('get')
  getAllCategories(): Promise<Category[]> {
    return this.categoryService.getAllCategory();
  }

  @Post('create')
  createCategory(@Body() body: createDto): any {
    this.categoryService.addCategory(body);
    return 'ok';
  }
}
