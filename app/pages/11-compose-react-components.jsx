import { Citrus } from "../components/Citrus";
import { NonCitrus } from "../components/NonCitrus";
import { Vegetables } from "../components/Vegetables";

<h1>Compose React Components</h1>;

// Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges.
// You can render JSX elements, stateless functional components, and ES6 class components within other components.

// In the code editor, the TypesOfFood component is already rendering a component called Vegetables. Also, there is the Fruits component from the last challenge.

// Nest 2 components inside of Fruits — first NonCitrus, and then Citrus. Both of these components are provided for you behind the scenes.

// Next, nest the Fruits class component into the TypesOfFood component, below the h1 heading element and above Vegetables. The result should be a series of nested components, which uses 2 different component types.

// class Fruits extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Fruits:</h2>
//         { /* Change code below this line */ }

//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//      super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* Change code below this line */ }

//         { /* Change code above this line */ }
//         <Vegetables />
//       </div>
//     );
//   }
// };

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}
