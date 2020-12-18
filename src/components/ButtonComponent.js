import React from 'react'
import { Button } from '@material-ui/core'
import Typography from '../components/TypographyComponent'

export default function ButtonComponent(props) {
    
    return <Button style={{backgroundColor:props.bgcolor, color:props.color, height:"20px"}}>
        <Typography variant={props.variant} text={props.text}/>
    </Button>;
}
