/**
 * In this example, the ShippingForm implementation is also artificially slowed down so that you can see what happens when some React component you’re rendering is genuinely slow. 
 * Try incrementing the counter and toggling the theme.

Unlike in the previous example, toggling the theme is also slow now! 
This is because there is no useCallback call in this version, so handleSubmit is always a new function, 
and the slowed down ShippingForm component can’t skip re-rendering.
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
