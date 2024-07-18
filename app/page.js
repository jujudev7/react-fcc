import { CreateSimpleJSXElement } from "./pages/1-CreateSimpleJSXElement";
import { CreateComplexJSXElement } from "./pages/2-CreateComplexJSXElement";
import { AddCommentsInJSX } from "./pages/3-AddCommentsInJSX";

export default function Home() {
  return (
    <div>
      <h2>1. Create a Simple JSX Element</h2>
      <p>
        React is an Open Source view library created and maintained by Facebook.
        It's a great tool to render the User Interface (UI) of modern web
        applications. React uses a syntax extension of JavaScript called JSX
        that allows you to write HTML directly within JavaScript.{" "}
      </p>
      <p>
        This has several benefits. It lets you use the full programmatic power
        of JavaScript within HTML, and helps to keep your code readable. For the
        most part, JSX is similar to the HTML that you have already learned,
        however there are a few key differences that will be covered throughout
        these challenges.{" "}
      </p>
      <p>
        For instance, because JSX is a syntactic extension of JavaScript, you
        can actually write JavaScript directly within JSX. To do this, you
        simply include the code you want to be treated as JavaScript within
        curly braces: {"this is treated as JavaScript code"}. Keep this in mind,
        since it's used in several future challenges.{" "}
      </p>
      <p>
        However, because JSX is not valid JavaScript, JSX code must be compiled
        into JavaScript. The transpiler Babel is a popular tool for this
        process. For your convenience, it's already added behind the scenes for
        these challenges. If you happen to write syntactically invalid JSX, you
        will see the first test in these challenges fail.{" "}
      </p>{" "}
      <p>
        It's worth noting that under the hood the challenges are calling
        ReactDOM.render(JSX, document.getElementById('root')). This function
        call is what places your JSX into React's own lightweight representation
        of the DOM. React then uses snapshots of its own DOM to optimize
        updating only specific parts of the actual DOM.
      </p>
      <p>
        The current code uses JSX to assign a div element to the constant JSX.
        Replace the div with an h1 element and add the text Hello JSX! inside
        it.
      </p>
      <CreateSimpleJSXElement />
      <div>
        <h2>2. Create a Complex JSX Element</h2>
        <p>
          One important thing to know about nested JSX is that it must return a
          single element. This one parent element would wrap all of the other
          levels of nested elements. For instance, several JSX elements written
          as siblings with no parent wrapper element will not transpile.
        </p>
        <p>Here's an example:</p>
        <code>
          <span className="valid">Valid JSX:</span>
          <p>&lt;p&gt;Paragraph One&lt;/p&gt;</p>
          <p>&lt;p&gt;Paragraph Two&lt;/p&gt;</p>
          <p>&lt;p&gt;Paragraph Three&lt;/p&gt;</p>
          <br />
          <span className="invalid">Invalid JSX:</span>
          <p>&lt;p&gt;Paragraph One&lt;/p&gt;</p>
          <p>&lt;p&gt;Paragraph Two&lt;/p&gt;</p>
          <p>&lt;p&gt;Paragraph Three&lt;/p&gt;</p>
        </code>
        <br />
        <p>
          Define a new constant JSX that renders a div which contains the
          following elements in order: An h1, a p, and an unordered list that
          contains three li items. You can include any text you want within each
          element. Note: When rendering multiple elements like this, you can
          wrap them all in parentheses, but it's not strictly required.
        </p>{" "}
        <p>
          Also notice this challenge uses a div tag to wrap all the child
          elements within a single parent element. If you remove the div, the
          JSX will no longer transpile. Keep this in mind, since it will also
          apply when you return JSX elements in React components.
        </p>
        <code>
          const JSX = (
          <div>
            &lt;div&gt; <p> &lt;h1&gt;Title&lt;/h1&gt;</p>
            <p>&lt;p&gt;Paragraph&lt;/p&gt;</p>
            <ul className="ul-exo2">
              &lt;ul&gt;
              <li>&lt;li&gt;A&lt;/li&gt;</li>
              <li>&lt;li&gt;B&lt;/li&gt;</li> <li>&lt;li&gt;C&lt;/li&gt;</li>{" "}
              &lt;/ul&gt;
            </ul>
            &lt;/div&gt;
          </div>
          );
        </code>
      </div>
      <br />
      <CreateComplexJSXElement />
      <div>
        <h2>3. Add Comments in JSX</h2>
        <p>
          To put comments inside JSX, you use the syntax to wrap around the
          text, like this :
          <pre>
            {" "}
            <code>&#123;/* This is a paragraph */&#125;</code>
          </pre>
          Add a comment somewhere within the provided div element, without
          modifying the existing h1 or p elements.
        </p>
      </div>
      <AddCommentsInJSX />
    </div>
  );
}
