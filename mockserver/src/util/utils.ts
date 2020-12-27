import fetch from 'node-fetch';


const fetchRelative = async (path: string, options?: {}, query: string = '') => {
  const root = 'https://api.nal.usda.gov/fdc/v1/';

  const url =  root + path + '?api_key=NYYLHns54La4bh2r7nLLMfLTgkXYLKVY4Icedoum&offset=' + query;
  return fetch(url);
};


export { fetchRelative };
