import React, {useState} from "react";
import s from "./select.module.css"

type ItemsType = {
    title: any
    value: any
}

type SelectPropsType = {
    value: number
    collapsed:boolean
    onChange: (value: any) => void
    onClickHandler:(value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    const value = props.items.find( f=> f.value === props.value )
    const valueEl = props.items.map(i => <div className={s.divEl} onClick={()=> {
            props.onClickHandler(i.value)
            setCollapsed(!collapsed)
    } } >{i.title}</div>)

    return (
        <div>
            <div className={s.divUp}  onClick={ ()=>{ setCollapsed(!collapsed) } } > { value && value.title}  </div>
            {!collapsed && valueEl }
        </div>
    )
}