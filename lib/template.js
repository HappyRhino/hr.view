var _ = require("hr.utils");
var View = require("./base");

// Compile a template
function compileTpl(content) {
    if (_.isFunction(content)) return content;
    return _.template(content);
}


/*
 * View that display a template
 */
var TemplateView = View.extend({
    template: null,
    templateContext: function() {
        return this.options;
    },

    render: function() {
        this._template = this._template || compileTpl(_.result(this, 'template'));
        this.html(
            this._template(
                _.extend({}, TemplateView.context, _.result(this, 'templateContext'))
            )
        );

        return this.ready();
    }
}, {
    // Default context
    context: {},

    // Extend default context
    extendContext: function(o) {
        _.extend(TemplateView.context, o);
    }
});

module.exports = TemplateView;
