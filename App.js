const parent = React.createElement("div", {id : "parent"},
    [
        React.createElement("div", {id : "child"},
            [React.createElement("h1", {key: 1, id : "heading"}, 
                "Grand Child", 

            ), React.createElement("h2", {key: 2, id: 'bead'},
                "Grand sibling"
            )]
        ), React.createElement("div", {id : "child"},
            [React.createElement("h1", {key: 1, id : "heading"}, 
                "Grand Child", 
            ), React.createElement("h2", {key: 2, id: 'bead'},
                "Grand sibling"
            )]
        )
    ]
)

const heading = React.createElement(
    "h1", 
    {id : "head"}, 
    "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
