import Button from '../../components/ButtonComponent'
import { Grid } from '@material-ui/core';
export default function StockType(props){
    return (
        <Grid container justify="center" style={props.buttonStyle}>
            <Button bgcolor="white" color="#494947" variant="button" text="Show All"/>
            <Button bgcolor="#494947" color="white" variant="button" text="Crypto"/>
            <Button bgcolor="white" color="#494947" variant="button" text="Commodities"/>
            <Button bgcolor="#494947" color="white" variant="button" text="Stock"/>
            <Button bgcolor="white" color="#494947" variant="button" text="Index"/>
            <Button bgcolor="#494947" color="white" variant="button" text="Currency"/>
        </Grid>
    )
}