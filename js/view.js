import { activityConfig } from "./configs/activity_config.js";
import {
  appendNodeList,
  clear,
  createEl,
  createElWithText,
} from "./utils/createUtils.js";
import { toLocaleTime } from "./utils/timeUtils.js";

// Get the main container and attach a new classname to it
let mainContainer = document.getElementById("mainContainer");
mainContainer.classList.add("mainContainer");

export const createViewContainers = () => {
  let activityContainer = createEl("section");
  activityContainer.id = "activity";
  activityContainer.classList.add("activityContainer");
  mainContainer.appendChild(activityContainer);
};

// Create activity view
export const createActivityView = (arr) => {
  // Clear the view (reset)
  let activityContainer = document.getElementById("activity");
  clear(activityContainer);

  // Loop through each element in the data array
  arr.forEach((element, index) => {
    // Only do this if index is less them max number of allowed activities
    if (index < activityConfig.maxNum) {
      // Create container for p tags
      let activityWrapper = createEl("div");

      // Create all the P tags
      let p_team = createElWithText("p", `Team: ${element.Team}`);
      let p_room = createElWithText("p", `Room: ${element.Room}`);
      let p_education = createElWithText("p", `${element.Education}`);
      let p_subject = createElWithText("p", `Subject: ${element.Subject}`);
      let p_startDate = createElWithText(
        "p",
        `${toLocaleTime(element.StartDate).slice(0, 5)}`
      );

      // Append elements to DOM
      let nodeList = [p_education, p_room, p_subject, p_team, p_startDate];
      appendNodeList(nodeList, activityWrapper);
      activityContainer.appendChild(activityWrapper);
    }
  });
};
