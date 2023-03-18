import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Loading from "./components/loders/Loading";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <Suspense fallback={<Loading />}> */}
    <Suspense>
      <App />
    </Suspense>
  </>
);

reportWebVitals();
