
import { QUESTIONS } from "./questions.js";

export function renderQuestions(flow) {

  const questions = QUESTIONS[flow];
  console.log("questions->",questions);

  return questions.map(question => {

    if(question.type === "text") {
      return `
        <div class="field">
          <label>${question.label}</label>
          <input type="text" />
        </div>
      `;
    }

    if(question.type === "date") {
      return `
        <div class="field">
          <label>${question.label}</label>
          <input type="date" />
        </div>
      `;
    }

    if(question.type === "select") {

      const options = question.options
        .map(option => `<option>${option}</option>`)
        .join("");

      return `
        <div class="field">
          <label>${question.label}</label>

          <select>
            ${options}
          </select>
        </div>
      `;
    }

  }).join("");

}