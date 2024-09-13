import { AttributeValue, DynamoDBClient, GetItemCommand, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { Injectable } from "@nestjs/common";
import { Card } from "./entities/card.entity";


@Injectable()
export class CardsRepository{
    private readonly tableName = "cards"
    private readonly client:DynamoDBClient

    constructor(){
        this.client = new DynamoDBClient({
            region: process.env.AWS_REGION || 'us-east-1',
        })
    }

    async findAll(){
        const result:Card[] = []
    
        const command = new ScanCommand({
            TableName:this.tableName
        })

        const response = await this.client.send(command)

        if(response.Items){
            response.Items.forEach(item => {
                result.push(Card.newInstanceFromDynamoDBObject(item))
            })
        } 

        return result

    }

    async findOne(id:string){
        console.log(id)
        const command = new GetItemCommand({
            TableName:this.tableName,
            Key:{
                id: {
                    S: id,
                }
            },
        });

        const result = await this.client.send(command)

        if(result.Item){
            return Card.newInstanceFromDynamoDBObject(result.Item)
        } 

        return undefined

    }

    async createCard(data:Card){
        const itemObject:Record<string,AttributeValue>={
            id:{
                S: data.id
            },
            number:{
                S: data.number
            },
            cvc:{
                S: data.cvc
            },
            exp_month:{
                S: data.exp_month
            },
            exp_year:{
                S: data.exp_year
            },
            card_holder:{
                S: data.card_holder
            }
        };

        const command = new PutItemCommand({
            TableName: this.tableName,
            Item: itemObject
        });

        await this.client.send(command);

        return data;

    }

}