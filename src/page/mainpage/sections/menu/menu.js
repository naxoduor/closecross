import { Grid } from '@material-ui/core'
import FilterSection from './components/filtersection'
import TrendingSection from './components/trendingsection'
export default function PageMenu() {

    const style = {
        display: "flex",
        flexDirection: "row",
        marginBetween: "100px",
    }
    return (
        <Grid style={style}>
            <FilterSection />
            <TrendingSection />
        </Grid>)
}