import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { ProductsRepository } from './products/products.repository';
import { ProductsService } from './products/products.service';
import { CardsModule } from './cards/cards.module';
import { CardsRepository } from './cards/cards.repository';
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';

@Module({
  imports: [ProductsModule, CardsModule],
  controllers: [AppController, ProductsController, CardsController],
  providers: [AppService, ProductsService, ProductsRepository, CardsService, CardsRepository],
})
export class AppModule {}
