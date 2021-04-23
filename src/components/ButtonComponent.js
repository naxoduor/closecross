import React from 'react'
import { Grid } from '@material-ui/core'
export default function ButtonComponent(props) {

    return (
        <Grid>
            <button type="button" class="btn btn-sm" style={{ backgroundColor: props.bgcolor, color: props.color }}>{props.text}</button>
        </Grid>
    )
}
