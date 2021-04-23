import Button from '../../components/ButtonComponent'
import { Grid } from '@material-ui/core';
export default function Training(props) {
    return (
        <Grid container justify="flex-start" style={props.buttonStyle}>
            <Button bgcolor="white" color="#494947" variant="caption" text="Training Mode" />
            <Button bgcolor="#494947" color="white" variant="caption" text="Live Mode" />
        </Grid>
    )
}