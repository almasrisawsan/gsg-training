import "./App.css";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

const App = () => {
  const salad = recipes.filter(({ name }) => name === "Greek Salad");
  return (
    <div>
      <div>
        <h1>Recipes</h1>
        {salad.map(({ id, name, ingredients }) => (
          <div key={id}>
            <h2>{name}</h2>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

/**
 * Convert CV repeated components into maps
 */
/* Rendering Lists 
1- Create new component 
2- add the list 



3- Create a new array of just “chemist” people
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

4- Now map over chemists:
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);

5- return chemists list

export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}


/// Example 2 
* export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];


 * export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            // put recipes and ingredients in each recipe
          </ul>
        </div>
      )}
    </div>
  );
}

*/
