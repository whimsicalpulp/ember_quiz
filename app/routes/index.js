import Ember from 'ember';

export default Ember.Route.extend( {
  actions: {
    createPoll(poll) {
      console.log("Index route: Creating Poll");
      this.get( 'store' ).savePoll(poll);
      this.transitionTo('polls.poll', poll);
    }
  },

  // The Poll form is on the / index route's template, so the index route
  // will use the new poll record for its model.
  model() {
    console.log("index route");
    return this.get('store').newPoll();
  },

  store: Ember.inject.service()

});
