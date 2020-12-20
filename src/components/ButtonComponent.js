import React from 'react'
import { Button } from '@material-ui/core'
import Typography from '../components/TypographyComponent'

export default function ButtonComponent(props) {
    
    return <Button style={{backgroundColor:props.bgcolor, color:props.color, height:"20px",
    border:props.border, padding:props.padding, marginLeft:props.margin}}>
        <Typography variant={props.variant} text={props.text}/>
    </Button>;
}
