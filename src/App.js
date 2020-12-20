import { Grid } from '@material-ui/core';
import './App.css';
import Button from './components/ButtonComponent'
import Icon from './components/Icons'
import Section from './components/section'
import SideNav from './components/sidenav'
import TopMainSection from './components/topmainsection'


function App() {

  const outerpanel = {
    backgroundColor: "#1E2122",
    width: "1280px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin:"auto"
  }
  const style = {
    backgroundColor: "#1E2122",
    width: "1020px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  }

  const topstyle = {
    backgroundColor: "#494947",
    height: "64px",
    width: "1280px",
    position:"relative",
    borderBottom:"2px solid green",
    margin:"auto"
  }

  const innerstyle = {
    backgroundColor: "#27A2D",
    height: "88px",
    width: "930px",
    alignItems: "center",
    color: "white",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
    border:"1px solid grey",
    borderRadius:"25px"
  }
  const sidepanel = {
    backgroundColor: "#18181C",
    width: "260px",
    height: "656px",
    marginLeft: "0px",
  }

  const buttonStyle={
    position:"absolute",
    top:"25%",
  }


  return (
    <div className="App" style={{ alignItems: "center" }}>
        <div style={topstyle}>
          <Grid container justify="flex-start" style={buttonStyle}>
            <Button bgcolor="white" color="#494947" variant="caption" text="Training Mode"/>
            <Button bgcolor="#494947" color="white" variant="caption" text="Live Mode"/>
          </Grid>
          <Grid container justify="center" style={buttonStyle}>
            <Button bgcolor="white" color="#494947" variant="button" text="Show All"/>
            <Button bgcolor="#494947" color="white" variant="button" text="Crypto"/>
            <Button bgcolor="white" color="#494947" variant="button" text="Commodities"/>
            <Button bgcolor="#494947" color="white" variant="button" text="Stock"/>
            <Button bgcolor="white" color="#494947" variant="button" text="Index"/>
            <Button bgcolor="#494947" color="white" variant="button" text="Currency"/>
          </Grid>
          <Grid container justify="flex-end" style={buttonStyle}>
          <Icon />
          </Grid>
        </div>
        <div style={outerpanel}>
          <div style={sidepanel}>
            <SideNav/>
          </div>
          <div style={style}>
            <div><TopMainSection/></div>
            <div style={innerstyle}><Section amount="$ 34,346.00"/></div>
            <div style={innerstyle}><Section amount="$ 329,146.00"/></div>
            <div style={innerstyle}><Section amount="$ 129,146.00"/></div>
            <div style={innerstyle}><Section amount="$ 46.00"/></div>
            <div style={innerstyle}><Section amount="$ 00.00"/></div>
          </div>
        </div>
    </div>
  );
}

export default App;
