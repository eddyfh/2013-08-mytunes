var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      new SongQueueEntryView({model: song}).render();
    }, this);

    // this.get('songQueue').on('add', this.checkFirst, this);



    // params.library.on('nextsong', function(song){
    //   console.log('ran');
    //   this.get('songQueue').shift();
    //   this.set('currentSong', this.get('songQueue').models[0]);
    // }, this);

  },




});


