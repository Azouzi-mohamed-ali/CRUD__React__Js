import Axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function ListProduits() {
    const [produits,setproduits]=useState();
useEffect(()=>{
Axios.get("http://localhost:3001/produits").then(res=>{
              setproduits(res.data);
            })
     },[]);

     const deleted=(e)=>{
      Axios.delete('http://localhost:3001/produits/' + e)
      window.location.reload()
     }

   return ( 
        <>
        <h1>produits :</h1>
      <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center"}}>
        {
          produits?  
            produits.map((prod)=>{
                return <div className="card" style={{"width": "18rem"}} key={prod.id}>
                <img src={prod.imageartpetitf} className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">{prod.designation}</h5>
                  <p className="card-text">{prod.marque}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{prod.reference}</li>
                  <li className="list-group-item">{prod.prixVente} TND</li>
                  <button className='btn btn-danger'  onClick={()=>deleted(prod.id)}>Supprimer</button>
                  <button className='btn btn-primary'>
                     <Link to={`/updateproduits/${prod.id}`} ><button className='btn btn-primary'>Modifier</button>
                     </Link>
                  </button>
         
               </ul>
               
              </div>

            })
            :null
        }
    </div>
        </>
     );
}

export default ListProduits;

