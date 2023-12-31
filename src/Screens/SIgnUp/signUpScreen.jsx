import React, { useState } from "react";
import "./Css/SignUpForm.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Select from "../../Components/Select";
import { FaWifi } from "react-icons/fa6";

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
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' }
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

        <div className="sign-up-form container container-sm text-center">
          <FaWifi className="wifiIcon" />
          <h1 className="sign-up-form-title">SWISH</h1>

          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <Input
            type="email"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />

          <Input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <div className="d-flex" style={{
            alignSelf: 'center'
          }}>
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

          <div className="d-flex" style={{
            alignSelf: 'center'
          }}>
          <Input
            type="checkbox"
            // label="Accept terms and conditions"
            checked={termsAndConditionsAccepted}
            style={{
              width: '15px',
              height: '15px'
            }}
            onChange={(event) => setTermsAndConditionsAccepted(event.target.checked)}
          />
          <label>Accept terms and conditions</label>
          </div>
          

          <Button
            text="Connect"
            btnClass="btn-dark"
            onClick={handleSubmit}
          />

        </div>
      </div>
    </div>


  );
};

export default SignUpForm;
