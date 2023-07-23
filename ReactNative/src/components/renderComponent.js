import '../css/quasar-1.16.3.min.css'
import {createElement} from 'react'
import {Button} from './Button'
import {Div} from './Div'
import {Li} from './Li'
import {P} from './P'
import {VerticalDots} from './VerticalDots'
import {TextInputField} from './TextInputField'


const keysToComponetMap = {
    button : Button,
    div : Div,
    li : Li,
    p : P,
    verticalDots : VerticalDots,
    "atx-panel" : Div,
    "atx-cell" : Div,
    "atx-field-text" : TextInputField,
    "atx-button" : Button
};

export const renderComponent = (config)=>{
    if(typeof keysToComponetMap[config.component] !== undefined){
        return createElement(
            keysToComponetMap[config.component],
            {
                id : config.id,
                key : config.id,
                className : config.className ? config.className : null,
                ariaHidden : config.ariaHidden ? config.ariaHidden : null,
                style: config.style ? config.style : null
            },
            config.children && (typeof config.children === 'string'
            ? config.children : config.children.map((child)=> renderComponent(child)))
        );
    }
};