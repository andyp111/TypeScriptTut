export class Groceries {
    public itemName: string;
    public quantity: number;
    public price: number;

    constructor(data?: any) {
        this.itemName = data.itemName;
        this.quantity = data.quantity;
        this.price = data.price;
    }

    public getTotalPrice = (quantity: number, price: number) => {
        let total = quantity * price;
        return total;
    }

}

