var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {
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
    console.log('render');
    return this.$el.attr('src', this.model.get('url'));
  }

});
