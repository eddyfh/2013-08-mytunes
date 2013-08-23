var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  nextsong: function(){
    this.trigger('nextsong', this);
  },
  ended: function(){
    // console.log('ended');
    // this.collection.shift();
    // this.collection.playFirst();
    this.trigger('ended', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  }

});