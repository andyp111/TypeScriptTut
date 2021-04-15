import { stringify } from 'node:querystring';
import * as React from 'React';
import { useState } from "react";
import { Groceries } from "../model/groceries.model";


export const GroceryItems = () => {
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

    // const [newItem, getNewItem] = useState(new Groceries());
    const [wantToAddItem, setWantToAddItem] = useState(false)

    const [values, setValues] = useState({
        itemName: '',
        quantity: 0,
        price: 0
    })

    const handleSubmit = (event: any): void => {
        event.preventDefault();
        setValues((values) => ({
            ...values,
            itemName: event.target.value,
            quantity: event.target.value,
            price: event.target.value
        }));
        let newItem = new Groceries(values);
        listOfItems.push(newItem);
    }
 

    let listOfItems: {itemName: string, quantity: number, price: number}[] = [item1, item2, item3];
    return (
        <div>
            <div>
            {listOfItems.map((item) => {
                    return (
                        <div>
                            <li>{item.itemName} - {item.quantity} - ${item1.getTotalPrice(item.quantity, item.price)}</li>
                        </div>
                    )
                })}
            </div>
            <form>
                <div>
                    <label>
                        name:
                        <input type="name" name="itemName" />

                    </label>
                </div>
                <div>
                    <label>
                        quantity:
                        <input type="quantity" name="quantity" />

                    </label>
                </div>
                <div>
                    <label>
                        price:
                        <input type="price" name="price" />

                    </label>
                </div>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}
