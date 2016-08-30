import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

/***********************
When a request comes into the application, that request hits the router.
The router determines what it is you're doing and where you're doing it.
It doesn't know anything or care anything about the templates being used.
The template is rendering HTML once it is called. But there is nothing
actually telling the template what data to render because the router
doesn't actually talk directly to the template. There is something in
between there that does that job. Ember also generates another concept
for us as well that sits between the router and the templates. This is
where the 3rd major concept comes in called "Routes". Routes are responsible
for collecting and organizing data as well as handing off that data to
templates to be rendered.
************************/
Router.map(function() {

  // Routes are defined in app/routes with a file name matching their route name.
  // Here we have nested routes so an anonymous function defines the parent route.
  this.route('polls', function() {
    // Dynamic segments are part of the URL path that holds variable data, like
    // identifiers. Dynamic segments start with a colon. Here the route would
    // look something like /polls/2 where 2 is the poll_id
    this.route('poll', { path: '/:poll_id' });
    this.route('results', { path: '/:poll_id/results' });
  });
});

export default Router;
