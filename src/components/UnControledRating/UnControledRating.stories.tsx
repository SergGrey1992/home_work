import React, {useState} from 'react';

import {UnControledRating} from "./UnControledRating";


export default {
    title: 'UnControledRating stories',
    component: UnControledRating

}
export const ModeChanging = () => {
    const [value, setValue] = useState <boolean> (true)
    return <UnControledRating />
}




