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

    it('should correctly extend context', function() {
        View.Template.extendContext({
            test: function(m) { return m+" world"; }
        })
        var MyView = View.Template.extend({
            template: "<%- test(message) %>"
        });

        var v = new MyView({
            message: "hello"
        });
        v.appendTo($body);
        v.update();

        expect(v.html()).to.equal("hello world");
        v.remove();
    });
});

