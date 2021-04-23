import {Grid } from '@material-ui/core'
import SideHeader from './sections/sideheader'
import OpenTrades from './sections/opentrades'
import TradeHistory from './sections/tradehistory'
import TradeWallet from './sections/tradewallet'
export default function TradeDetails(props){
    return (
        <Grid style={props.style} margin={"auto"} border="2px solid blue">
            <OpenTrades/>
            <TradeHistory/>
            <TradeWallet/>
        </Grid>
    )
}