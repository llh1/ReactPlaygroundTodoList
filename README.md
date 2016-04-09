React Playground: TodoApp
=======================

This is the code base of an empty TodoList application. You can use it to learn how to use React. This playground is inspired by TodoMVC. The specifications of the application are already written. Then, you can focus on the implementation. If you make all the tests passed, you should be ready to use React in a more complex situation. 

To get started quickly:
> git clone TOCHANGE
> cd ReactPlaygroundTodoApp
> npm install

You will find the following commands useful when you start working on the TodoList application:
> * **npm run build** : compile the JSX files and bundle the application using webpack
> * **npm run watch** : compile the JSX files and bundle the application everytime you change a file
> *  **npm run start** : start a server to run the application on localhost
> * **npm run test** : run the tests using karma

Ready? All the requirements are written in the spec (todo-app-spec.jsx). Use the spec to drive your implementation. Also you will find below some help to know what to do first ;-)

Understand the code base
-----------
Take some time to go through the code base before starting to implement anything. In particular, you should understand the following points:

* Webpack is used to bundle your files following the configuration defined in **webpack.config.js**. 
* **index.html** is the only html page of your application and your TodoList will be rendered in the section "todoapp", following the instruction in **src/main.jsx**.
* Your TodoList application has 2 files: **src/todo-app.jsx** and **src/todo-item.jsx**.
* The specifications of the TodoList are written in **test/todo-app-spec.jsx**.

Implement the TodoList application
------------
Use **test/todo-app-spec.jsx** to drive your implementation. Make the tests passed one by one. Feel free to add more tests if you think you need to but do not change the existing tests. Your TodoList application should have the following features:

* Add a new todo item when pressing enter key
* Mark a todo item as completed
* Delete a todo item
* Sort automatically the todo items alphabetically
* Mark all todo items as completed when check the top checkbox
* Mark all todo items as non completed when uncheck the top checkbox

What you should know after completing the TodoList application
----------
* The concept of React components
* JSX syntax
* Use props 
* Use state
* Make your components communicating
* Work with form elements and know the difference between controlled components and non controlled components
* Understand the data flow in a React application
* Understand when a component is rendered