import {useState} from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AjoutProd() {
    const [inputs, setInputs] = useState({});
  const navigate =useNavigate();
  
      const handleSubmit=(event)=>{
        event.preventDefault();
        Axios.post("http://localhost:3001/produits",inputs).then(res=>{
            console.log(res);
            navigate("/listeprod");
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

export default AjoutProd;