Koala.views.add('events_table', Backbone.View.extend({

	tagName: "table",

	template: Koala.templates.get('events_table'),
	
	className: "table table-hover",

	initialize: function() {
		var Collection = Koala.collections.new('events');
		this.tbody = Koala.views.new('tbody', {
			collection: Collection,
			rowView: 'event_tr'
		});

		var Links = Koala.models.new('links');
		this.links_ul = Koala.views.new('links_ul', {
			model: Links
		});

		Collection.fetch({
			data: location.search.replace(/^\?(.*)/gi, '$1')
		})
		.done(function(data, textStatus, jqXHR) {
			var linkHeader = jqXHR.getResponseHeader('link');
			Links.set(Links.parse(linkHeader));
		});
	},

	render: function() {
		this.$el.html(this.template());
		this.$el.append(this.tbody.el);
		this.links_ul.render().$el.insertAfter(this.el);
		return this;
	}

}));