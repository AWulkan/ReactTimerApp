const React = require("react");
const ReactDOM = require("react-dom");
const {Route, Router, IndexRoute, browserHistory} = require("react-router");
const Main = require("Main");

// Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// app.css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
        
        </Route>
    </Router>,
    document.getElementById("app")
);
