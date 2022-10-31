import React, { useState, useEffect } from "react";

const CustomDropdown = (props) => {
  //   const people = [
  //     { name: "Alan Turing", number: "040-123456", id: 1 },
  //     { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  //     { name: "Barbara Liskov", number: "12-43-234345", id: 3 },
  //     { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  //   ];

  const [interviews, setInterviews] = useState();
  useEffect(() => {
    fetch(`http://localhost:3002/interviews`)
      .then((res) => res.json())
      .then((data) => setInterviews(data));
  }, []);

  //   console.log(interviews);

  //   const people = [];
  //   let result = Array.isArray(people);
  //   console.log("result", result);

  //   for (var i in interviews) people.push([i, interviews[i]]);

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
    <>
      <input type="text" value={search} onChange={handleSearchChange} />
      <label>Outcome : </label>
      {filtered?.map((person) => {
        return (
          <p key={person.id}>
            {person.name} - {person.interviewDetails.outcome}
          </p>
        );
      })}
    </>
  );
};

export default CustomDropdown;
