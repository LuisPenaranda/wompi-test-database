export class Product {
    id: string
    name: string
    description: string
    price: number

    static newInstanceFromDynamoDBObject(data:any): Product {
        const result = new Product()
        result.id = data.id.S
        result.name = data.name.S
        result.description = data.description.S
        result.price = data.price.N
        
        return result
    }

}
