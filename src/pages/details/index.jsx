import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import styled from "styled-components";
import { Grid, Item } from "../../components/grid/Grid";

import {
  CardBigWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardLabel,
  CardLabelValue,
  CardParagraph,
  CardHeaderContent,
  StyledContainer,
  Container,
  CardIcon,
  CardFieldset,
  CardInput,
  CardButton,
} from "../../components/card/index";

const Details = ({ user }) => {
  const { id } = useParams();

  // const [users, setUsers] = useState([]);
  const [interview, setInterview] = useState();
  useEffect(() => {
    fetch(`http://localhost:3002/interviews/${id}`)
      .then((res) => res.json())
      .then((data) => setInterview(data));
  }, []);

  if (!interview) return null;

  const { name, email, phone, experience, interviewDetails } = interview;
  // const {userName, userEmail, careerStage} = user;

  return (
    <div>
      {/* <StyledContainer>
        <Grid>
          <Item>
            <CardBigWrapper>
              <CardHeaderContent>
                <i
                  className="fa fa-user-circle-o fa-lg p-2"
                  aria-hidden="true"
                ></i>
                <CardHeading>Candidate Info</CardHeading>
              </CardHeaderContent>

              <CardBody>
                <CardParagraph>
                  <CardLabel>
                    <i className="fa fa-user fa-1x p-2" aria-hidden="true"></i>{" "}
                    Name:
                  </CardLabel>
                  <CardLabelValue>{name}</CardLabelValue>
                </CardParagraph>
                <CardParagraph>
                  <CardLabel>
                    <i
                      className="fa fa-envelope fa-1x p-2"
                      aria-hidden="true"
                    ></i>{" "}
                    Email:
                  </CardLabel>
                  <CardLabelValue>{email}</CardLabelValue>
                </CardParagraph>
                <CardParagraph>
                  <CardLabel>
                    <i className="fa fa-phone fa-1x p-2" aria-hidden="true"></i>{" "}
                    Contact:
                  </CardLabel>
                  <CardLabelValue>{phone}</CardLabelValue>
                </CardParagraph>
                <CardParagraph>
                  <CardLabel>
                    <i
                      className="fa fa-suitcase fa-1x p-2"
                      aria-hidden="true"
                    ></i>{" "}
                    Experience:
                  </CardLabel>
                  <CardLabelValue>{experience}</CardLabelValue>
                </CardParagraph>
              </CardBody>
            </CardBigWrapper>
          </Item>
        </Grid>
      </StyledContainer> */}

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-auto shadow mb-5 bg-body rounded m-2">
              <div className="card-header bg-danger-custom text-white text-center">
                <i
                  className="fa fa-user-circle-o fa-lg p-2"
                  aria-hidden="true"
                ></i>
                <h5 className="card-title fw-bold pt-1">Candidate Info</h5>
              </div>
              <div className="card-body">
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i className="fa fa-user fa-1x p-2" aria-hidden="true"></i>
                    Name:
                  </label>
                  <span className="w-50">{name}</span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i
                      className="fa fa-envelope fa-1x p-2"
                      aria-hidden="true"
                    ></i>
                    Email:
                  </label>
                  <span className="w-50">{email}</span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i className="fa fa-phone fa-1x p-2" aria-hidden="true"></i>
                    Contact:
                  </label>
                  <span className="w-50">{phone}</span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i
                      className="fa fa-suitcase fa-1x p-2"
                      aria-hidden="true"
                    ></i>
                    Experience:
                  </label>
                  <span className="w-50">{experience}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-auto shadow mb-5 bg-body rounded m-2">
              <div className="card-header bg-danger-custom text-white text-center">
                <i className="fa fa-book fa-lg p-2" aria-hidden="true"></i>
                <h5 className="card-title fw-bold pt-1">Interview details</h5>
              </div>
              <div className="card-body">
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i
                      className="fa fa-calendar fa-1x p-2"
                      aria-hidden="true"
                    ></i>
                    Applied Date:
                  </label>
                  <span className="w-50">{interviewDetails.date}</span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i
                      className="fa fa-address-book fa-1x p-2"
                      aria-hidden="true"
                    ></i>
                    Career Stage Applied:
                  </label>
                  <span className="w-50">
                    {interviewDetails.careerStageApplied}
                  </span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i className="fa fa-check fa-1x p-2" aria-hidden="true"></i>
                    Outcome:
                  </label>
                  <span className="w-50">
                    {interviewDetails.outcome === "Selected" ? (
                      <span className="badge rounded bg-success">
                        {interviewDetails.outcome}
                      </span>
                    ) : (
                      <span className="badge rounded bg-danger-custom">
                        {interviewDetails.outcome}
                      </span>
                    )}
                  </span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i
                      className="fa fa-suitcase fa-1x p-2"
                      aria-hidden="true"
                    ></i>
                    Career Stage Selected:
                  </label>
                  <span className="w-50">
                    {interviewDetails.outcome === "Selected"
                      ? interviewDetails.careerStageSelected
                      : "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-auto shadow mb-5 bg-body rounded m-2">
              <div className="card-header bg-danger-custom text-white text-center">
                <i className="fa fa-id-card-o fa-lg p-2" aria-hidden="true"></i>
                <h5 className="card-title fw-bold pt-1">
                  Interviwer Information
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i className="fa fa-user fa-1x p-2" aria-hidden="true"></i>
                    Name:
                  </label>
                  <span className="w-50">{user.name}</span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i
                      className="fa fa-envelope fa-1x p-2"
                      aria-hidden="true"
                    ></i>
                    Email:
                  </label>
                  <span className="w-50">{user.email}</span>
                </p>
                <p className="card-text mb-1">
                  <label className="w-50">
                    <i
                      className="fa fa-suitcase fa-1x p-2"
                      aria-hidden="true"
                    ></i>
                    Career Stage:
                  </label>
                  <span className="w-50">{user.careerStage}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Using Styled component */}
    </div>
  );
};

export default Details;
