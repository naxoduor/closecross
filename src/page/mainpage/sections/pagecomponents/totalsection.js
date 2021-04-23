import React from 'react'
import Display from '../../../../components/display'
import { Button, Grid } from '@material-ui/core'

export default function TotalsSection(props) {
    const sectionfive = {
        width: "180px",
        height: "64px",
        margin: "auto",
    }

    const fiveone = {
        marginTop: "20px",
        width: "180px",
        height: "24px",
        fontSize: "20px",
    }

    const fivetwo = {
        width: "180px",
        height: "16px",
        fontSize: "10px"
    }

    return (
        <Grid style={sectionfive}>
            <Display style={fiveone} text={props.amount}/>
            <Display style={fivetwo} text={"Total Commitment funds"}/>
        </Grid>
    )
}
