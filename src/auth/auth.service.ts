import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return { name: 'Message', age: 20 };
  }

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    delete user.hash;

    return user;
  }
}
