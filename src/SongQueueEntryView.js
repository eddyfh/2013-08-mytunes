var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
  },

  render: function(){
  	// console.log(this);
    $('#queuer').parent().append(this.$el.html(this.template(this.model.attributes)));
    // $('th').append('<div>test</div>');
    // debugger;
    // this.$el.html(this.template(this.model.attributes));
  }

});
