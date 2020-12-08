import React, {useState} from 'react';

import {UnControlledAccordion} from "./UnControledAccordion";


export default {
    title: 'UnControledAccordion stories',
    component: UnControlledAccordion

}
export const UnControlledAccordionOnMode = () => <UnControlledAccordion titleValue={"--Menu--"}/>
export const UnControlledAccordionOffMode = () => <UnControlledAccordion  titleValue={"--Users--"}/>

export const ModeChanging = () => {
    const [value, setValue] = useState <boolean> (true)
    return <UnControlledAccordion titleValue={"--Users--"} />
}




