import {TextInput} from 'react-native';
import '../css/quasar-1.16.3.min.css'

export const TextInputField = ({className, style, id, children})=>{
    return (
        <TextInput id={id} class={className} style={style} placeholder={children}></TextInput>
    );
};