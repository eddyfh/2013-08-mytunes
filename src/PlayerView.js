var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {               // SHOULD PROBABLY NOT DEFINE HERE AND IN SONGQUEUE
    'ended': function() {
      this.model.nextsong();
    }
  },

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    // this.model.trigger('ended')
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url')); // SHOULD NOT USE MODEL?
  }

});
