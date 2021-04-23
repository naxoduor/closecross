import { Grid } from '@material-ui/core'
import Button from '../../../../../components/ButtonComponent'
import DropdownComponent from '../../../../../components/dropdown'
import Display from '../../../../../components/display'
export default function TrendingSection(){

    const style={
        justify:"flex-end",
        display:"flex",
        flexDirection:"row",
        padding:"20px"
}

const text="units:"

    return (
        <Grid style={style}>
            <Display text={text}/>
            <Button bgcolor="#1E2122" color="green" variant="button" text="%" border="2px solid green" padding="1px"/>
            <Button bgcolor="green" color="#1E2122" variant="button" text="$" border="2px solid green" padding="1px"/>
            <Display style={{marginLeft:"20px"}} text={"Sort By"}/>
            <DropdownComponent/>
        </Grid>
    )
}