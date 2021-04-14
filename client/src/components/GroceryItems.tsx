import * as React from 'React';
import { useState } from "react";
import { Groceries } from "../model/groceries.model";

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

export const GroceryItems = () => {
    
    const [newItem, getNewItem] = useState(new Groceries());
    const [wantToAddItem, setWantToAddItem] = useState(false)
    
    let listOfItems: object[] = [item1, item2, item3];

    return (
        <div>
            <form>
                <div>
                    <label>
                        name:
                        <input type="name" name="itemName"/>
 
                    </label>
                </div>
                <div>
                    <label>
                        quantity:
                        <input type="quantity" name="quantity"/>

                    </label>
                </div>
                <div>
                    <label>
                        price:
                        <input type="price" name="price"/>

                    </label>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}
