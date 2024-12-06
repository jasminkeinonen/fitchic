import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';
import 'leaflet/dist/leaflet.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Menu from './pages/Menu';
import List from './pages/List';
import Settings from './pages/Settings';
import About from './pages/About';
import Contact from './pages/Contact';
import Workout from './pages/Workout';
import Recipes from './pages/Recipes';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu /> 
      <IonContent id="main-content"> 
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route component={Home} path="/home" exact />
          <Route component={Login} path="/login" exact />
          <Route component={Register} path="/register" exact />
          <Route component={List} path="/list" exact />
          <Route component={Settings} path="/settings" exact />
          <Route component={About} path="/about" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={Workout} path="/workout" exact />
          <Route component={Recipes} path="/recipes" exact />
          
        </IonRouterOutlet>
      </IonContent>
    </IonReactRouter>
  </IonApp>
);

export default App;
