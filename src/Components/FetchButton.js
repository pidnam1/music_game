import React from "react";
import { useSelector } from "react-redux";

function FetchButton(props) {
  //access values that will be used to create API query
  const artistChosen = useSelector((state) => state.options.artist);
  let trying = null;
  const handleQuery = async () => {
    //make post request to spotify for access token
    let myHeaders = new Headers();
    const code = btoa("");
    myHeaders.append("Authorization", "Basic " + code);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append(
      "Authentication",
      "Basic "
    );
    urlencoded.append("grant_type", "client_credentials");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    let res = await fetch("https://accounts.spotify.com/api/token", requestOptions);
    res = await res.json();
    console.log(res.access_token);
    search(res.access_token);
  };

  const search = async (token) => {
    const BASE_URL = "https://api.spotify.com/v1/search";
    let FETCH_URL = `${BASE_URL}?q=${artistChosen}&type=artist&limit=1`;
    const ALBUM_URL = "https://api.spotify.com/v1/artists";

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    let res = await fetch(FETCH_URL, requestOptions);
    res = await res.json();
    console.log("ARTIST", res);
    console.log("id: ", res.artists.items[0].id);
    getTracks(token, res.artists.items[0].id);
  };

  const getTracks = async (token, artistId) => {
    const BASE_URL = "https://api.spotify.com/v1/artists/";
    let FETCH_URL = BASE_URL + artistId + "/top-tracks?market=ES";

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    let res = await fetch(FETCH_URL, requestOptions);
    res = await res.json();
    console.log("ARTIST TRACKS: ", res);
  };

  return <button onClick={handleQuery}>{props.text}</button>;
}

export default FetchButton;
