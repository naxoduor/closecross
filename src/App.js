import './App.css';
import Menu from './menu/'
import Page from './page'



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
      <Menu/>
      <Page/>
    </div>
  );
}

export default App;
