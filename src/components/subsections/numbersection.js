import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';

export default function numbersection() {
    const sectiontwo = {
        width: "",
        height: "",
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
        <div style={sectiontwo}>
                <div style={fiveone}>
                    <span style={{ marginRight: "5px" }}><StarOutlineIcon /></span>
                    <span>2.2x</span>
                </div>
                <div style={fivetwo}>Crypto</div>
            </div>
    )
}
