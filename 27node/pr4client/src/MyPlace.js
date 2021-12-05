import { Map } from "./UI/Map";

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector("header h1");
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
console.log("url", url);
console.log("queryParams", queryParams);
const locId = queryParams.get("location");
fetch(`http://localhost:3000/location/${locId}`)
  .then((res) => {
    if (res.status === 404) {
      throw new Error("Could not find location");
    }
    return res.json();
  })
  .then((data) => {
    new LoadedPlace(data.coordinates, data.address);
  })
  .catch((err) => alert(err.message));
