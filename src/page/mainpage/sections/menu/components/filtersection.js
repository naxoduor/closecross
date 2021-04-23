import { Grid } from '@material-ui/core'
import Button from '../../../../../components/ButtonComponent'
import Display from '../../../../../components/display'
export default function FilterSection(){

    const style={
        justify:"flex-start",
        display:"flex",
        flexDirection:"row",
        padding:"20px",
        marginRight:"400px"
}

    const text="select assets type and period"
    return(
        <Grid style={style}>
            <Display text={text}/>
            <Button bgcolor="#1E2122" color="green" variant="button" text="Filter" border="2px solid green" padding="2px" margin="10px"/>
        </Grid>
    )
}