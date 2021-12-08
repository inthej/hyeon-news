import {Redirect, Switch, withRouter} from 'react-router-dom';
import {createGlobalStyle} from "styled-components";
import RouteWithLayout from "./layouts";
import Main from "./layouts/Main";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    font-family: 'Nanum Gothic', serif;
    font-size: 17px;
    color: #2f2f2f;
    background-color: #f9f7f1;
    margin: 0;
    padding: 0;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;


const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Switch>
        <Redirect exact from="/" to="news"/>
        <RouteWithLayout path="/news/:category?" layout={Main} component={News}/>
        <RouteWithLayout path="/not-found" layout={Main} component={NotFound}/>
        <Redirect to="/not-found"/>
      </Switch>
    </>
  );
}

export default withRouter(App);
