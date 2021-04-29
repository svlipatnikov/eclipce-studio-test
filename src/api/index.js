const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

const getData = () => {
  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      if (text !== '') return JSON.parse(text);
      else throw new Error('empty data');
    })
    .catch((error) => console.error(error));
};

export default getData;
