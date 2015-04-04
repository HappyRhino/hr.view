var $ = require("jquery");
var View = require("../");

describe('View', function() {
    var $body = $("body");

    it('should correctly append view to dom', function() {
        var MyView = View.extend({
            tagName: "span"
        });

        var v = new MyView();
        v.appendTo($body);

        expect($("body span").length).to.equal(1);
    });

});

