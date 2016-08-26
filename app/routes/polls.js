import Ember from 'ember';

export default Ember.Route.extend({
  // One way to customize the route is by adding a model function, or hook.
  // In that function we can return any data we want to make available to the
  // template.
  model() {
    const store = this.get( 'store' );
    return store.getPolls();
  },

  store: Ember.inject.service()

});
