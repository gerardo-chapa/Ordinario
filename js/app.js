var AppView = Backbone.View.extend({

	el: '#container',

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html("Trucos locos");
	}
});