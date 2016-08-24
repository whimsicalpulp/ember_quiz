import Ember from 'ember';

export default Ember.Route.extend({
  // One way to customize the route is by adding a model function, or hook.
  // In that function we can return any data we want to make available to the
  // template.
  model(params) {
    return [
      { id: '1', question: 'Which Poisonous Plant Are You?' },
      { id: '2', question: 'Which Is Your Favorite Woodland Wanderer Way? ' }
    ];
  }
});
