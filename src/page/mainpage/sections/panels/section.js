import React from 'react'
import HourSection from '../pagecomponents/hoursection'
import NumberSection from '../pagecomponents/numbersection'
import ChartSection from '../pagecomponents/chartsection'
import Graphsection from '../pagecomponents/graphsection'
import TotalsSection from '../pagecomponents/totalsection'
import { Grid } from '@material-ui/core'

export default function section(props) {
    const root = {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        position: "relative",
        backgroundColor: "#27A2D",
        height: "88px",
        width: "930px",
        alignItems: "center",
        color: "white",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
        border: "1px solid grey",
        borderRadius: "25px"
    }
    
    return (
        <Grid style={root}>
            <HourSection/>
            <NumberSection/>
            <ChartSection/>
            <Graphsection/>
            <TotalsSection amount={props.amount}/>
        </Grid>
    )
}
