import { Injectable } from '@nestjs/common';
import { app } from '@lowcode/share';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + app;
  }
}
