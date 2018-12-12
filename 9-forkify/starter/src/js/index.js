import { proxy, key } from "./config";
import axios from 'axios';

async function getResults(query) {
  const res = await axios(`/api/searh?key=${key}&q=${query}`);
  console.log(res);
}
getResults('123');