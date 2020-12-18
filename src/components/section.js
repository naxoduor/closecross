import React from 'react'
import Typography from './TypographyComponent'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Divider from '@material-ui/core/Divider';

export default function section() {
    const root = {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        position: "relative"
    }
    const sectionone = {
        width: "180px",
        height: "64px",
        margin: "auto"
    }
    const sectiontwo = {
        width: "",
        height: "",
        margin: "auto"
    }
    const sectionthree = {
        width: "164px",
        height: "52px",
        margin: "auto"
    }
    const sectionfour = {
        width: "80px",
        height: "64px",
        margin: "auto"
    }
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
        <div style={root}>
            <div style={sectionone}>
                <div style={fiveone}>
                    <span style={{ marginRight: "5px" }}><StarOutlineIcon /></span>
                    <span>ETH 48 hours</span>
                </div>
                <div style={fivetwo}>Crypto</div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div style={sectiontwo}>
                <div style={fiveone}>
                    <span style={{ marginRight: "5px" }}><StarOutlineIcon /></span>
                    <span>2.2x</span>
                </div>
                <div style={fivetwo}>Crypto</div>
            </div>
            <div style={sectionthree}>
                <div>$ 34 346.00</div>
                <div>Total Commitment funds</div>
            </div>
            <div style={sectionfour}>
                <div>$ 34 346.00</div>
                <div>Total Commitment funds</div>
            </div>
            <div style={sectionfive}>
                <div style={fiveone}>$ 34 346.00</div>
                <div style={fivetwo}>Total Commitment funds</div>
            </div>
        </div>
    )
}
