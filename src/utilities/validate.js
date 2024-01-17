import { useState } from "react"

const validateInput=(firstName,email,password)=>{
    if (firstName.length===0){
      alert("Vardas negali buti tuscias");
      return false;
    }
    if (email.length===0){
      alert("Email negali buti tusicas");
      return false;
    }
    if (password.length<8){
      alert("Slaptazodis turi buti ilgesnis nei 8 simboliai");
      return false;
    }
    return true;
};



export default validation