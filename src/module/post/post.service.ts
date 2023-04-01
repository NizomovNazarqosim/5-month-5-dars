import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createPostDto, UpdateDto } from './dto/create.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(): Promise<any> {
    const allPosts = await this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        categories: true,
      },
    });
    return allPosts;
  }

  async addPost(body: createPostDto): Promise<void> {
    const { title, categoryId } = body;
    const isHaveCategory = await this.prisma.category.findFirst({
      where: {
        id: categoryId,
      },
    });

    console.log(isHaveCategory);
    if (!isHaveCategory) {
      throw new NotFoundException();
    }

    const created = await this.prisma.post.create({
      data: {
        title: title,
        categories: {
          create: [
            {
              assignedBy: 'developer',
              assignedAt: new Date(),
              category: {
                connect: {
                  id: categoryId,
                },
              },
            },
          ],
        },
      },
    });
    console.log(created);
  }

  async updatePost(body: UpdateDto, id: number): Promise<void> {
    const isHave = await this.prisma.categoriesOnPosts.findFirst({
      where: {
        categoryId: Number(body.categoryId),
        postId: Number(id),
      },
    });
    if (isHave) {
      throw new BadRequestException('This is already exist');
    }
    const updated = await this.prisma.categoriesOnPosts.create({
      data: {
        assignedBy: 'developer',
        assignedAt: new Date(),
        categoryId: Number(body.categoryId),
        postId: Number(id),
      },
    });
    console.log(updated);
  }
}
