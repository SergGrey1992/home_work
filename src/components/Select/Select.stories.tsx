import React from "react";

type ItemsType = {
    title: any
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items:ItemsType[]
}

function Select (props: SelectPropsType) {
    return(
        <div>
            <div>{props.value}</div>
            {props.items.map(i=> <div>{i.title}</div>)}
        </div>
    )
}