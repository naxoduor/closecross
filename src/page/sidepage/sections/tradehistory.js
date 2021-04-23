import { Grid } from '@material-ui/core'
import Button from '../../../components/ButtonComponent'
import SideHeader from './sideheader'
import ChartSection from '../../../components/chartsection'
import Display from '../../../components/display'
import React from 'react'
import { Chart } from 'react-charts'

export default function TradeHistory() {
    const style = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5px",
    }

    const displayStyle = {
        marginTop: "5px",
        margin: "auto",
        color: "white"
    }

    const displayTwo = {
        marginTop: "5px",
        margin: "auto",
        color: "white",
        fontSize: "30px"
    }

    const data = React.useMemo(
        () => [
            {
                data: [{ x: 1, y: 10 },{x:1.5,y:5}, { x: 2, y: 10 },{x:2.5,y:5}, { x: 3, y: 10 },{x:3.5,y:5},{x:4,y:10},{x:5,y:5},{x:5.5,y:10}]
            },
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    const chartStyle={
        height: '0px',
        marginTop: "20px",
        paddingRight:"20px"
    }
    

    const text = "TRADING HISTORY"

    return (
        <Grid style={{ marginBottom: "30px", paddingRight: "20px" }}>
            <SideHeader text={text} />
            <Grid style={style}>
                <Button bgcolor="#494947" color="white" variant="button" text="Last" />
                <Button bgcolor="#494947" color="white" variant="button" text="Day" />
                <Button bgcolor="green" color="white" variant="button" text="week" />
                <Button bgcolor="#494947" color="white" variant="button" text="month" />
            </Grid>

            <Grid style={style}>
                <Display style={displayStyle} text={"Last"} />
                <Display style={displayStyle} text={"Total Trades"} />
                <Display style={displayStyle} text={"Posts"} />
            </Grid>
            <Grid style={style}>
                <Display style={displayTwo} text={"245"} />
                <Display style={displayTwo} text={"+21.5%"} />
            </Grid>
            <Chart data={data} axes={axes} style={chartStyle} paddingRight="20px"/>
        </Grid>
    )
}