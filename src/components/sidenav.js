import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { green } from '@material-ui/core/colors';
import Button from './ButtonComponent'
import Divider from '@material-ui/core/Divider';

export default function sidenav() {
    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px"
    }
    return (
        <div>
            <div style={{ margin: "auto" }}>
                <div style={{ marginBottom: "30px", borderBottom: "1px solid grey", padding: "20px" }}>
                    <div style={style}>
                        <div style={{ margin: "auto" }}><TrendingUpIcon style={{ fill: "green" }} />
                        </div >
                        <div style={{ margin: "auto", color: "green" }}>
                            OPEN TRADES
                    </div>
                        <div style={{ margin: "auto", color: green }}><ArrowForwardIosIcon style={{ fill: "green" }} />
                        </div>
                    </div>
                    <div></div>
                    <div style={style}>
                        <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>15m
                    </span>
                        <span style={{ margin: "auto", color: "white", fontSize: "30px" }}>25m 45s</span>
                    </div>
                </div>
                <Divider />

                <div style={{ marginBottom: "30px", borderBottom: "1px solid grey", paddingBottom: "20px" }}>
                    <div style={style} >
                        <div style={{ margin: "auto" }}><TrendingUpIcon style={{ fill: "green" }} />
                        </div >
                        <div style={{ margin: "auto", color: "white" }}>
                            TRADING HISTORY
                    </div>
                        <div style={{ margin: "auto", color: green }}><ArrowForwardIosIcon style={{ fill: "green" }} />
                        </div>
                    </div>

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
                </div>
                <div><span></span></div>
            </div>


            <div style={style}>
                <div style={{ margin: "auto" }}><TrendingUpIcon style={{ fill: "green" }} />
                </div >
                <div style={{ margin: "auto", color: "white" }}>
                    TRADING WALLET
                    </div>
                <div style={{ margin: "auto", color: green }}><ArrowForwardIosIcon style={{ fill: "green" }} />
                </div>
            </div>
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
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
