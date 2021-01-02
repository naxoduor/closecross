import { Grid } from '@material-ui/core';
import './App.css';
import ButtonsContainer from './components/containers/ButtonsContainer'
import Button from './components/ButtonComponent'
import Icon from './components/Icons'
import SectionsContainer from './components/containers/SectionsContainer'
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
    margin: "auto"
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
    position: "relative",
    borderBottom: "2px solid green",
    margin: "auto"
  }
  const sidepanel = {
    backgroundColor: "#18181C",
    width: "260px",
    height: "656px",
    marginLeft: "0px",
  }

  const buttonStyle = {
    position: "absolute",
    top: "25%",
  }


  return (
    <div className="App" style={{ alignItems: "center" }}>
      <div style={topstyle}>

        <Grid container justify="flex-start" style={buttonStyle}>
          <Button bgcolor="white" color="#494947" variant="caption" text="Training Mode" />
          <Button bgcolor="#494947" color="white" variant="caption" text="Live Mode" />
        </Grid>

        <Grid container justify="center" style={buttonStyle}>
          <ButtonsContainer />
        </Grid>

        <Grid container justify="flex-end" style={buttonStyle}>
          <Icon />
        </Grid>
      </div>
      
      <div style={outerpanel}>
        <div style={sidepanel}>
          <SideNav />
        </div>
        <div style={style}>
          <div><TopMainSection /></div>
          <SectionsContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
