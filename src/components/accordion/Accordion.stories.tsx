import React, {useState} from 'react';

import {OnOff} from "./OffOn";


export default {
    title: 'OffOn stories',
    component: OnOff

}
export const OnMode = () => <OnOff on={true} onChange={x=>x} />
export const OffMode = () => <OnOff on={false} onChange={x=>x} />

export const ModeChanging = () => {
    const [value, setValue] = useState <boolean> (true)
    return <OnOff on={value} onChange={setValue()} />
}




