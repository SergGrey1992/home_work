import React from "react";

export type CollapsedType = boolean

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: CollapsedType
    onChange: (collapsed: CollapsedType) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle
                collapsed={props.collapsed}
                title={props.titleValue}
                onChange={ props.onChange }
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: CollapsedType
    onChange: (collapsed: CollapsedType) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <div><h1 onClick={ () => { props.onChange(!props.collapsed) } } >-- {props.title} --</h1></div>


}
type BodyAccordionPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: BodyAccordionPropsType) {
    return (
        <div>
            <ul>
                {props.items.map( (i,index) => <li onClick={() => { props.onClick(i.value) }}  key={index}>{i.title}</li> )}
            </ul>
        </div>
    )
}
