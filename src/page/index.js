import TradeDetails from './sidepage/tradedetails'
import TradeAnalysis from './mainpage/tradeanalysis'
import { Grid } from '@material-ui/core'
export default function page() {

    const outerpanel = {
        backgroundColor: "#1E2122",
        width: "1280px",
        display: "flex",
        flexDirection: "row",
    }

    const style = {
        backgroundColor: "#18181C",
        width: "260px",
        height: "656px",
        marginLeft: "0px",
        paddingLeft:"20px",
        paddingRight: "20px",
    }

    const tAnalysisStyle = {
        backgroundColor: "#1E2122",
        width: "1020px",
        display: "flex",
        flexDirection: "column",
        color: "white",
        marginTop:"0px"
      }

    return (
        <Grid style={outerpanel}>
            <TradeDetails style={style} />
            <TradeAnalysis style={tAnalysisStyle}/>
        </Grid>
    )
}