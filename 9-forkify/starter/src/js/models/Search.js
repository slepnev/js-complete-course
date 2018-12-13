import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios.get(
        `${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}&page=1`
      );
      this.result = res.data.recipes;
    } catch (e) {
      alert(e);
    }
  }

}