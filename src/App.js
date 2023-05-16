import './App.css';
import Produits from './ListProduits'
import Clients from './ListUsers'
import FormulaireClient from './FormulaireClient'
import UpdateClient from './UpdateClient';
import UpdateProduits from './UpdateProduits';
import AjouProd from './AjoutProd';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Routes,Link,BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
  <>
 
<div className="container" >
<Router>
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
 <li className="nav-item"> <Link className="nav-link" to="/listeprod">Produits</Link> </li>
 <li className="nav-item"> <Link className="nav-link" to="/listeclt">Clients</Link></li>
 <li className="nav-item"> <Link className="nav-link" to="/ajoutclt">Ajout Clients</Link></li>
 <li className="nav-item"> <Link className="nav-link" to="/AjoutProd">Ajout Produits</Link></li>
</ul>
	</nav>
<Routes>
<Route path="/" element={<Produits />} />
<Route path="/listeprod" element={<Produits />} />
<Route path="/listeclt" element={<Clients />} />
<Route path="/ajoutclt" element={<FormulaireClient />} />
<Route path="/AjoutProd" element={<AjouProd />} />
<Route path="/updateclt/:id" element={<UpdateClient />} />
<Route path="/updateproduits/:id" element={<UpdateProduits />} />
</Routes>
</Router>
 </div>

 </>
  );
}

export default App;
