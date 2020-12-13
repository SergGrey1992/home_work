import React, {useState} from 'react';
import s from './App.module.css';
import {RatingValueType} from "./components/Rating/Rating";
import {Select} from "./components/Select/Select";
import {MultiSelect} from "./components/MultiSelect/MultiSelect";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)



    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(false)
    const swapCollapsed = (collapsed: boolean) => {
        const swap = !selectCollapsed
        setSelectCollapsed(swap)
    }
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState(2)


    return (
        <div className={s.wrapper}>

            <Select items={[{title: "Minsk", value: 1}, {title: "Moscow", value: 2}, {title: "Kiev", value: 3}, {title: "Peter", value: 4}]}
                    value={value}
                    collapsed={collapsed}
                    onChange={()=>setCollapsed(!collapsed)}
                    onClickHandler={setValue}
            />

    <MultiSelect/>



        </div>
    );
}


export default App;
