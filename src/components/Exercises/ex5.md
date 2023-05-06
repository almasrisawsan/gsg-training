In this example, toggling the checkbox changes the imageSize prop passed to each <PlaceImage>. The checkbox state is held in the top-level App component, but each <PlaceImage> needs to be aware of it.

Currently, App passes imageSize to List, which passes it to each Place, which passes it to the PlaceImage. Remove the imageSize prop, and instead pass it from the App component directly to PlaceImage.

You can declare context in Context.js.

 Link --> <https://codesandbox.io/s/yykn5n?file=%2FApp.js&utm_medium=sandpack>
