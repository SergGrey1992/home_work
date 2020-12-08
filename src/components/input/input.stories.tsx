import React from 'react';
import './button.css';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


export default {
    title: 'input stories',
    component: input,

}

export const UncontrolledInput = () => <input/>


