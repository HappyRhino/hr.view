hr.view [![Build Status](https://travis-ci.org/HappyRhino/hr.view.png?branch=master)](https://travis-ci.org/HappyRhino/hr.view)
=============================

> Views and templating utility

## Installation

```
$ npm install hr.view
```

### Documentation

#### Creation

Create a new view by extending the default `View`:

```js
var View = require("hr.view");

var MyView = View.extend({
    tagName: "div",
    className: "my-view",

    render: function() {
        this.html("So cool!");
        return this.ready();
    }
});
```

#### Append to the dom

```js
var view = new MyView();
view.appendTo("body");
```

#### Templating

```js
var View = require("hr.view");

// or View.Template.extend(...)
var MyView = View.mixin(View.Template).extend({
    template: "My name is <%- name %>",
    templateContext: function() {
        return {
            name: this.model.get("name")
        }
    }
});

var view = new MyView({
    model: new Model({}, { name: "Samy" })
});
view.update();
view.appendTo("body");
```

