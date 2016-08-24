import Ember from 'ember';

export default Ember.Route.extend({
  // The router passes the dynamic segment values to the route's model hook
  // via the params parameter. 
  model(params) {
    return {
      id: params.poll_id,
      question: 'This is poll #' + params.poll_id
    };
  }
});
