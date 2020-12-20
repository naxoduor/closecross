import React from 'react'

export default function totalssection(props) {
    const sectionfive = {
        width: "180px",
        height: "64px",
        margin: "auto",
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
        <div style={sectionfive}>
            <div style={fiveone}>{props.amount}</div>
            <div style={fivetwo}>Total Commitment funds</div>
        </div>
    )
}
