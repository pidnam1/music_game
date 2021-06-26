import React, { useState } from "react";
function Settings() {
  // useState hook
  // eslint-disable-next-line
  const [options, setOptions] = useState(["Kanye West", "Kendrick Lamar", "Frank Ocean"]);
  const [artistChosen, setArtistChosen] = useState("");
  // useEffect hook
  // eslint-disable-next-line
  /* useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setOptions(response.trivia_categories);
        console.log(response.trivia_categories);
        
      });
  }, [setOptions]); */

  //event that is called when an option is chosen
  const handleCategoryChange = (event) => {
    setArtistChosen(event.target.value);
  };

  // add select elements for the categories
  return (
    <div>
      <div>
        <h2> Select Artist:</h2>
        <select value={artistChosen} onChange={handleCategoryChange}>
          <option> --- </option>
          {options &&
            options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
export default Settings;
