import * as React from "react";
import { GroceryList } from "./GroceryList";
import { GroceryItems } from './GroceryItems';

export interface HelloWorldProps {
    userName: string;
    lang: string;
}

export const App = (props: HelloWorldProps) => {
    return (
        <div>
            Hi {props.userName} from React! Welcome to {props.lang}!
            <GroceryItems />
        </div>
    );
};
