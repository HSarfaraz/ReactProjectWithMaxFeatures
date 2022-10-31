import { useState } from "react";

const DropdownMenu = (props) => {
  const options = ["", "Africa", "America", "Asia", "Europe", "Oceania"];

  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleFilterInput = (event) => {
    let value = event.target.options;
    setSelectedValue(value);
    props.handleRegionSearch(value);
  };

  return (
    <div>
      <select
        options={options}
        onChange={handleFilterInput}
        value={selectedValue}
        placeholder="Select a region"
      />
    </div>
  );
};

export default DropdownMenu;
