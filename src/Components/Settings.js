import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function Settings() {
  // useState hook

  const [options, setOptions] = useState(["Kanye West", "Kendrick Lamar", "Frank Ocean"]);
  const artistChosen = useSelector((state) => state.options.artist);
  const dispatch = useDispatch();
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
  const handleArtistChange = (event) => {
    dispatch({
      type: "CHANGE_ARTIST",
      value: event.target.value,
    });
  };

  // add select elements for the categories

  return (
    <div>
      <div>
        <h2> Select Artist:</h2>
        <select value={artistChosen} onChange={handleArtistChange}>
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
