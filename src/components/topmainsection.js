import React from 'react'
import TrendingSection from './subsections/trendingsection'
import FilterSection from './subsections/filtersection'
import { Grid } from '@material-ui/core';

export default function TopMainSection() {
    
    const style = {
        backgroundColor: "#1E2122",
        width: "1020px",
        alignItems: "center",
        color: "white",
        display:"flex",
        flexDirection:"row"
      }

    return (
        <div style={style}>
            <Grid container justify="flex-start"><FilterSection/></Grid>
            <Grid container justify="flex-end"><TrendingSection/></Grid>
        </div>
    )
}
