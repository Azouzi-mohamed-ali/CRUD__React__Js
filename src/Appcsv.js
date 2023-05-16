import "./App.css";
//npm i emailjs-com
import emailjs from 'emailjs-com';
//npm i papaparse
import Papa from "papaparse";
import {useState} from 'react';
//npm i uuid
import { v4 as uuidv4 } from 'uuid';

// Allowed extensions for input file
const allowedExtensions = ["csv"];
 

function App() {

  // This state will store the parsed data
  const [data, setData] = useState([]);
     
  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");
   
  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
      setError("");
       
      // Check if user has entered the file
      if (e.target.files.length) {
          const inputFile = e.target.files[0];
           
          // Check the file extensions, if it not
          // included in the allowed extensions
          // we show the error
          const fileExtension = inputFile?.type.split("/")[1];
          if (!allowedExtensions.includes(fileExtension)) {
              setError("Please input a csv file");
              return;
          }
            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    const handleParse = () => {
         
        // If user clicks the parse button without
        // a file we show a error
        if (!file) return setError("Enter a valid file");
 
        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();
         
        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: false ,skipEmptyLines: true });
            const parsedData = csv?.data;
            // const columns = Object.keys(parsedData[0]);
            setData(parsedData);
            
            sendEmail(parsedData);
        };
        reader.readAsText(file);
    };
 
  
  const sendEmail = (rows) => {

  if(rows.length > 0) {
    rows.map((col) => {
      let email =col.toString();
   const objMail={
     nom: email.split("@")[0],
     email: email,
     password: uuidv4()
   };
  console.log(email)
  emailjs.send('service_b2esf7f', 'template_lk7qlik', objMail, 'user_25BYA73n1qm1kFTNRQimn')
  .then((result) => {
          console.log(result);
          console.log("SUCCESS!");
      }, (error) => {
          console.log(error);
          console.log("FAILED...", error);
      });

    });
  }
  };

  
  return (
<div className="container">
<label htmlFor="csvInput" style={{ display: "block" }}>
                Enter CSV File
            </label>
            <input
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
            />
            <div>
                <button onClick={handleParse}>Parse & Send</button>
            </div>
            <div style={{ marginTop: "3rem" }}>
                {error ? error : data.map((col,
                  idx) => <div key={idx}>{col}</div>)}
            </div>

    </div>
  );
}

export default App;
