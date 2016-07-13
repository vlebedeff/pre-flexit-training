import * as React from "react";
import * as ReactDOM from "react-dom";

import {createApplicationElement} from "./components/app/app";

ReactDOM.render(
  createApplicationElement(),
  document.getElementById('app-placeholder')
);
