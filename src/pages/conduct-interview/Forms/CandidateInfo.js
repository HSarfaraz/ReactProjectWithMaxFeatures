import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ErrorMessage } from "../../../components/card";

function CandidateInfo({ page, setPage, formData, setFormData }) {
  const navigate = useNavigate();
  const validateEmptyCandidateForm = () => {
    let { firstName, lastName, email, phone, experience, careerStageApplied } =
      formData;
    console.log(
      firstName,
      lastName,
      email,
      phone,
      experience,
      careerStageApplied
    );
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      experience.length > 0 &&
      careerStageApplied.length > 0
    );
    // if (!firstName.length) {
    //   return setErrorMessage(errorMessages.invalidFirstName);
    // } else {
    //   return setErrorMessage("");
    // }
  };

  // const validateName = () => {
  //   var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  //   var name = document.getElementById('name').value;
  //   if (!regName.test(name)) {
  //     alert("Please enter your full name (first & last name).");
  //     document.getElementById("name").focus();
  //     return false;
  //   } else {
  //     alert("Valid name given.");
  //     return true;
  //   }
  // };

  // const [validationMessages, setValidationMessages] = useState([]);
  // const [formData, setFormData] = useState({});
  // const handleChange = ({ target }) => {
  //   setFormData({ ...formData, [target.name]: target.value });
  // };
  // const handleClick = (evt) => {
  //   validateForm();
  //   if (validationMessages.length > 0) {
  //     evt.preventDefault();
  //   }
  // };

  // const validateForm = () => {
  //   const { firstName } = formData;
  //   setValidationMessages([]);
  //   let messages = [];
  //   if (!firstName) {
  //     messages.push("First Name is required");
  //   }
  //   setValidationMessages(messages);
  // };

  const [errorMessage, setErrorMessage] = useState("");

  const errorMessages = {
    invalidFirstName: "Please enter first name",
    invalidLastName: "Please enter last name",
    emptyEmail: "Please enter email",
    invalidEmail: "Please enter valid email",
    invalidPhone: "Please enter phone",
    invalidExperience: "Please enter experience",
    invalidCareerStageApplied: "Please enter Career stage applied",
  };

  const handleClick = (e) => {
    e.preventDefault();
    let { firstName, lastName, email, phone, experience, careerStageApplied } =
      formData;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!firstName) {
      setErrorMessage(errorMessages.invalidFirstName);
    } else if (!lastName) {
      setErrorMessage(errorMessages.invalidLastName);
    }
    // else if (!email) {
    //   setErrorMessage(errorMessages.emptyEmail);
    // }
    else if (!regex.test(email)) {
      setErrorMessage(errorMessages.invalidEmail);
    } else if (!phone) {
      setErrorMessage(errorMessages.invalidPhone);
    } else if (!experience) {
      setErrorMessage(errorMessages.invalidExperience);
    } else if (!careerStageApplied) {
      setErrorMessage(errorMessages.invalidCareerStageApplied);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="card col-md-12 mx-auto h-auto shadow mb-5 bg-body rounded border-0 m-2 p-0">
      <div className="card-header bg-danger-custom text-white">
        <div className="row">
          <div className="col">
            <h5 className="mt-3 fw-bold">Candidate Information</h5>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end m-1 col">
            <button
              type="button"
              className="btn btn-light text-danger border-1 rounded-circle"
              onClick={() => {
                navigate(`/`);
              }}
              title="cancel the interview"
            >
              <i className="fa fa-close" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <form onClick={handleClick} className="card-body">
        {/* <h6 className="mt-3 fw-bold bg-light p-2 rounded">Candidate Information </h6> */}

        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="firstName">
              <i className="fa fa-user fa-1x p-2" aria-hidden="true"></i>
              First Name :
            </label>
          </div>
          <div className="col w-50">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName || ""}
              className="form-control mt-3"
              aria-describedby="firstName"
              id="firstName"
              onChange={(e) => {
                // validateName(formData.firstName);
                //validateFirstName(),
                setFormData({
                  ...formData,
                  firstName: e.target.value.slice(0, 30),
                });
              }}
              // onChange={handleChange}
            />
            {errorMessage === errorMessages.invalidFirstName && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>
        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="lastName">
              <i className="fa fa-user fa-1x p-2" aria-hidden="true"></i>
              Last Name :
            </label>
          </div>
          <div className="col w-50">
            <input
              type="email"
              placeholder="Last Name"
              value={formData.lastName}
              className="form-control mt-3"
              aria-describedby="lastName"
              id="lastName"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastName: e.target.value.slice(0, 30),
                })
              }
            />
            {errorMessage === errorMessages.invalidLastName && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>
        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="email">
              <i className="fa fa-envelope fa-1x p-2" aria-hidden="true"></i>
              Email:
            </label>
          </div>
          <div className="col w-50">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              className="form-control mt-3"
              aria-describedby="email"
              id="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errorMessage === errorMessages.invalidEmail && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>

        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="phone">
              <i className="fa fa-phone fa-1x p-2" aria-hidden="true"></i>
              Phone:
            </label>
          </div>
          <div className="col w-50">
            <input
              type="number"
              placeholder="Phone"
              value={formData.phone}
              className="form-control mt-3"
              aria-describedby="phone"
              id="phone"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value.slice(0, 10) })
              }
            />
            {errorMessage === errorMessages.invalidPhone && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>

        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="experience">
              <i className="fa fa-suitcase fa-1x p-2" aria-hidden="true"></i>
              Experience:
            </label>
          </div>
          <div className="col w-50">
            <input
              type="number"
              placeholder="Experience"
              value={formData.experience}
              className="form-control mt-3"
              aria-describedby="experience"
              id="experience"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experience: e.target.value.slice(0, 2),
                })
              }
              novalidate
            />
            {errorMessage === errorMessages.invalidExperience && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>

        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="careerStageApplied">
              <i className="fa fa-suitcase fa-1x p-2" aria-hidden="true"></i>
              Career Stage Applied:
            </label>
          </div>
          <div className="col w-50 pt-3">
            <select
              defaultValue=""
              className="form-select"
              id="careerStageApplied"
              aria-label="Career Stage Applied"
              value={formData.careerStageApplied}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  careerStageApplied: e.target.value,
                })
              }
            >
              <option value="" disabled>
                Select recommended career stage
              </option>
              <option value="Junior Associate">Junior Associate</option>
              <option value="Associate L1">Associate L1</option>
              <option value="Associate L2">Associate L2</option>
              <option value="Sr. Associate L1">Sr. Associate L1</option>
              <option value="Sr. Associate L2">Sr. Associate L2</option>
              <option value="Manager">Manager</option>
              <option value="Sr. Manager">Sr. Manager</option>
            </select>

            {errorMessage === errorMessages.invalidCareerStageApplied && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
            {/* <select
              className="form-select mt-3"
              id="careerStageApplied"
              aria-label="careerStageApplied"
              value={formData.careerStageApplied}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  careerStageApplied: e.target.value,
                })
              }
            >
              <option selected>Select recommended career stage</option>
              <option value="Junior Associate">Junior Associate</option>
              <option value="Associate L1">Associate L1</option>
              <option value="Associate L2">Associate L2</option>
              <option value="Sr. Associate L1">Sr. Associate L1</option>
              <option value="Sr. Associate L2">Sr. Associate L2</option>
              <option value="Manager">Manager</option>
              <option value="Sr. Manager">Sr. Manager</option>
            </select> */}
          </div>
        </div>

        {/* <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label><i className="fa fa-suitcase fa-1x p-2" aria-hidden="true"></i> 
              Resume: 
            </label>
          </div>
          <div className="col w-50">
          <input
              type="file"
              placeholder="Resume"
              value={formData.resume} 
              className="form-control mt-3" aria-describedby="resume"
              onChange={(e) =>
                setFormData({ ...formData, resume: e.target.value })  
              }
            />
             <button className="btn btn-danger-custom">upload</button> 
          </div>
        </div> */}

        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
          <button
            className="btn btn-danger-custom rounded-circle px-3 py-1"
            aria-label="left icon"
            type="button"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
          </button>
          <button
            className="btn btn-danger-custom rounded-circle px-3 py-1"
            aria-label="right icon"
            value="icon"
            type="button"
            disabled={!validateEmptyCandidateForm()}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
          </button>
          {/* <div>
            {validationMessages.length > 0 && <span>Validation Summary</span>}
            <ul>
              {validationMessages.map((vm) => (
                <li key={vm}>{vm}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default CandidateInfo;
