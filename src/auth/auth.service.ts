import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { name: 'Message', age: 20 };
  }

  signup() {
    return { name: 'Message', age: 30 };
  }
}
