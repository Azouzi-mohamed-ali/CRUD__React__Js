import Axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function ListUsers() {
    const [clients,setclients]=useState();
useEffect(()=>{
Axios.get("http://localhost:3001/clients").then(res=>{
              setclients(res.data);
            })
     });

const deleteClt=(id)=>{
    Axios.delete(`http://localhost:3001/clients/${id}`)
       }
   return ( 
        <>
        <h1 >clients :</h1>
     <table className="table table-dark">
      <tbody>
        {
          clients?  
            clients.map((clt)=>{
                return <tr key={clt.id}>
                   <td><img src= {clt.image} alt="" width="70"/></td>
                  <td>{clt.nom}</td>
                  <td> {clt.email}</td>
<td> <button className='btn btn-danger' onClick={() => deleteClt(clt.id)}>Supprimer</button></td>
<td> <Link to={`/updateclt/${clt.id}`} ><button className='btn btn-primary'>Modifier</button></Link></td>
                  </tr>
            })
            :null
        }
        </tbody>
    </table>
        </>
     );
}

export default ListUsers;

