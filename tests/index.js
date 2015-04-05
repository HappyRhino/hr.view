var $ = require("jquery");
var View = require("../");

describe('View', function() {
    it('should correctly append view to dom', function() {
        var MyView = View.extend({
            tagName: "span"
        });

        var v = new MyView();
        v.appendTo("body");

        expect($("body span").length).to.equal(1);
        v.remove();
    });

});

describe('View.Template', function() {
    var $body = $("body");

    it('should correctly render a template', function() {
        var MyView = View.Template.extend({
            template: "Hello <b><%- message %></b>"
        });

        var v = new MyView({
            message: "World"
        });
        v.appendTo($body);
        v.update();

        expect(v.html()).to.equal("Hello <b>World</b>");
        v.remove();
    });

});

