import React, {useState} from 'react';

import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion stories',
    component: Accordion

}
const callback = action("accordion mode change event fired")
const onClickCallback = action("come item was clicked")

export const CollapsedMode = () => <Accordion
    titleValue={"Menu"}
    collapsed={true}
    onChange={callback}
    onClick={onClickCallback}
    items={[]}/>
export const UsersUncollapsedMode = () => <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    onClick={onClickCallback}
    items={[{title: "Sergey", value:1}, {title:"Dacha",value:2}, {title:"Dalma",value:3}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState <boolean> (true)
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={ () => setValue(!value)   }
        onClick={onClickCallback}
        items={[{title: "Sergey", value:1}, {title:"Dacha",value:2}, {title:"Dalma",value:3}]}/>
}




