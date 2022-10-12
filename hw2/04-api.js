/** Exercise 04 - API **/
const url = "https://restcountries.com/v3.1/all";

let results = document.getElementById("results");
// Add your code here

let getData = (url, results) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Sort the data by the common name
      data.sort((a, b) => {
        const name1 = a.name.common.toUpperCase();
        const name2 = b.name.common.toUpperCase();

        let comparison = 0;

        if (name1 > name2) {
          comparison = 1;
        } else if (name1 < name2) {
          comparison = -1;
        }
        return comparison;
      });
      // Create an element for each country to append
      data.forEach((country, index) => {
        const {
          name: { common },
          population,
        } = country;

        const element = document.createElement("li");
        let text = `${common} - ${Number(population).toLocaleString()}`;
        element.textContent = text;
        results.append(element);
      });
    })
    .catch((error) => {
      // Create a new element when we have an error
      const fail = document.createElement("li");
      fail.textContent = `Error: unable to load ${url}`;
      fail.style.color = "red";
      fail.style.fontWeight = "bold";
      results.append(fail);
      console.error("we have an error: ", error);
    });
};

//console.log(results);
getData(url, results);
