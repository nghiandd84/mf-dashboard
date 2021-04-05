import * as React from "react";
import { Provider } from "react-redux";

import Home from "./routes/home";
import store from "./store";

const styles: React.CSSProperties = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const Root = () => (
  <div style={styles}>
    <Provider store={store}>
      <Home />
    </Provider>
  </div>
);
export default Root;
