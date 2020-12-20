import React from 'react'
import Button from '../ButtonComponent'
import SideHeader from '../sidesections/sideheader'

export default function tradewallet() {

    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }
    const text = "TRADING WALLET"

    return (
        <div>
            <SideHeader text={text}/>
            <div style={style}>
                <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>$ 34 352.00</span>
                <div style={{ margin: "auto", color: "white" }}>
                    <Button bgcolor="#494947" color="green" variant="button" text="Top Up" />
                </div>
            </div>

            <div style={style}>
                <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>$ 4 182.00</span>
                <div style={{ margin: "auto", color: "white" }}>
                    <Button bgcolor="green" color="white" variant="button" text="Buy Now" />
                </div>
            </div>
        </div>
    )
}
