import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function sideheader(props) {
    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }

    return (
        <div style={style}>
                <div style={{ margin: "auto" }}><TrendingUpIcon style={{ fill: "green" }} />
                </div >
                <div style={{ margin: "auto", color: "green" }}>
                    {props.text}
                    </div>
                <div style={{ margin: "auto", color: "green" }}><ArrowForwardIosIcon style={{ fill: "green" }} />
                </div>
            </div>
    )
}
