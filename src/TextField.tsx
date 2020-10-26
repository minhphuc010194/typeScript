import React from "react";


interface Person {
    fistName: string
    lastName: string
}
interface Props {
    text : string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string)=>string;
    person: Person;
}

export const TextField: React.FC<Props> = () =>{
    return (
        <div>
            <input />
        </div>
    )
}