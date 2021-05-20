# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...

* TotalDisplay shows the total plus 1.
1. the onClick handler executes when clicked.
2. this calls the function dispatch, from useReducer hook, and that takes an object.
- this case the object is defined as a function and imported from the actions file.
3. this sends the object with a property type.
4. using switch in the reducer function will know which case to return, from the type.
5. after executing dispatch and running the reducer's logic, state gets updated.
6. the updated state from the hook useReducer is rendered to the DOM.
