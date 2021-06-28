import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function Question(props) {
  // retrieve score, questions and index from the store

  const questions = useSelector((state) => state.questions);
  const score = useSelector((state) => state.score);

  const questionIndex = useSelector((state) => state.index);
  // define dispatch
  const dispatch = useDispatch();
  // create variables for the question and correct answer
  const random = 0;
  console.log(random);
  const url = questions.urls[random];
  console.log(random);
  const name = questions.names[random];
  const img = questions.pic;
  console.log(img);
  const others = [questions.names[2], questions.names[5], questions.names[6]];
  const audio = new Audio(url);
  console.log(url);
  audio.play();
  return (
    <div>
      <img src={img} />
      <h1>{name}</h1>
      <h1>{others[0]}</h1>
      <h1>{others[1]}</h1>
      <h1>{others[2]}</h1>
    </div>
  );
}
export default Question;
