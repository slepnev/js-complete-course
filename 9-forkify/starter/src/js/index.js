import Search from './models/Search';
import * as searchView from './views/searchView';
import { clearLoader, elements, renderLoader } from './views/base';
import Recipe from './models/Recipe';

Recipe

/* Global state
* - Search
* - Current recipe
* - Shopping list
* - Liked list
* */
const state = {};


/*
* SEARCH CONTROLLER
* */
const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();

  if (query) {
    // 2) How search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI from results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);


    // 4) Search for recipes
    await state.search.getResults();

    // 5) Render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});


/*
* RECIPE CONTROLLER
* */
const r = new Recipe(530);
r.getRecipe();
console.log(r);