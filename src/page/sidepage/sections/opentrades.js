import React from 'react'
import SideHeader from './sideheader'
import Display from '../../../components/display'
import { Grid } from '@material-ui/core'
export default function OpenTrades(){

    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }

    const displayStyle={
        margin: "auto",
        color: "white",
        fontSize:"30px"
    }

    const text="OPEN TRADES"

    return(
        <Grid style={{ marginBottom: "10px", borderBottom: "1px solid grey", padding: "10px" }}>
            <SideHeader text={text}/>
            <Grid style={style}>
                <Display style={displayStyle} text={"15m"}/>
                <Display style={displayStyle} text={"25m 45s"}/>
            </Grid>
        </Grid>
    )
}