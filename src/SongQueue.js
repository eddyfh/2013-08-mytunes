var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.checkFirst, this);
    this.on('add', this.newSong, this);
    this.on('ended', this.ended, this);
    this.on('dequeue', this.dequeue, this);
    //this.on('ended', this.ended, this); // NEED TO RUN ENDED FROM THE SONG MODEL?
    //this.on('ended', this.playFirst(), this);
  },

  // newSong: function(song){
  //   new SongQueueEntryView({model: song}).render();
  // },
  
  checkFirst: function(){
    if (!this.at(1)) {
      if (this.at(0)) {
        this.playFirst();
      }
    }
  },

  playFirst: function(){
    this.at(0).play();
    //this.set('currentSong', this.at(0));
  },

  ended: function(){
    this.shift();
    if (this.at(0)) {
      this.playFirst();
    }
  },

  dequeue: function(song){
    this.remove(song);
    // this.set('currentSong', this.get('songQueue').at(0));
  }

});
