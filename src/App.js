// src/App.js

import React, { useState } from "react";
import { BpkCode } from "@skyscanner/backpack-web/bpk-component-code";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar from "bpk-component-calendar";
import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";

// Generate class names from SCSS
const getClassName = cssModules(STYLES);

const App = () => {
  // State for calendar
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={getClassName("App")}>
      <header className={getClassName("App__header")}>
        <div className={getClassName("App__header-inner")}>
          <BpkText
            tagName="h1"
            textStyle="xxl"
            className={getClassName("App__heading")}
          >
            Flight Schedule
          </BpkText>
        </div>
      </header>
      <main className={getClassName("App__main")}>
        <BpkText tagName="p" className={getClassName("App__text")}>
          To get started, select a date and click the "Continue" button.
        </BpkText>
        <BpkCalendar
          onDateSelect={setSelectedDate}
          selectedDate={selectedDate}
          className={getClassName("App__calendar")}
        />
        <BpkButton onClick={() => alert("It works!")}>Continue</BpkButton>
      </main>
    </div>
  );
};

export default App;
