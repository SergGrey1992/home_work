import React, {useState} from 'react';

import {OnOff} from "./OffOn";


export default {
    title: 'OffOn stories',
    component: OnOff

}
export const OnMode = () => <OnOff on={true} />
export const OffMode = () => <OnOff on={false} />

export const ModeChanging = () => {
    const [value, setValue] = useState <boolean> (true)
    return <OnOff on={value} /*onC={() => setValue(!value)}*/ />
}




