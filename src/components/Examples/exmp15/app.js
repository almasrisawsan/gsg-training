/**
 * Now let’s say you want to add a button to delete a place you’ve already visited.
 *  How would you go about it? Updating nested state involves making copies of objects all the way up from the part that changed. 
 * Deleting a deeply nested place would involve copying its entire parent place chain. 
 * Such code can be very verbose.

If the state is too nested to update easily, 
consider making it “flat”. Here is one way you can restructure this data.
 Instead of a tree-like structure where each place has an array of its child places,
 you can have each place hold an array of its child place IDs.
 Then store a mapping from each place ID to the corresponding place.

 */
import { useState } from "react";
import { initialTravelPlan } from "./places.js";

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}
