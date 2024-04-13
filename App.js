/** 
const heading = React.createElement("h1", { id: "heading" }, "hello world from react");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);





reactElement(object)  => HTML(browser understands)


If u want to add siblings you can use array


const parent = React.createElement(
    "div", { id : "parent"}, 
    React.createElement( 
        "div",
        {id : "child"},
        React.createElement("h1", {}, "i am an h1 tag")
    )
);
*/


const parent = React.createElement(
    "div", { id : "parent"}, 
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1", {}, "i am an h1 tag") ,
        React.createElement("h2", {}, "i am an h2 tag") ]
    )
); 




console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

/***
 * render will replace the previous  element with new one
 */
root.render(parent);