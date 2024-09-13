import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardsRepository } from './cards.repository';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
  constructor(private readonly repository: CardsRepository){}

  create(createCardDto: CreateCardDto) {
    return this.repository.createCard(Card.newInstanceFromDTO(createCardDto));
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id:string) {
    return this.repository.findOne(id);
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
