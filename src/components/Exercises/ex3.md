In this example, switching between different recipients always clears the text input:

case 'changed_selection': {
  return {
    ...state,
    selectedId: action.contactId,
    message: '' // Clears the input
  };

This is because you don’t want to share a single message draft between several recipients. But it would be better if your app “remembered” a draft for each contact separately, restoring them when you switch contacts.

Your task is to change the way the state is structured so that you remember a separate message draft per contact. You would need to make a few changes to the reducer, the initial state, and the components.

Link -> <https://codesandbox.io/s/k7yl8v?file=/App.js&utm_medium=sandpack>
