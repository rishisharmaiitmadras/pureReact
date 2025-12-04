## createRoot method-> it creats a dom it create main dom and khud kaa dom and compare to main and then jo bhi change hoga usi ko update karega

# ReactFibre -> https://github.com/acdlite/react-fiber-architecture

# when all designing done and we creates a button in which it doesnt work means to its not clickable when javascript integrate into that html thats known as hydration .

## reconciliation
- The algorithm React uses to differentiate one tree with another tree (means createRoot vs document)to determine which parts need to be changed.

## update-> update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render. example -> like in usestate(setState) etc...

## Reconciliation is the algorithm behind what is popularly understood as or behind the seen as the "virtual DOM."

## Virtual DOM kya hai?

-DOM (Document Object Model) browser ka way hai HTML elements ko represent karne ka.
Directly DOM ke saath kaam karna slow ho sakta hai, kyunki har change ke liye browser ko repaint/reflow karna padta hai.

-Virtual DOM (VDOM) ek lightweight copy hai DOM ka, jo memory mein store hoti hai.
Matlab React pehle ek in-memory tree banata hai, jo HTML elements ko describe karta hai.jaise kuch change hona hota h to browser ko repaint/reflow nhi karna pdta to optimise kar deta h
# Ye comparison process ko Reconciliation kehte hain.
