import React, { useState } from "react";

export default function TextForm(props) {
  const Dothis = () => {
    const dyy = text.toUpperCase();
    props.ShowAlert("converted to uppercase", "success");
    SetText(dyy);
  };
  const Dothis1 = () => {
    const dyy = text.toLowerCase();
    props.ShowAlert("converted to lowercase", "success");

    SetText(dyy);
  };

  const dothischange = (event) => {
    SetText(event.target.value);
  };

  const [text, SetText] = useState("Enter text here");
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
        className="container"
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={dothischange}
            id="mybox"
            className="form-control"
            rows="8"
          ></textarea>
        </div>
        <button onClick={Dothis}>click to uppercase</button>
        <button className="mx-2" onClick={Dothis1}>
          click to lowercase
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>text summary</h2>
        <p>
          {text.split(" ").length} are words and {text.length} are characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes it take to read </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter text"}</p>
      </div>
    </>
  );
}
