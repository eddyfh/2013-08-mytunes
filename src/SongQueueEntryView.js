var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    
    $('#queuer').parent().append(this.$el.html(this.template(this.model.attributes)));


    // console.log(this);
    // $('th').append('<div>test</div>');
    // debugger;
    // this.$el.html(this.  template(this.model.attributes));
  }

});
