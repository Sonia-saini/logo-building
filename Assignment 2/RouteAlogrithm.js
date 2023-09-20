const availabletickets = {
  Paris: "Skopje",
  Zurich: "Amsterdam",
  Prague: "Zurich",
  Barcelona: "Berlin",
  Kiev: "Prague",
  Skopje: "Paris",
  Amsterdam: "Barcelona",
  Berlin: "Kiev",
  Berlin: "Amsterdam",
};
let cityvisited = {
  Amsterdam: false,
  Kiev: false,
  Zurich: false,
  Prague: false,
  Berlin: false,
  Barcelona: false,
};
// Function to find the travel route
function findTravelRoute(startingCity, availabletickets) {
  const route = [startingCity];
  let currentCity = startingCity;
  let count = 0;
  while (count < 6) {
    count++;
    // Get the next city from the tickets availbility
    const nextCity = availabletickets[currentCity];

    // If there's no next city or if we've already visited it, break the loop
    if (!nextCity || route.includes(nextCity)) {
      break;
    }

    // Add the next city to the route and update the current city
    route.push(nextCity);
    currentCity = nextCity;
    cityvisited[currentCity] = true;
  }

  return route;
}
const startingCity = "Kiev";
const travelRoute = findTravelRoute(startingCity, availabletickets);

console.log("Travel Route:", travelRoute);
//   Assignment 2: Using JavaScript
//   Q . Your son took a vacation through Europe without telling you. When the kid returned from the vacation you asked him where did he go. The kid told you: Dad I went to these cities: Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona.
//   I used only train as transportation and these were the available tickets:
//   Paris-Skopje, Zurich-Amsterdam, Prague-Zurich, Barcelona-Berlin, Kiev-Prague, Skopje-Paris, Amsterdam-Barcelona, Berlin-Kiev, Berlin-Amsterdam.
//   You know that your kid started with Kiev
//   Write a data structure and algorithm that will give you the route which your son was traveling.
