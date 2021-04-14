import * as React from 'react';

export interface HelloWorldProps {
    userName: string;
    lang: string
}

export const App = (props: HelloWorldProps) => {
    return (
        <div>
            Hi {props.userName} from React! Welcome to {props.lang}!
        </div>
    )
}