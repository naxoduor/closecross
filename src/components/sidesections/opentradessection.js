import React from 'react'
import SideHeader from '../sidesections/sideheader'

export default function opentradessection() {

    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }

const text="OPEN TRADES"

    return (
        <div style={{ marginBottom: "30px", borderBottom: "1px solid grey", padding: "20px" }}>
            <SideHeader text={text}/>
            <div></div>
            <div style={style}>
                <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>15m
                    </span>
                <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>25m 45s</span>
            </div>
        </div>
    )
}
