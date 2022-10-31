import React, { useState } from "react";

import { useNavigate } from "react-router";
import { ErrorMessage } from "../../../components/card";
import { LinkStyle } from "../../../components/navbar/navbar.styled";

const Feedback = ({ page, setPage, formData, setFormData }) => {
  const navigate = useNavigate();
  let [interviewDetails, setInterviewDetails] = useState("");
  const validateEmptyFeedbackForm = () => {
    let {
      relevantExperience,
      recommendedCareerStage,
      outcome,
      trainable,
      training,
      feedback,
    } = formData;
    console.log(
      relevantExperience,
      recommendedCareerStage,
      outcome,
      trainable,
      training,
      feedback
    );
    return (
      relevantExperience.length > 0 &&
      recommendedCareerStage.length > 0 &&
      outcome.length > 0 &&
      trainable.length > 0 &&
      training.trim().length > 0 &&
      feedback.length > 0
      // formData.length > 0
    );
  };

  const [errorMessage, setErrorMessage] = useState("");

  const errorMessages = {
    invalidRelevantExperience: "Please enter eperience",
    invalidRecommendedCareerStage: "Please enter recommended career stage",
    invalidOutcome: "Please enter outcome",
    invalidTrainable: "Please enter trainable",
    invalidTraining: "Please enter training",
    invalidFeedback: "Please enter feedback",
  };

  const handleClick = (e) => {
    e.preventDefault();
    let {
      relevantExperience,
      recommendedCareerStage,
      outcome,
      trainable,
      training,
      feedback,
    } = formData;
    if (!relevantExperience) {
      setErrorMessage(errorMessages.invalidRelevantExperience);
    } else if (!recommendedCareerStage) {
      setErrorMessage(errorMessages.invalidRecommendedCareerStage);
    } else if (!outcome) {
      setErrorMessage(errorMessages.invalidOutcome);
    } else if (!trainable) {
      setErrorMessage(errorMessages.invalidTrainable);
    } else if (!training) {
      setErrorMessage(errorMessages.invalidTraining);
    } else if (!feedback) {
      setErrorMessage(errorMessages.invalidFeedback);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="card col-md-12 mx-auto h-auto shadow mb-5 bg-body rounded border-0 m-2 p-0">
      <div className="card-header bg-danger-custom text-white">
        <div className="row">
          <div className="col">
            <h5 className="mt-3 fw-bold">Feedback</h5>
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
        <div className="card-text mb-1 row row-cols-2 row-cols-md-4 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="relevantExperience">
              <i className="fa fa-suitcase fa-1x p-2" aria-hidden="true"></i>
              Relevant Experience:
            </label>
          </div>
          <div className="col w-50">
            <input
              type="number"
              placeholder="Relevant Experience"
              value={formData.relevantExperience}
              className="form-control mt-3"
              aria-describedby="relevantExperience"
              id="relevantExperience"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  relevantExperience: e.target.value.slice(0, 2),
                })
              }
            />
            {errorMessage === errorMessages.invalidRelevantExperience && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>

        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label>
              <i className="fa fa-calendar fa-1x p-2" aria-hidden="true"></i>
              Recommended Career Stage:
            </label>
          </div>
          <div className="col w-50 pt-3">
            <select
              className="form-select"
              defaultValue=""
              aria-label="recommendedCareerStage"
              value={formData.recommendedCareerStage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  recommendedCareerStage: e.target.value,
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
            {errorMessage === errorMessages.invalidRecommendedCareerStage && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>
        {/* Interview Mode ends */}
        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label>
              <i className="fa fa-calendar fa-1x p-2" aria-hidden="true"></i>
              Outcome:
            </label>
          </div>
          <div className="col w-50 pt-3">
            <select
              className="form-select"
              aria-label="outcome"
              defaultValue=""
              value={formData.outcome}
              onChange={(e) =>
                setFormData({ ...formData, outcome: e.target.value })
              }
            >
              <option value="" disabled>
                Select outcome
              </option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
            {errorMessage === errorMessages.invalidOutcome && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>
        {/* Interview Mode ends */}
        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label>
              <i className="fa fa-calendar fa-1x p-2" aria-hidden="true"></i>
              Trainable:
            </label>
          </div>
          <div className="col w-50 pt-3">
            <select
              className="form-select"
              aria-label="trainable"
              defaultValue=""
              value={formData.trainable}
              onChange={(e) =>
                setFormData({ ...formData, trainable: e.target.value })
              }
            >
              <option value="" disabled>
                Select trainable
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errorMessage === errorMessages.invalidTrainable && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>
        {/* Interview Mode ends */}
        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="training">
              <i className="fa fa-calendar fa-1x p-2" aria-hidden="true"></i>
              Training:
            </label>
          </div>
          <div className="col w-50 pt-3">
            <select
              className="form-select"
              id="training"
              defaultValue=""
              aria-label="training"
              value={formData.training}
              onChange={(e) =>
                setFormData({ ...formData, training: e.target.value })
              }
            >
              <option value="" disabled>
                Select training
              </option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS </option>
              <option value="OOJS">OOJS </option>
            </select>
            {errorMessage === errorMessages.invalidTraining && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>
        {/* Interview Mode ends */}

        <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
          <div className="col w-50 pt-3">
            <label htmlFor="feedback">
              <i className="fa fa-check fa-1x p-2" aria-hidden="true"></i>
              Feedback:
            </label>
          </div>
          <div className="col w-50">
            <input
              type="textarea"
              placeholder="Feedback"
              value={formData.feedback}
              className="form-control mt-3"
              aria-describedby="feedback"
              id="feedback"
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
            />
            {errorMessage === errorMessages.invalidFeedback && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </div>
        </div>

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
            className="btn btn-danger-custom"
            aria-label="submit button"
            type="button"
            disabled={!validateEmptyFeedbackForm()}
            onClick={() => {
              alert("You've successfully submitted this form");
              console.log("before formData:", formData);
              const {
                firstName,
                lastName,
                email,
                phone,
                experience,
                date,
                careerStageApplied,
                outcome,
                careerStageSelected,
              } = formData;
              const name =
                firstName.charAt(0).toUpperCase() +
                firstName.slice(1) +
                " " +
                lastName.charAt(0).toUpperCase() +
                lastName.slice(1);
              console.log("name", name);

              let today = new Date(date);
              let formattedDate =
                today.getDate() +
                "/" +
                parseInt(today.getMonth() + 1) +
                "/" +
                today.getFullYear();
              // console.log(formattedDate);
              console.log(formattedDate);

              interviewDetails = {
                date: formattedDate,
                careerStageApplied,
                outcome,
                careerStageSelected: careerStageApplied,
              };
              console.log("interviewDetails", interviewDetails);
              // setInterviewDetails(interviewDetails);
              // setFormData({
              //     name,
              //     email,
              //     phone,
              //     experience,
              //     interviewDetails
              // });
              const formValue = {
                id:
                  firstName.toString().slice(0, 3) +
                  new Date().getTime().toString().slice(-5),
                name,
                email,
                phone,
                experience,
                interviewDetails,
                interviwerId: 123457,
              };

              //do the post call
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formValue),
              };
              fetch("http://localhost:3002/interviews", requestOptions)
                .then((response) => response.json())
                .then((data) => navigate(`/`));
            }}
          >
            <LinkStyle>Submit</LinkStyle>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
