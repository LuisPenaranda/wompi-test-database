import { randomUUID } from "crypto";
import { CreateCardDto } from "../dto/create-card.dto";

export class Card {
    id:string;
    number:string;
    cvc:string;
    exp_month:string;
    exp_year:string;
    card_holder:string;

    static newInstanceFromDTO(data: CreateCardDto){
        const result = new Card();
        result.id = randomUUID();
        result.number = data.number;
        result.cvc = data.cvc;
        result.exp_month = data.exp_month;
        result.exp_year = data.exp_year;
        result.card_holder = data.card_holder;

        return result;
    }

    static newInstanceFromDynamoDBObject(data:any): Card {
        const result = new Card();
        result.id = data.id.S;
        result.number = data.number.S;
        result.cvc = data.cvc.S;
        result.exp_month = data.exp_month.S;
        result.exp_year = data.exp_year.S;
        result.card_holder = data.card_holder.S;
        
        return result
    }

}
