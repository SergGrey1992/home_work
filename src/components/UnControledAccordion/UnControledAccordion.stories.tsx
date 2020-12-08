import React, {useState} from 'react';

import {UnControlledAccordion} from "./UnControledAccordion";


export default {
    title: 'UnControledAccordion stories',
    component: UnControlledAccordion

}

export const ModeChanging = () => {
    const [value, setValue] = useState <boolean> (true)
    return <UnControlledAccordion titleValue={"Users"} />
}




