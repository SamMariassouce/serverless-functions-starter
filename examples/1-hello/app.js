const { default: axios } = require('axios');

const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // Line of code without redirects : const { data } = await axios.get('/.netlify/functions/1-hello');
    const { data } = await axios.get('/api/1-hello');
    result.textContent = data;
  } catch (error) {
    console.log(error.response);
  }
};
fetchData();
