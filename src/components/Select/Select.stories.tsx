import React, {ChangeEvent, useRef, useState} from 'react';
import {Select} from './Select'


export default {
    title: 'Select stories',
    component: Select,
};
export let SelectMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState(2)

    return (<div>
        <Select items={[{title: "Minsk", value: 1}, {title: "Moscow", value: 2}, {title: "Kiev", value: 3}, {title: "Peter", value: 4}]}
                value={value}
                collapsed={collapsed}
                onChange={()=>setCollapsed(!collapsed)}
                onClickHandler={setValue}
        />
    </div>)
}