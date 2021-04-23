import { Grid } from '@material-ui/core'
import React from 'react'
import SideHeader from './sideheader'
import Button from '../../../components/ButtonComponent'
import Display from '../../../components/display'

export default function TradeWallet() {
    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }

    const text = "TRADING WALLET"

    return (
        <Grid style={{ marginTop: "150px", paddingRight:"20px"}}>
            <SideHeader text={text} />
            <Grid style={style}>
                <Display style={{ margin: "auto", color: "white", fontSize: "20px" }} text={"$ 34 352.00"} />
                <Button margin="auto" bgcolor="#494947" color="green" variant="button" text="Top Up" />
            </Grid>
            <Grid style={style}>
                <Display style={{ margin: "auto", color: "white", fontSize: "20px" }} text="$ 4 182.00" />
                <Button margin="auto" bgcolor="green" color="white" variant="button" text="Buy Now" />
            </Grid>
        </Grid>
    )
}