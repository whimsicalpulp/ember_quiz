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
      Option.create({ id: '1', value: 'Nightshade' }),
      Option.create({ id: '2', value: 'Hemlock' }),
      Option.create({ id: '3', value: 'Rhubarb' })
    ]
  }),

  Poll.create({
    id: '2',
    question: 'Which Is Your Favorite Woodland Wanderer Way?',
    options: [
      Option.create({ id: '4', value: 'Honesty' }),
      Option.create({ id: '5', value: 'Integrity' }),
      Option.create({ id: '6', value: 'Patience' })
    ]
  })
];

export default Ember.Service.extend({
  getPolls() {
    return polls;
  },

  getPollById( id ) {
    const polls = this.getPolls();
    return polls.findBy( 'id', id);
  }
});
