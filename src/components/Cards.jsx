import React from "react";

export default function Cards(props) {
  console.log(props);
  return (
    <div>
      my name is {props.someobj.name} <br />
      my age is {props.someobj.age}
    </div>
  );
}
