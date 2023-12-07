import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

interface MainProps {
  portletNamespace: string;
  contextPath: string;
  portletElementId: string;
}

const Main: React.FC<MainProps> = ({
  portletNamespace,
  contextPath,
  portletElementId,
}) => {
  // Your component logic here

  return <div>{/* Your JSX/React elements here */}</div>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main
      portletNamespace="yourPortletNamespace"
      contextPath="yourContextPath"
      portletElementId="yourPortletElementId"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
