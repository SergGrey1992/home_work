import React, {useState} from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion (props: AccordionPropsType) {

   // onClick={ () => { setCollapsed(collapsed ?  false : true) } }

    let [collapsed, setCollapsed] = useState(false)

        return (
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={()=> {setCollapsed(collapsed? false :true)}}/>
                { collapsed && <AccordionBody/> }
            </div>
        )
}


type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div><h1 onClick={ () => {  props.setCollapsed() } } >-- {props.title} --</h1></div>


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

