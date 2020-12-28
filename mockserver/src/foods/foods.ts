import { fetchRelative } from '../util/utils';

type FoodItem = {
  fcdId: number,
  description: string,
};

let foodsList: FoodItem[] = [];

const preloadFoods = () => {

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


const getFoods = async (ctx, next) => {
  ctx.body = foodsList;
};


export { preloadFoods, getFoods };
