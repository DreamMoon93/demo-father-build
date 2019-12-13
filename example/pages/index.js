import React, { useEffect } from "react";
import { Button, queryString } from "../../dist";
import "./index.less";

export default () => {
  useEffect(() => {
    console.log(queryString());
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      <Button color="red">Normal Button</Button>
    </div>
  );
};
