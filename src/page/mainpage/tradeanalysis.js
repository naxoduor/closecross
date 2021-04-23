import { Grid } from '@material-ui/core'
import PageMenu from './sections/menu/menu'
import PanelsContainer from './sections/panels'
export default function TradeAnalysis(props){
    return (
        <Grid style={props.style}>
            <PageMenu/>
            <PanelsContainer/>
        </Grid>
    )
}