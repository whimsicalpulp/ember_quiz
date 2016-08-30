// the same data structures are needed across the app so we create a service
// called 'store' to hold the data.
// The service was created with the command $ ember generate service store
// The file name matches the service name 'store'
// Service objects are made available within another object using Ember.inject.service()
import Ember from 'ember';

// We need to import the models using project paths. 'quiz' is the name we defined
// with ember new, when we created the app.
import Poll from 'quiz/models/poll';
import Option from 'quiz/models/option';

const polls = [
  Poll.create({
    id: '1',
    question: 'Which Poisonous Plant Are You?',
    options: [
      Option.create({ id: '1', value: 'Nightshade', votes: 1 }),
      Option.create({ id: '2', value: 'Hemlock', votes: 5 }),
      Option.create({ id: '3', value: 'Rhubarb', votes: 0 })
    ]
  }),

  Poll.create({
    id: '2',
    question: 'Which Is Your Favorite Woodland Wanderer Way?',
    options: [
      Option.create({ id: '4', value: 'Honesty', votes: 3 }),
      Option.create({ id: '5', value: 'Integrity', votes: 4 }),
      Option.create({ id: '6', value: 'Patience', votes: 2 })
    ]
  })
];

export default Ember.Service.extend({
  savePoll(poll) {
    console.log("store: saving poll");
    poll.set('id', (polls.length + 1).toString());
    polls.pushObject(poll);
    return poll;
  },

  getPolls() {
    return polls;
  },

  getPollById( id ) {
    const polls = this.getPolls();
    return polls.findBy( 'id', id);
  },

  // To manage a new poll's information, we need an empty Poll record to work with.
  // newPoll() returns a new Poll record with 3 options initialized with 0 votes.
  // The index route always show a new Poll, so the route will call this function to
  // create and return a new Poll as its model.
  newPoll() {
    return Poll.create({
      options: [
        Option.create({ votes: 0 }),
        Option.create({ votes: 0 }),
        Option.create({ votes: 0 })
      ]
    });
  }

});
