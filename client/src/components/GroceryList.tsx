import * as React from "react";
import { useState } from "react";
import { Groceries } from "../model/groceries.model";

export const GroceryList = () => {
    let item1 = new Groceries({
        itemName: "Meat",
        quantity: 4,
        price: 20,
    });

    let item2 = new Groceries({
        itemName: "Veggies",
        quantity: 2,
        price: 16.50,
    })

    let item3 = new Groceries({
        itemName: "Milk",
        quantity: 1,
        price: 4.50,
    })

    const [newItem, getNewItem] = useState(new Groceries());
    const [wantToAddItem, setWantToAddItem] = useState(false)

    return <div>
        <li>{item1.itemName} - {item1.quantity} - ${item1.getTotalPrice(item1.quantity, item1.price)}</li>
        <li>{item2.itemName} - {item2.quantity} - ${item2.getTotalPrice(item2.quantity, item2.price)}</li>
        <li>{item3.itemName} - {item3.quantity} - ${item3.getTotalPrice(item3.quantity, item3.price)}</li>
        <div>
            <form>
                <div>
                    
                </div>
            </form>
        </div>
    </div>;
};
