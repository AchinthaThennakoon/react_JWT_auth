import axios from "axios";
import React, { useState } from "react";

function Test() {
  const doThis = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response.data);
        setUserID(response.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [userIID, setUserID] = useState();

  return (
    <div>
      <button onClick={doThis}>click</button>
      {userIID ? <p>{userIID}</p> : null}
    </div>
  );
}

export default Test;
