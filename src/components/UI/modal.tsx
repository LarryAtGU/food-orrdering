import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const OverLay = (props: { children: any }) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("backdrop") as Element;

type Prop = {
  onClickBackDrop: () => void;
  children: any;
};
const Modal = (props: Prop) => {
  const BackDrop = () => {
    return <div onClick={props.onClickBackDrop} className="backdrop"></div>;
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        portalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
