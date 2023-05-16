import {useState,useEffect} from 'react';
import Axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

function Formulaire() {
    const [inputs, setInputs] = useState({});
  const navigate =useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    Axios.get(`http://localhost:3001/produits/${id}`).then(res=>{ setInputs(res.data); })
            },[]);


      const handleSubmit=(event)=>{
        event.preventDefault();
        Axios.put(`http://localhost:3001/produits/${id}`,inputs).then(res=>{
            console.log(res);
            navigate("/listeprod")
          })
    }
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
       }

    return ( 
<>
<form onSubmit={(event)=>handleSubmit(event)}>
<div>Designation  
<input name="designation" type="text" value={inputs.designation} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Marque 
<input name="marque" type="text" value={inputs.marque}  className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Image 
<input name="imageartpetitf" type="text" value={inputs.imageartpetitf} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Réference
<input name="reference" type="text" value={inputs.reference} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>PrixVente 
<input name="prixVente" type="text" value={inputs.prixVente} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Qtestock 
<input name="qtestock" type="text" value={inputs.qtestock} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div><input type="submit" value="Valider" className="btn btn-success"/></div>
</form>
</>
     );
}

export default Formulaire;