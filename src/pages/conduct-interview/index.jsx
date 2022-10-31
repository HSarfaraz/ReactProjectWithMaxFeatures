import React from "react";
import { useState } from "react";

import InterviewInfo from "./Forms/InterviewInfo";
import TechnicalRoundData from "./Forms/CandidateInfo";
import Feedback from "./Forms/Feedback";
import { useNavigate } from "react-router";
import {
  ConductInterviewContainer,
  HeaderContainer,
} from "./conductinterview.styled";

//Fields - Candidate (name, email, phone, experience), Interview(date, career stage applied, outcome – selected or rejected, career stage selected), Interviewer (name, oracle id, email, career stage)

const ConductInterview = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    date: "",
    mode: "",
    type: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    careerStageApplied: "",
    feedback: "",
    training: "",
    trainable: "",
    outcome: "",
    recommendedCareerStage: "",
    relevantExperience: "",
  });

  const componentList = [
    <InterviewInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <TechnicalRoundData
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Feedback
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  ];

  return (
    <ConductInterviewContainer>
      <HeaderContainer>
        <h5> Conduct Interview</h5>
      </HeaderContainer>
      <div className="container my-4 align-self-center">
        {/* <h3 className="text-center bg-light p-3 mb-3 border rounded col-md-6 mx-auto">
          Conduct Interview
        </h3> */}

        <div className="progress-bar mb-4 px-2 mx-auto col-md-12">
          <div
            style={{ width: page === 0 ? "50%" : page === 1 ? "75%" : "100%" }}
          ></div>
        </div>
        {componentList[page]}
      </div>
      {/* <ConductInterviewContainer>
        <HeaderContainer>
          <h5> Conduct Interview</h5>
        </HeaderContainer>
        <div className="progress-bar mb-4 px-2 mx-auto col-md-6">
          <div
            style={{ width: page === 0 ? "50%" : page === 1 ? "75%" : "100%" }}
          ></div>
        </div>
        {componentList[page]} 
      </ConductInterviewContainer>*/}
    </ConductInterviewContainer>
  );
};

export default ConductInterview;
