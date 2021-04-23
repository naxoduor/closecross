import React from 'react'
import { Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
export default function Icon(props){
    return(
    <Grid container justify="flex-end" style={props.buttonStyle}>
        <span style={{marginRight:"20px"}}><SearchIcon /></span>
        <span style={{marginRight:"20px"}}><StarBorderIcon /></span>
        <span style={{marginRight:"20px"}}><CastForEducationIcon /></span>
    </Grid>

    )
}