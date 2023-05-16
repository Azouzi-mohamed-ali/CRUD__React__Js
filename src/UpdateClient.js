import {useState,useEffect} from 'react';
import Axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

function Formulaire() {
    const [inputs, setInputs] = useState({});
  const navigate =useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    Axios.get(`http://localhost:3001/clients/${id}`).then(res=>{ setInputs(res.data); })
            },[]);


      const handleSubmit=(event)=>{
        event.preventDefault();
        Axios.put(`http://localhost:3001/clients/${id}`,inputs).then(res=>{
            console.log(res);
            navigate("/listeclt")
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
<div>Nom  
<input name="nom" type="text" value={inputs.nom}  className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Email  
<input name="email" type="text" value={inputs.email} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Image  
<input name="image" type="text" value={inputs.image} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div><input type="submit" value="Valider" className="btn btn-success"/></div>
</form>
</>
     );
}

export default Formulaire;