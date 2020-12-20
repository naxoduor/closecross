import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { green } from '@material-ui/core/colors';
import Button from './ButtonComponent'
import Divider from '@material-ui/core/Divider';
import OpenTradesSection from '../components/sidesections/opentradessection'
import TradeHistorySection from '../components/sidesections/tradehistorysection'
import TradeWalletSection from '../components/sidesections/tradewallet'

export default function sidenav() {
    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }
    return (
        <div>
            <div style={{ margin: "auto" }}>
                <OpenTradesSection />
                <Divider />
                <TradeHistorySection />
                <TradeWalletSection />
            </div>
        </div>
    )
}
