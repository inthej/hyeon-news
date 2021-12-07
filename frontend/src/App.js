import {Redirect, Switch, withRouter} from 'react-router-dom';
import './App.css';
import RouteWithLayout from "./layouts";
import Main from "./layouts/Main";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
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
