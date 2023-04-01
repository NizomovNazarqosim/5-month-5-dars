import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { createDto } from './dto/create.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAllCategory(): Promise<any> {
    const allCategory = await this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
        posts: {
          select: {
            post: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });
    return allCategory;
  }

  async addCategory(body: createDto): Promise<void> {
    await this.prisma.category.create({
      data: {
        name: body.name,
      },
    });
  }
}
