import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CardInput, Container } from "../../components/card/index";
import CustomDropdown from "./CustomDropdown";
import {
  CustomTable,
  DashboardContainer,
  FailureBadgeStyle,
  FilterContainer,
  HeaderContainer,
  SuccessBadgeStyle,
  TableContainer,
} from "./dashboard.styled";
// import DropdownMenu from "./DropdownMenu";

export default function App() {
  const [interviews, setInterviews] = useState();
  useEffect(() => {
    fetch(`http://localhost:3002/interviews`)
      .then((res) => res.json())
      .then((data) => setInterviews(data));
  }, []);

  const navigate = useNavigate();

  const handelOnInterviewSelect = (e, id) => navigate(`/details/${id}`);

  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState("");

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== "") {
  //     const filteredData = interviews.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(interviews);
  //   }
  // };

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? interviews
    : interviews.filter((person) =>
        person.interviewDetails.outcome
          .toLowerCase()
          .includes(search.toLowerCase())
      );

  return (
    <DashboardContainer>
      <HeaderContainer>
        <h3>Dashboard</h3>
      </HeaderContainer>
      {/* <CustomTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Experience</th>
            <th>Date</th>
            <th>Career Stage Applied</th>
            <th>Outcome</th>
            <th>Career Stage Selected</th>
            <th>Interviwer Id</th>
          </tr>
        </thead>

        <tbody>
          {interviews &&
            interviews.map(
              ({
                id,
                name,
                email,
                phone,
                experience,
                interviewDetails,
                interviwerId,
              }) => (
                <tr key={id} onClick={(e) => handelOnInterviewSelect(e, id)}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{experience}</td>
                  <td>{interviewDetails.date}</td>
                  <td>{interviewDetails.careerStageApplied}</td>
                  <td>
                    {interviewDetails.outcome === "Selected" ? (
                      <SuccessBadgeStyle>
                        {interviewDetails.outcome}
                      </SuccessBadgeStyle>
                    ) : (
                      <FailureBadgeStyle>
                        {interviewDetails.outcome}
                      </FailureBadgeStyle>
                    )}
                  </td>
                  <td>{interviewDetails.careerStageSelected}</td>
                  <td>{interviwerId}</td>
                </tr>
              )
            )}
        </tbody>
      </CustomTable> */}
      <FilterContainer>
        <div style={{ display: "inline" }}>
          <label style={{ display: "inline" }}>Outcome: </label>
          {/* <input type="text" value={search} onChange={handleSearchChange} /> */}

          <select
            style={{ display: "inline" }}
            defaultValue=""
            className="form-select"
            id="searchoutcome"
            aria-label="search outcome"
            value={search}
            onChange={handleSearchChange}
          >
            <option value="" disabled>
              Select Outcome
            </option>
            <option value="selected">Selected</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </FilterContainer>
      <CustomTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Experience</th>
            <th>Date</th>
            <th>Career Stage Applied</th>
            <th>Outcome</th>
            <th>Career Stage Selected</th>
            <th>Interviwer Id</th>
          </tr>
        </thead>

        <tbody>
          {filtered?.map(
            ({
              id,
              name,
              email,
              phone,
              experience,
              interviewDetails,
              interviwerId,
            }) => (
              <tr key={id} onClick={(e) => handelOnInterviewSelect(e, id)}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{experience}</td>
                <td>{interviewDetails.date}</td>
                <td>{interviewDetails.careerStageApplied}</td>
                <td>
                  {interviewDetails.outcome === "Selected" ? (
                    <SuccessBadgeStyle>
                      {interviewDetails.outcome}
                    </SuccessBadgeStyle>
                  ) : (
                    <FailureBadgeStyle>
                      {interviewDetails.outcome}
                    </FailureBadgeStyle>
                  )}
                </td>
                <td>{interviewDetails.careerStageSelected}</td>
                <td>{interviwerId}</td>
              </tr>
            )
          )}
        </tbody>
      </CustomTable>
      {/* <CustomDropdown />  */} {/*working*/}
      {/* <DropdownMenu /> */}
    </DashboardContainer>
  );
}
