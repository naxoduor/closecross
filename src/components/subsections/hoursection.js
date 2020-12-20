import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';

export default function hoursection() {
    const sectionone = {
        width: "180px",
        height: "64px",
        margin: "auto"
    }

    const fiveone = {
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
                <div style={fiveone}>
                    <span style={{ marginRight: "5px" }}><StarOutlineIcon /></span>
                    <span>ETH 48 hours</span>
                </div>
                <div style={fivetwo}>Crypto</div>
            </div>
    )
}
