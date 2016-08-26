import Ember from 'ember';

export default Ember.Route.extend({
  // The router passes the dynamic segment values to the route's model hook
  // via the params parameter.
  model(params) {
    const store = this.get('store');
    return store.getPollById(params.poll_id);
  },

  store: Ember.inject.service()

});
