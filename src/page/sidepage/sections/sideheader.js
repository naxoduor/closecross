import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid } from '@material-ui/core'

export default function SideHeader(props) {

    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "0px"
    }
    return (
        <Grid style={style}>
            <TrendingUpIcon style={{ fill: "green" }} />
            <Grid style={{ margin: "auto", color: "green" }}>{props.text}</Grid>
            <ArrowForwardIosIcon style={{ fill: "green" }} />
        </Grid>
    )
}