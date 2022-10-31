import React, { useState } from "react";
// import { Form, Card, Button } from "react-bootstrap";
// import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const InterviewInfoOld = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [fname, setFname] = useState(false);
  const [lname, setLname] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    // if (
    // //   validator.isEmpty(values.firstName) ||
    // //   validator.isEmpty(values.lastName)
    // ) 
    // {
    //   setError(true);
    // } else {
    //   nextStep();
    // }
  };

  return (
    <div className="container d-flex justify-content-center mt-4">
              
        <div className="card w-50 shadow mb-5 bg-body rounded m-2">
          <form onSubmit={submitFormData}>
            <div className="mb-3">
              {/* <label>First Name</label> */}
              <div className="form-group mt-3" controlId="fname">
                <label>First Name</label>
                <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter first name"
                autoFocus
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                />
            </div>
{/*              
              {error ? (
                <p style={{ color: "red" }}>
                  This is a required field
                </p>
              ) : (
                ""
              )} */}
            </div>
            <div className="form-group mt-3" controlId="lname">
                <label>Last Name</label>
                <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter last name"
                autoFocus
                value={fname}
                onChange={(e) => setLname(e.target.value)}
                />
           
              {error ? (
                <p style={{ color: "red" }}>
                  This is a required field
                </p>
              ) : (
                ""
              )}
             </div>
            <button variant="primary" type="submit">
              Continue
            </button>
          </form>
        </div>
    </div>
  );
};

export default InterviewInfoOld;
