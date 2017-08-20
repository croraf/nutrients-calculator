import fetch from 'node-fetch';

let foodsList = [];

const fetchFoods = () => {

    for (let i = 0; i < 90; i++){
        fetch('https://api.nal.usda.gov/ndb/search/?format=json&q=&ds=Standard+Reference&sort=n&max=100&api_key=NYYLHns54La4bh2r7nLLMfLTgkXYLKVY4Icedoum&offset=' 
                + 100*i)
        .then(response => {
            return response.json();
        }).then(body => {
            const list = body.list.item.map(food => ({ndbno: food.ndbno, name: food.name}));
            
            foodsList = foodsList.concat(list);
        });
    }
    
    setTimeout(()=>{console.log('foodsList', foodsList.length/* , foodsList */);}, 3000); 
};

const getFoods = async (ctx, next) => {
    
    console.log(foodsList);

    ctx.body = foodsList;
    //ctx.body = Object.values(ingredients).map(ingredient => ingredient.name); //responseBody.map((item) => ctx.params.ingredient + '---' + item);
    
};

export {fetchFoods, foodsList, getFoods};
