const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here
const restData = async () => {
  try {
    const response = await axios.get(url);
    console.log(`Responsed received from ${url}`);
    return response.data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return -1;
  }
};

const formatDataCapitals = (data) => {
  data.sort((a, b) => {
    const name1 = a.name.official.toUpperCase();
    const name2 = b.name.official.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  });

  const capitalsData = [];
  data.forEach((country) => {
    const {
      name: { official },
      capital,
    } = country;
    capitalsData.push([`${official} - ${capital ? capital : 'N/A'}`]);
  });

  return capitalsData;
};

const formatDataPop = (data) => {
  data.sort((a, b) => {
    const name1 = a.population;
    const name2 = b.population;

    let comparison = 0;

    if (name1 > name2) {
      comparison = -1;
    } else if (name1 < name2) {
      comparison = 1;
    }
    return comparison;
  });

  const popData = [];
  data.forEach((country) => {
    const {
      name: { official },
      population,
    } = country;
    popData.push([`${official} - ${Number(population).toLocaleString()}`]);
  });

  return popData.slice(0, 50);
};

const formatDataReg = (data) => {
  const regionData = [];
  data.forEach((country) => {
    const { region } = country;
    regionData.push([region]);
  });

  let counter = {};
  for (region of regionData.flat()) {
    if (counter[region]) {
      counter[region] += 1;
    } else {
      counter[region] = 1;
    }
  }

  const regionCount = [];
  for (const [key, value] of Object.entries(counter)) {
    regionCount.push(`${key} - ${value}`);
  }

  return regionCount;
};

app.get('/', (req, res) => {
  // render pug template for the index.html file

  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', async (req, res) => {
  let data = await restData();

  res.render('page', {
    heading: 'Countries and Capitals',
    results: formatDataCapitals(data),
  });
});

app.get('/populous', async (req, res) => {
  let data = await restData();

  res.render('page', {
    heading: 'Most Populous Countries',
    results: formatDataPop(data),
  });
});

app.get('/regions', async (req, res) => {
  let data = await restData();

  res.render('page', {
    heading: 'Regions of the World',
    results: formatDataReg(data),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
