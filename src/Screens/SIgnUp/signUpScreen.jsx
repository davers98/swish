import React, { useState } from "react";
import "./Css/SignUpForm.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Select from "../../Components/Select";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] = useState(
    false
  );
  const options = [
  { value: 'Female', label: 'Female'},
  { value: 'Male', label: 'Male'}
  ]

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data.

    // If the form data is valid, submit it to your backend server.
  };

  return (

    <div className="container container-lg">

      <div className="top-section">

        <h1 className="text-center mt-3">Ad <br /> Goes Here</h1>
      </div>

      <div className="bottom-section">

        <div className="sign-up-form container container-sm m-auto text-center">
          <h1 className="sign-up-form-title">Swish</h1>

          <Input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <Input
            type="email"
            placeholder="Email address"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />

          <Input
            type="tel"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <div className="d-flex">
          <Input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          
          <Select
            label="Select Gender"
            options={options}
            onChange={(event) => console.log(event.target.value)}
               name="select-input"
          />
          </div>

        
         <div className="d-flex">
         <Input
            type="checkbox"
            label="Accept terms and conditions"
            checked={termsAndConditionsAccepted}
            onChange={(event) => setTermsAndConditionsAccepted(event.target.checked)}
          />

         </div>
         

          <Button
            text="Connect"
            btnClass= "btn-dark"
            onClick={handleSubmit}
          />
           
        </div>
      </div>
    </div>


  );
};

export default SignUpForm;
