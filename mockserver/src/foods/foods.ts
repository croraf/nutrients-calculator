import { fetchRelative } from '../util/utils';

let foodsList = [];

const getFoods = () => {

  const promiseList = [];
  // in a loop, fetch first N*200 foods
  for (let i = 1; i < 2; i++) {
    const promise = fetchRelative('foods/list', undefined, '&dataType=Foundation&pageSize=200&pageNumber=' + i)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const list = json.map(foodItem => ({ fdcId: foodItem.fdcId, description: foodItem.description }));
        //console.log(list);
        foodsList.push(...list);
      });
    promiseList.push(promise);
  }

  Promise.all(promiseList).then(() => {
    console.log(foodsList, foodsList.length)
  }).catch(() => {
    console.log('something went wrong');
  })
};


/* const getFoods = async (ctx, next) => {
    const searchData = ctx.request.query.search;
    console.log(searchData);
    const response = await (await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchData}&dataType=Foundation&api_key=NYYLHns54La4bh2r7nLLMfLTgkXYLKVY4Icedoum`,
    )).json();

    const foodsList = response.foods.map(item => item.description);
    ctx.body = foodsList;
    //ctx.body = Object.values(ingredients).map(ingredient => ingredient.name); //responseBody.map((item) => ctx.params.ingredient + '---' + item);
}; */


export { getFoods, };
