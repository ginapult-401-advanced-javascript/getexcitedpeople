'use strict';

let contents = [
  {
    content_id:1,
    user_id: 100,
    content:'Do one thing every day that scares you',
  },
  {
    content_id:2,
    user_id: 101,
    content:'We are what we pretend to be, so we must be careful about what we pretend to be.',
  },
  {
    content_id:3,
    user_id: 102,
    content:'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.',
  },
  {
    content_id:4,
    user_id: 103,
    content:'Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.',
  },
  {
    content_id:5,
    user_id: 104,
    content:'And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
  },
  {
    content_id:6,
    user_id: 105,
    content:'What\'s meant to be will always find a way',
  },
  {
    content_id:7,
    user_id: 106,
    content:'The flower that blooms in adversity is the rarest and most beautiful of all.',
  },
  {
    content_id:8,
    user_id: 107,
    content:'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.',
  },
  {
    content_id:9,
    user_id: 108,
    content:'You never have to change anything you got up in the mcontent_iddle of the night to write.',
  },
  {
    content_id:10,
    user_id: 109,
    content:'Courage is the most important of all the virtues because without courage, you can\'t practice any other virtue consistently.',
  },
  {
    content_id:11,
    user_id: 110,
    content:'The unexamined life is not worth living.',
  },
  {
    content_id:12,
    user_id: 111,
    content:'I was never really insane except upon occasions when my heart was touched.',
  },
  {
    content_id:13,
    user_id: 112,
    content:'Pain is temporary. Quitting lasts forever.',
  },
  {
    content_id:14,
    user_id: 113,
    content:'If someone starts to speak unkindly to me, I will remember that they have got something going on that has nothing to do with me. Like maybe they just pooped their pants. Yes, that\'s probably it',
  },
  {
    content_id:15,
    user_id: 114,
    content:'I believe in magic. I see evcontent_idence of it all the time. And though the tricks can probably be explained away by something sensible and ordinary, I\'d rather not ruin the fun.',
  },
  {
    content_id:16,
    user_id: 115,
    content:'I am healthy, vital, and strong. My radiant love of life fills me with healthy, vital, and strong cells. Each cell is a warrior. Every one has its own sword and shield. I dare you to try and penetrate my cellular army. Dcontent_idn\'t think so, chump.',
  },
  {
    content_id:17,
    user_id: 116,
    content:'As I open to the abundant possibilities of my life\'s path, I\'m reminded that I always have unlimited options. Life is a buffet, and I allow myself to choose whatever makes me happiest, without limiting thoughts like "you can\'t put mac n cheese on your baked potato."',
  },
  {
    content_id:18,
    user_id: 117,
    content: 'I release myself from any and all judgements. I find my inner critic, call it into my office, and tell it to take a vacation. As it leaves the room, I let out a sigh and begin to enjoy the joy of simply being. Who hired that guy anyway?',
  },
  {
    content_id:19,
    user_id: 118,
    content:'No one is fearless. No one. But even though I\'m not fearless, I am courageous. When fear shows up, I don\'t run away from it. I use my courage to conquer it. My courage allows me to walk right up to that fear and kick it in the nuts -- and then quickly hcontent_ide behind someone bigger until it goes away.',
  },
  {
    content_id:20,
    user_id: 119,
    content:'Tough times don’t last. Tough people do.',
  },
  {
    content_id:21,
    user_id: 120,
    content:'It does not matter how slowly you go as long as you do not stop.',
  },
  {
    content_id:22,
    user_id: 121,
    content:'Courage is one step ahead of fear.',
  },
  {
    content_id:23,
    user_id: 122,
    content:'Everything you’ve ever wanted is on the other scontent_ide of fear.',
  },
  {
    content_id:24,
    user_id: 123,
    content:'It’s not about perfect. It’s about effort.',
  },
  {
    content_id:25,
    user_id: 124,
    content:'You are so much more than what you are going through.',
  },
  {
    content_id:26,
    user_id: 125,
    content:'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.',
  },
  {
    content_id:27,
    user_id: 126,
    content:'A day without laughter is a day wasted.',
  },

];

function getInspiration (user_id){
  let count = contents.length; 
  let randomId = Math.floor((Math.random()* count) + 1);
  console.log(randomId);
  let result = {};
  contents.forEach(content => {
    if(content.content_id === randomId){
      result = content;
      // console.log('this is the content:', content);
    }
  });
  return result;
}

module.exports = {'contents': contents, 'getInspiration': getInspiration};
