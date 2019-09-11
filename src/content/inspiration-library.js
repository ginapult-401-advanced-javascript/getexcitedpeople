'use strict';

const Inspiration = require('../models/inspiration/inspiration.js');
const inspiration = new Inspiration();

const getInspiration = userId => {
  return inspiration.get()
    .then(allInspiration => {
      const userInspiration = allInspiration.filter(inspiration => inspiration.user_id === userId);
      const randomIndex = Math.floor(Math.random() * userInspiration.length);
      return userInspiration[randomIndex];
    })
    .catch(console.error);
};

const createInspiration = (userId, newInspiration) => {
  const inspirationObject = {
    user_id: userId,
    content: newInspiration,
  };
  return inspiration.create(inspirationObject);
};

const updateInspiration = (userId, inspirationId, newInspiration) => {
  return inspiration.update(inspirationId, {content: newInspiration});
};

const deleteInspiration = (userId, inspirationId) => {
  return inspiration.delete(inspirationId);
};

const generateScheduleInspiration = () => {
  return inspiration.get()
    .then(allContent => {
      const randomIndex = Math.floor(Math.random() * allContent.length);
      return allContent[randomIndex];
    })
    .catch(console.error);
};

let inspirations = [
  {
    inspiration_id:1,
    user_id: 100,
    inspiration:'Do one thing every day that scares you',
  },
  {
    inspiration_id:2,
    user_id: 101,
    inspiration:'We are what we pretend to be, so we must be careful about what we pretend to be.',
  },
  {
    inspiration_id:3,
    user_id: 102,
    inspiration:'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.',
  },
  {
    inspiration_id:4,
    user_id: 103,
    inspiration:'Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.',
  },
  {
    inspiration_id:5,
    user_id: 104,
    inspiration:'And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
  },
  {
    inspiration_id:6,
    user_id: 105,
    inspiration:'What\'s meant to be will always find a way',
  },
  {
    inspiration_id:7,
    user_id: 106,
    inspiration:'The flower that blooms in adversity is the rarest and most beautiful of all.',
  },
  {
    inspiration_id:8,
    user_id: 107,
    inspiration:'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.',
  },
  {
    inspiration_id:9,
    user_id: 108,
    inspiration:'You never have to change anything you got up in the mcontent_iddle of the night to write.',
  },
  {
    inspiration_id:10,
    user_id: 109,
    inspiration:'Courage is the most important of all the virtues because without courage, you can\'t practice any other virtue consistently.',
  },
  {
    inspiration_id:11,
    user_id: 110,
    inspiration:'The unexamined life is not worth living.',
  },
  {
    inspiration_id:12,
    user_id: 111,
    inspiration:'I was never really insane except upon occasions when my heart was touched.',
  },
  {
    inspiration_id:13,
    user_id: 112,
    inspiration:'Pain is temporary. Quitting lasts forever.',
  },
  {
    inspiration_id:14,
    user_id: 113,
    inspiration:'If someone starts to speak unkindly to me, I will remember that they have got something going on that has nothing to do with me. Like maybe they just pooped their pants. Yes, that\'s probably it',
  },
  {
    inspiration_id:15,
    user_id: 114,
    inspiration:'I believe in magic. I see evcontent_idence of it all the time. And though the tricks can probably be explained away by something sensible and ordinary, I\'d rather not ruin the fun.',
  },
  {
    inspiration_id:16,
    user_id: 115,
    inspiration:'I am healthy, vital, and strong. My radiant love of life fills me with healthy, vital, and strong cells. Each cell is a warrior. Every one has its own sword and shield. I dare you to try and penetrate my cellular army. Dcontent_idn\'t think so, chump.',
  },
  {
    inspiration_id:17,
    user_id: 116,
    inspiration:'As I open to the abundant possibilities of my life\'s path, I\'m reminded that I always have unlimited options. Life is a buffet, and I allow myself to choose whatever makes me happiest, without limiting thoughts like "you can\'t put mac n cheese on your baked potato."',
  },
  {
    inspiration_id:18,
    user_id: 117,
    inspiration: 'I release myself from any and all judgements. I find my inner critic, call it into my office, and tell it to take a vacation. As it leaves the room, I let out a sigh and begin to enjoy the joy of simply being. Who hired that guy anyway?',
  },
  {
    inspiration_id:19,
    user_id: 118,
    inspiration:'No one is fearless. No one. But even though I\'m not fearless, I am courageous. When fear shows up, I don\'t run away from it. I use my courage to conquer it. My courage allows me to walk right up to that fear and kick it in the nuts -- and then quickly hcontent_ide behind someone bigger until it goes away.',
  },
  {
    inspiration_id:20,
    user_id: 119,
    inspiration:'Tough times don’t last. Tough people do.',
  },
  {
    inspiration_id:21,
    user_id: 120,
    inspiration:'It does not matter how slowly you go as long as you do not stop.',
  },
  {
    inspiration_id:22,
    user_id: 121,
    inspiration:'Courage is one step ahead of fear.',
  },
  {
    inspiration_id:23,
    user_id: 122,
    inspiration:'Everything you’ve ever wanted is on the other scontent_ide of fear.',
  },
  {
    inspiration_id:24,
    user_id: 123,
    inspiration:'It’s not about perfect. It’s about effort.',
  },
  {
    inspiration_id:25,
    user_id: 124,
    inspiration:'You are so much more than what you are going through.',
  },
  {
    inspiration_id:26,
    user_id: 125,
    inspiration:'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.',
  },
  {
    inspiration_id:27,
    user_id: 126,
    inspiration:'A day without laughter is a day wasted.',
  },

];

module.exports = {
  'inspiration': inspirations,
  getInspiration,
  createInspiration,
  updateInspiration,
  deleteInspiration,
  generateScheduleInspiration,
};
