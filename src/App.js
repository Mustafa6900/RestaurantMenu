import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Balik } from "./components/SubPages/Balik";
import { izgara } from "./components/SubPages/izgara";
import { Corba } from "./components/SubPages/Corba";
import { icecek } from "./components/SubPages/icecek";
import { SuluYemek } from "./components/SubPages/SuluYemek";
import { Tatli } from "./components/SubPages/Tatli";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
        <div className="restaurantName">
          <h3>Dombili Kebap</h3>
          
        </div>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/balik" component={Balik} />
            <Route path="/corba" component={Corba} />
            <Route path="/İzgara" component={izgara} />
            <Route path="/icecek" component={icecek} />
            <Route path="/suluyemek" component={SuluYemek} />
            <Route path="/tatli" component={Tatli} />
          </Switch>
        </div>
      </Router>
      <div className="slogan">
     
      <h3>Bizi tercih ettiğiniz için teşekkür ederiz</h3>
      <img src={'./logo.png'} alt="logo"/> 
      </div>
     
    </>
  );
}

export default App;
