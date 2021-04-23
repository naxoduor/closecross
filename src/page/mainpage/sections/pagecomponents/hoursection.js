import React from 'react'
import Display from '../../../../components/display'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { Button, Grid } from '@material-ui/core'

export default function HourSection() {
    const sectionone = {
        width: "180px",
        height: "64px",
        margin: "auto"
    }

    const fiveone = {
        display:"flex",
        flexDirection:"row",
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
        <div style={sectionone}>
                <Grid style={fiveone}>
                    <div style={{ marginRight: "5px" }}><StarOutlineIcon /></div>
                    <Display text={"ETH 48 hours"}/>
                </Grid>
                <Display style={fivetwo} text="Crypto"/>
            </div>
    )
}
