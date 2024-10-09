import { activityConfig } from "./configs/activity_config.js";

// Function to get data through Fetch API
export const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

// Function to filter valid activities by using our config file
export const filterValidActivities = (arr) => {
  let filteredData = arr.filter((item) =>
    activityConfig.validEducations.includes(item.Education)
  );
  return filteredData;
};

// Function to filter out the current activities from StartDate
export const filterCurrentActivities = (arr) => {
  let currentActivities = arr.filter(
    (item) => new Date(item.StartDate) >= new Date() - 3600000
  );
  return currentActivities;
};

// Function to sort all activities by date / time
export const sortActivities = (arr) => {
  let sortedData = arr.sort(
    (a, b) => new Date(a.StartDate) - new Date(b.StartDate)
  );
  return sortedData;
};
