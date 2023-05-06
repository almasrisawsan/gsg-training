/**
 * In this example, the ShippingForm component is artificially slowed down so that you can see what happens when a React component you’re rendering is genuinely slow. 
 * Try incrementing the counter and toggling the theme.

Incrementing the counter feels slow because it forces the slowed down ShippingForm to re-render.
 That’s expected because the counter has changed, and so you need to reflect the user’s new choice on the screen.

Next, try toggling the theme. Thanks to useCallback together with memo, 
it’s fast despite the artificial slowdown! ShippingForm skipped re-rendering because the handleSubmit function has not changed. 
The handleSubmit function has not changed because both productId and referrer (your useCallback dependencies) haven’t changed since last render.
 */

import { useState } from "react";
import ProductPage from "./ProductPage.js";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
