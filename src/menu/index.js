import { Grid } from '@material-ui/core';
import StockType from './submenus/stocktype'
import Training from './submenus/Training'
import Icon from './submenus/icons'

export default function Menu() {
    const topstyle = {
        backgroundColor: "#494947",
        height: "64px",
        width: "1280px",
        position: "relative",
        borderBottom: "2px solid green",
        margin: "auto",
      }

      const buttonStyle = {
        position: "absolute",
        top: "30%",
      }
    

    return (
        <Grid style={topstyle}>
            <Training buttonStyle={buttonStyle}/>
            <StockType buttonStyle={buttonStyle}/>
            <Icon buttonStyle={buttonStyle}/>
        </Grid>
    )
}