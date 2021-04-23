import { Grid } from '@material-ui/core'
import Section from './section'
export default function PanelsContainer(){
    
    return (
        <Grid>
            <Section amount="$ 34,346.00" />
            <Section amount="$ 329,146.00" />
            <Section amount="$ 129,146.00" />
            <Section amount="$ 46.00" />
            <Section amount="$ 00.00" />
        </Grid>
    )
}