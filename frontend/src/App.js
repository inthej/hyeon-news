import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Main from "./layouts/Main";
import RouteWithLayout from "./layouts";
import News from "./pages/News";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="news" />
        <RouteWithLayout path="/news/:category?" layout={Main} component={News} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
