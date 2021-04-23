import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Display from '../../../../components/display'
import { Button, Grid } from '@material-ui/core'

export default function NumberSection() {
    const sectiontwo = {
        width: "",
        height: "",
        justify:"center"
    }

    const fiveone = {
        display:"flex",
        flexDirection:"row",
        width: "180px",
        height: "24px",
        fontSize: "20px",
        textAlign:"center",
        marginLeft:"50px"
    }

    const fivetwo = {
        width: "180px",
        height: "16px",
        fontSize: "10px",
    }
    
    return (
        <div style={sectiontwo}>
                <Grid style={fiveone}>
                    <span style={{ marginRight: "5px" }}><StarOutlineIcon /></span>
                    <Display text={"2.2X"}/>
                </Grid>
                <Display style={fivetwo} text={"Crypto"}/>
            </div>
    )
}
