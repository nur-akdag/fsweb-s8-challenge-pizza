import { Route, Switch } from 'react-router-dom';
import GirisSayfasi from './components/GirisSayfasi';
import SiparisSayfasi from './components/SiparisSayfasi';
import SiparisBasarili from './components/SiparisBasarili';


function App() {
  return (
    <Switch> 
      <Route exact path="/">
        <GirisSayfasi/>
      </Route>
      <Route path="/siparis">
        <SiparisSayfasi />
      </Route>
      <Route path="/basarili">
        <SiparisBasarili />
      </Route>
    </Switch>
  );
}

export default App;