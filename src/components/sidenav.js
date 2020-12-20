import React from 'react'
import Divider from '@material-ui/core/Divider';
import OpenTradesSection from '../components/sidesections/opentradessection'
import TradeHistorySection from '../components/sidesections/tradehistorysection'
import TradeWalletSection from '../components/sidesections/tradewallet'

export default function sidenav() {
    
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
