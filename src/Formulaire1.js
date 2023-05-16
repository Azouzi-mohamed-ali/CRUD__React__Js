import {useState} from 'react';
function Formulaire() {
    const [inputs, setInputs] = useState({});
  
      const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Nom :",inputs.fullName);
        console.log("Email :",inputs.email);
    }
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = name === "image" ? event.target.files[0].name : event.target.value;
      setInputs(values => ({...values, [name]: value}))
       }

    return ( 
<>
<form onSubmit={(event)=>handleSubmit(event)}>
<div>Nom  
<input name="fullName" type="text" value={inputs.fullName} 
onChange={(e)=>handleChange(e)} />
</div>
<div>Email  
<input name="email" type="text" value={inputs.email} 
onChange={(e)=>handleChange(e)} />
</div>
<div>Image  
<input name="image" type="file" 
onChange={(e)=>handleChange(e)} />
</div>

<div>
{inputs.fullName?<p>Nom saisi : {inputs.fullName}</p>:null} 
{inputs.email?<p>Email saisi : {inputs.email}</p>:null} 
{inputs.image?<p><img src={inputs.image} alt="" width="80" /></p>:null} 
</div>

<div><input type="submit" value="Valider" /></div>
</form>
</>
     );
}

export default Formulaire;