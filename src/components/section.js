import React from 'react'
import HourSection from '../components/subsections/hoursection'
import NumberSection from '../components/subsections/numbersection'
import ChartSection from '../components/subsections/chartsection'
import Graphsection from '../components/subsections/graphsection'
import TotalsSection from '../components/subsections/totalssection'

export default function section() {
    const root = {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        position: "relative"
    }
    
    return (
        <div style={root}>
            <HourSection/>
            <NumberSection/>
            <ChartSection/>
            <Graphsection/>
            <TotalsSection/>
        </div>
    )
}
