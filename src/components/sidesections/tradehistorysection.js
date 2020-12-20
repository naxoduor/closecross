import React from 'react'
import Button from '../ButtonComponent'
import SideHeader from '../sidesections/sideheader'
import ChartSection from '../subsections/chartsection'

export default function tradehistorysection() {

    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }

    const text="TRADING HISTORY"

    return (
        <div style={{ marginBottom: "30px", borderBottom: "1px solid grey", paddingBottom: "20px" }}>
            <SideHeader text={text}/>

            <div style={style}>
                <div style={{ margin: "auto" }}>
                    <Button bgcolor="#494947" color="white" variant="button" text="Last" />
                </div >
                <div style={{ margin: "auto", color: "white" }}>
                    <Button bgcolor="#494947" color="white" variant="button" text="Day" />
                </div>
                <div style={{ margin: "auto", color: "white" }}>
                    <Button bgcolor="green" color="white" variant="button" text="week" />
                </div>
                <div style={{ margin: "auto", color: "white" }}>
                    <Button bgcolor="#494947" color="white" variant="button" text="month" />
                </div>
            </div>

            <div style={style}>
                <div style={{ margin: "auto", color: "white" }}>Last
                    </div >
                <div style={{ margin: "auto", color: "white" }}>
                    Total Trades
                    </div>
                <div style={{ margin: "auto", color: "white" }}>
                    Posts
                    </div>
            </div>

            <div></div>
            <div style={style}>
                <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>245
                    </span>
                <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>+21.5%</span>
            </div>
            <ChartSection/>
        </div>
    )
}
