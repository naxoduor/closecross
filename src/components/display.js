import { Grid } from '@material-ui/core';
export default function display(props){
    return (
        <Grid style={props.style}>
            {props.text}
        </Grid>
    )
}