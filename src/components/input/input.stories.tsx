import React, {ChangeEvent, useRef, useState} from 'react';
import {Input} from './input'


export default {
    title: 'input stories',
    component: Input,
};
export let UncontrolledInput = () => <input/>
//1. Вариант через onChange
export let TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={onChange}/> - {value} </>
}

//2. Вариант через Ref
export let GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        actual value - {value} </>
}
export let ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setParentValue(actualValue)

    }

    return <><input value={parentValue} onChange={onChange}/> : {parentValue} </>

}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.checked
        setParentValue(actualValue)

    }

    return <><input type="checkbox" checked={parentValue} onChange={onChange}/>  </>

}


export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)
    const onChange = (e:  ChangeEvent<HTMLSelectElement>) => {setSelectValue(e.currentTarget.value)}

    return <select value={selectValue} onChange={onChange} >
        <option>None</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>

}