import React, { useState, useEffect, useRef } from "react";
import "./App.css";


function App() {
  const [result, setResult] = useState("");
  const Akash=(event)=>{
    setResult(result.concat(event.target.value))
  }
  const Amit=()=>{
    try{
    setResult(eval(result).toString())
    }catch(Error){
      setResult("Error")
    }
  }
  const Aka=()=>{
    setResult("")
  }
  const Ak=()=>{
    setResult(result.slice(0, -1));
  }
return(
  <>
  <div id="cal">
   <input type="text" placeholder="0" id="text" value={result} />
   <br/>
   <input type="button" value="C" className="A1" onClick={Ak}/>
   <input type="button" value="%" className="A2" onClick={Akash}/>
   <input type="button" value="clear" className="A3" onClick={Aka}/>
   
   <input type="button" value="/" className="A4" onClick={Akash}/><br/>
   
   <input type="button" value="9" className="A5" onClick={Akash}/>
   <input type="button" value="8" className="A6" onClick={Akash}/>
   <input type="button" value="7" className="A7" onClick={Akash}/>
   <input type="button" value="+" className="A8" onClick={Akash}/>
   <br/>
   
   <input type="button" value="6" className="A9" onClick={Akash}/>
   <input type="button" value="5" className="A10" onClick={Akash}/>
   <input type="button" value="4" className="A11" onClick={Akash}/>
   <input type="button" value="-" className="A12" onClick={Akash}/><br/>
   <input type="button" value="3" className="A13" onClick={Akash}/>
   <input type="button" value="2" className="A14" onClick={Akash}/>
   <input type="button" value="1" className="A15" onClick={Akash}/>
   <input type="button" value="*" className="A16" onClick={Akash}/>
   <br/>
   <input type="button" value="0" className="A17" onClick={Akash}/>
   <input type="button" value="." className="A18" onClick={Akash}/>
   <input type="button" value="00" className="A19" onClick={Akash}/>
   <input type="button" value="=" className="A20" onClick={Amit}/>
   
   
   
   
   
   
   
   
   </div>
  </>
  )
}
export default App;


        