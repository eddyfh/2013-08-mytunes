var SongQueueView = Backbone.View.extend({

  tagName: "table",

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    return this.$el.append('<th id="queuer">Song Queue</th>');
      //this.collection.map(function(song){
      //  return new SongQueueEntryView({model: song}).render();
      //})
  }
});
