import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ConductInterviewContainer } from "../conductinterview.styled";
import {
  CardSmallWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardButton,
  Container,
  Heading,
  CardBigWrapper,
  CardHeaderContent,
  CardParagraph,
  CardLabel,
  CardLabelValue,
  CardSelectInput,
  DisplayInline,
  CardCancelBtn,
} from "../../../components/card/index";

const InterviewInfo = ({ page, setPage, formData, setFormData }) => {
  const navigate = useNavigate();

  const validateEmptyInterviewForm = () => {
    let { date, mode, type } = formData;
    let today = new Date(date);
    let formattedDate =
      today.getDate() +
      "/" +
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    // console.log(formattedDate);
    console.log(formattedDate, mode, type);
    return formattedDate.length > 0 && mode.length > 0 && type.length > 0;
  };

  return (
    <form>
      <CardBigWrapper>
        <CardHeaderContent>
          {/* <i className="fa fa-user-circle-o fa-lg p-2" aria-hidden="true"></i> */}
          <DisplayInline>
            <CardHeading>Interview Details</CardHeading>
            <CardCancelBtn>
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
            </CardCancelBtn>
          </DisplayInline>
        </CardHeaderContent>

        <CardBody>
          <CardParagraph>
            <CardLabel>
              <i className="fa fa-calendar fa-1x p-2" aria-hidden="true"></i>{" "}
              Date:
            </CardLabel>
            <CardInput
              type="date"
              name="date"
              placeholder="Applied Date"
              value={formData.date}
              // className="form-control mt-3"
              aria-describedby="date"
              aria-label="date"
              htmlFor="date"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            ></CardInput>
          </CardParagraph>
          <CardParagraph>
            <CardLabel>
              <i className="fa fa-envelope fa-1x p-2" aria-hidden="true"></i>{" "}
              Mode:
            </CardLabel>
            <CardSelectInput
              // className="form-select"
              defaultValue=""
              htmlFor="interviewMode"
              name="mode"
              aria-label="interview mode"
              value={formData.mode}
              onChange={(e) =>
                setFormData({ ...formData, mode: e.target.value })
              }
            >
              <option value="" disabled>
                Select interview mode
              </option>
              <option value="In Person">In Person</option>
              <option value="Teams Video">Teams Video</option>
            </CardSelectInput>
          </CardParagraph>
          <CardParagraph>
            <CardLabel>
              <i className="fa fa-phone fa-1x p-2" aria-hidden="true"></i> Type:
            </CardLabel>
            <CardSelectInput
              // className="form-select"
              defaultValue=""
              htmlFor="interviewType"
              aria-label="interview type"
              name="mode"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="" disabled>
                Select interview type
              </option>
              <option value="XT Core">XT Core</option>
              <option value="React">React</option>
            </CardSelectInput>
          </CardParagraph>
          <CardParagraph>
            <button
              className="btn btn-danger-custom rounded-circle px-3 py-1"
              aria-label="right icon"
              type="submit"
              disabled={!validateEmptyInterviewForm()}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </button>
          </CardParagraph>
        </CardBody>
      </CardBigWrapper>
      {/* <div className="card col-md-6 mx-auto h-auto shadow mb-5 bg-body rounded border-0 m-2 p-0">
        <div className="card-header bg-danger-custom text-white position-relative">
          <div className="row">
            <div className="col">
              <h5 className="mt-3 fw-bold">Interview Details</h5>
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

        <div className="card-body d-grid gap-2 d-md-flex justify-content-md-end mt-3">
          <div className="col">
            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label id="date">
                  <i
                    className="fa fa-calendar fa-1x p-2"
                    aria-hidden="true"
                  ></i>
                  Date:
                </label>
              </div>
              <div className="col w-50">
                <input
                  type="date"
                  placeholder="Applied Date"
                  value={formData.date}
                  className="form-control mt-3"
                  aria-describedby="date"
                  aria-label="date"
                  htmlFor="date"
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label id="interviewMode">
                  <i
                    className="fa fa-calendar fa-1x p-2"
                    aria-hidden="true"
                  ></i>
                  Mode:
                </label>
              </div>
              <div className="col w-50 pt-3">
                <select
                  className="form-select"
                  htmlFor="interviewMode"
                  aria-label="interview mode"
                  value={formData.mode}
                  onChange={(e) =>
                    setFormData({ ...formData, mode: e.target.value })
                  }
                >
                  <option selected>Select interview mode</option>
                  <option value="In Person">In Person</option>
                  <option value="Teams Video">Teams Video</option>
                </select>
              </div>
            </div>

            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label>
                  <i
                    className="fa fa-calendar fa-1x p-2"
                    aria-hidden="true"
                  ></i>
                  Type:
                </label>
              </div>
              <div className="col w-50 pt-3">
                <select
                  className="form-select"
                  aria-label="interview type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  <option selected>Select interview type</option>
                  <option value="XT Core">XT Core</option>
                  <option value="React">React</option>
                </select>
              </div>
            </div>
          

            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
              <button
                className="btn btn-danger-custom rounded-circle px-3 py-1"
                aria-label="right icon"
                type="button"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="col">
             <h6 className="mt-3 fw-bold bg-light p-2 rounded">Interviwer Information </h6>

            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label><i className="fa fa-user fa-1x p-2" aria-hidden="true"></i> 
                  Oracle Id : 
                </label>
              </div>
              <div className="col w-50">
              <input
                type="text"
                placeholder="Oracle Id"
                value={formData.panelOracleId} 
                className="form-control mt-3" aria-describedby="panelOracleId"
                onChange={(e) =>
                  setFormData({ ...formData, panelOracleId: e.target.value })  
                }
              />
              </div>
            </div>
            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label><i className="fa fa-user fa-1x p-2" aria-hidden="true"></i> 
                  First Name : 
                </label>
              </div>
              <div className="col w-50">
              <input
                type="text"
                placeholder="First Name"
                value={formData.panelFirstName} 
                className="form-control mt-3" aria-describedby="panelFirstName"
                onChange={(e) =>
                  setFormData({ ...formData, panelFirstName: e.target.value })  
                }
              />
              </div>
            </div>
            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label><i className="fa fa-user fa-1x p-2" aria-hidden="true"></i> 
                  Last Name : 
                </label>
              </div>
              <div className="col w-50">
              <input
                type="email"
                placeholder="Last Name"
                value={formData.panelLastName} 
                className="form-control mt-3" aria-describedby="panelLastName"
                onChange={(e) =>
                  setFormData({ ...formData, panelLastName: e.target.value })  
                }
              />
              </div>
            </div>
            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label><i className="fa fa-envelope fa-1x p-2" aria-hidden="true"></i> 
                  Email:
                </label>
              </div>
              <div className="col w-50">
              <input
                type="email"
                placeholder="Email"
                value={formData.panelEmail} 
                className="form-control mt-3" aria-describedby="panelEmail"
                onChange={(e) =>
                  setFormData({ ...formData, panelEmail: e.target.value })  
                }
              />
              </div>
            </div>

            <div className="card-text mb-1 row row-cols-2 row-cols-md-6 g-4">
              <div className="col w-50 pt-3">
                <label><i className="fa fa-suitcase fa-1x p-2" aria-hidden="true"></i> 
                  Career Stage: 
                </label>
              </div>
              <div className="col w-50">
              <input
                  type="text"
                  placeholder="Career Stage"
                  value={formData.panelCareerStage} 
                  className="form-control mt-3" aria-describedby="panelCareerStage"
                  onChange={(e) =>
                    setFormData({ ...formData, panelCareerStage: e.target.value })  
                  }
                />
              </div>
            </div>

                </div> 
        </div>
      </div> */}
    </form>
  );
};

export default InterviewInfo;
