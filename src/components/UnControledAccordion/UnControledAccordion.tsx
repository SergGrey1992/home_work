import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion (props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                { !props.collapsed && <AccordionBody/> }
            </div>
        )
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div><h1>-- {props.title} --</h1></div>


// eslint-disable-next-line @typescript-eslint/no-unused-vars
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion