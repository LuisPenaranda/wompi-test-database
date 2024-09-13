import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { Injectable } from "@nestjs/common";
import { Product } from "./entities/product.entity";


@Injectable()
export class ProductsRepository{
    private readonly tableName = "products"
    private readonly client:DynamoDBClient

    constructor(){
        this.client = new DynamoDBClient({
            region: process.env.AWS_REGION || 'us-east-1',
        })
    }

    async findAll(){
        const result:Product[] = []
    
        const command = new ScanCommand({
            TableName:this.tableName
        })

        const response = await this.client.send(command)

        if(response.Items){
            response.Items.forEach(item => {
                result.push(Product.newInstanceFromDynamoDBObject(item))
            })
        } 

        return result

    }

}