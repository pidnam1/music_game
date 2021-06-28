import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function FetchButton(props) {
  //access values that will be used to create API query
  let artistChosen = useSelector((state) => state.options.artist);

<<<<<<< HEAD
  const dispatch = useDispatch();
  const setQuestions = (value) => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: value,
    });
=======
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
>>>>>>> 47fb62436b5aa5cfa839922c32ab91400aa82a99
  };
  const setFetched = () => {
    dispatch({
      type: "SET_FETCHED",
      fetched: true,
    });
  };
  const getArtist = async () => {
    ///make call to deezer based on search
    let artist_id = "";
    axios
      .get("http://localhost:8080/api.deezer.com/search/artist?q=" + artistChosen)
      .then((response) => {
        artist_id = response.data.data[0].id;
        getAlbums(artist_id);
      })
      .catch((err) => {
        console.log("Artist ID retrieval failed", err);
      });
  };

  const getAlbums = async (artist_id) => {
    let album_ids = [];
    let album_count = 0;
    axios
      .get("http://localhost:8080/api.deezer.com/artist/" + artist_id + "/albums")
      .then((response) => {
        response.data.data.forEach((album) => {
          album_ids.push(album.id);
          album_count += 1;
        });
        getTracks(album_ids, album_count);
      })
      .catch((err) => {
        console.log("Album Retrieval Failed", err);
      });
  };

  const getTracks = async (album_ids, album_count) => {
    const random = Math.floor(Math.random() * album_count);
    let track_names = [];
    let prev_urls = [];

    axios
      .get("http://localhost:8080/api.deezer.com/album/" + album_ids[random] + "/tracks")
      .then((response) => {
        console.log(response.data);
        response.data.data.forEach((track) => {
          track_names.push(track.title);
          prev_urls.push(track.preview);
        });
        console.log("NAMES: ", track_names);
        console.log("PREV: ", prev_urls);
        const questions = { names: track_names, urls: prev_urls };
        setQuestions(questions);
        setFetched();
      })
      .catch((err) => {
        console.log("Album Retrieval Failed", err);
      });
  };

  return <button onClick={getArtist}>{props.text}</button>;
}

export default FetchButton;
