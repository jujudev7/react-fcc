import ReactDOM from "react-dom/client";

<h1>Render HTML Elements to the DOM</h1>;

// So far, you've learned that JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

// ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

// As you would expect, ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.

// The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line

// Ancienne méthode, dépréciée :
// ReactDOM.render(JSX, document.getElementById("challenge-node"));

// Nouvelle méthode,importer ReactDOM, puis :

// Sélectionnez le nœud DOM où vous souhaitez monter l'application
const rootElement = document.getElementById("challenge-node");

// Créez un "root" et montez votre application
const root = ReactDOM.createRoot(rootElement);
root.render(JSX);
