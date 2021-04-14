import * as React from "react";
import { GroceryList } from "./GroceryList";

export interface HelloWorldProps {
    userName: string;
    lang: string;
}

export const App = (props: HelloWorldProps) => {
    return (
        <div>
            Hi {props.userName} from React! Welcome to {props.lang}!
            <GroceryList />
        </div>
    );
};
