import { state } from "./state.js";
import { getFlowFromUrl } from "./router.js";
import { renderQuestions } from "./render.js";

const root = document.getElementById("foxus-signup-root");

const urlData = getFlowFromUrl();
console.log(urlData);

state.flow = urlData.flow;
state.selectedPlan = urlData.plan;

root.innerHTML = `
  <div class="app">

    <h1>Foxus Signup</h1>

    <p>
      Current Flow:
      <strong>${state.flow}</strong>
    </p>

    <p>
      Selected Plan:
      <strong>${state.selectedPlan || "None"}</strong>
    </p>

    <hr />

    <h2>Step 3 Questions</h2>

    ${renderQuestions(state.flow)}

  </div>
`;