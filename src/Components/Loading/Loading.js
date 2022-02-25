import React from "react";
import "./Loading.scss";
import LoadImg from "../../Assets/images/logo-animate.gif";

function Loading() {
  return (
    <div className="loading">
      <img src={LoadImg} alt="Loading" />
    </div>
  );
}

export default Loading;
