'use strict';

let quotes = [
  {
    id:1,
    quote:'Do one thing every day that scares you',
    author: 'Eleanor Roosevelt',
    img_url: 'https://i.ytimg.com/vi/-pYuSSP5Wls/maxresdefault.jpg',
  },
  {
    id:2,
    quote:'We are what we pretend to be, so we must be careful about what we pretend to be.',
    author: 'Kurt Vonnegut',
    img_url: 'http://www.kickvick.com/wp-content/uploads/2014/11/cute-baby-animals-a-36.jpg',
  },
  {
    id:3,
    quote:'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.',
    author: 'Paulo Coelho',
    img_url: 'https://i.ytimg.com/vi/eQb5-kcnx18/maxresdefault.jpg',
  },
  {
    id:4,
    quote:'Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.',
    author:' Neil Gaiman',
    img_url: 'https://i.pinimg.com/736x/be/31/a3/be31a3f4d1a3bd83fd395dec6b9b012a.jpg',
  },
  {
    id:5,
    quote:'And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    author: 'Antoine de Saint-Exupéry',
    img_url: 'https://s-i.huffpost.com/gen/2661384/images/o-AWE-facebook.jpg',
  },
  {
    id:6,
    quote:'What\'s meant to be will always find a way',
    author: 'Trisha Yearwood',
    img_url: 'http://i1.ytimg.com/vi/AnYluZ8UpsA/hqdefault.jpg',
  },
  {
    id:7,
    quote:'The flower that blooms in adversity is the rarest and most beautiful of all.',
    author: 'Walt Disney Company',
    img_url: 'https://i.ytimg.com/vi/lB4SvxKgpAU/maxresdefault.jpg',
  },
  {
    id:8,
    quote:'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.',
    author: 'Maya Angelou',
    img_url: 'https://www.hdwallpapers.in/walls/puppy_love-normal.jpg',
  },
  {
    id:9,
    quote:'You never have to change anything you got up in the middle of the night to write.',
    author: 'Saul Bellow',
    img_url: 'https://wallpapertag.com/wallpaper/full/f/9/9/397924-pretty-wallpaper-1920x1080-for-iphone-7.jpg',
  },
  {
    id:10,
    quote:'Courage is the most important of all the virtues because without courage, you can\'t practice any other virtue consistently.',
    author: 'Maya Angelou',
    img_url: 'https://amazinganimalphotos.com/wp-content/uploads/2013/04/cute-kitten-playing-with-bubbles-photo.png',
  },
  {
    id:11,
    quote:'The unexamined life is not worth living.',
    author: 'Socrates',
    img_url: 'https://i.pinimg.com/736x/99/b6/7c/99b67c8f15f91afbc457aef895dcdca0--pretty-phone-backgrounds-background-ideas.jpg',
  },
  {
    id:12,
    quote:'I was never really insane except upon occasions when my heart was touched.',
    author: 'Edgar Allan Poe',
    img_url: 'http://2.bp.blogspot.com/-BRFnOq3PSrY/UTy8m0DAthI/AAAAAAAAAdo/Pj0iA4Lm0Ew/s1600/spring-time.jpg',
  },
  {
    id:13,
    quote:'Pain is temporary. Quitting lasts forever.',
    author: 'Lance Armstrong',
    img_url: 'http://2.bp.blogspot.com/-4dc4vkZLlGo/TWHh1qNIJSI/AAAAAAAAEfg/DBdScbOCEYE/s1600/vista-wallpaper-green-sea-turtle.jpg',
  },
  {
    id:14,
    quote:'If someone starts to speak unkindly to me, I will remember that they have got something going on that has nothing to do with me. Like maybe they just pooped their pants. Yes, that\'s probably it',
    author: 'Knock Knock',
    img_url: 'https://www.wired.com/wp-content/uploads/2015/04/85120553.jpg',
  },
  {
    id:15,
    quote:'I believe in magic. I see evidence of it all the time. And though the tricks can probably be explained away by something sensible and ordinary, I\'d rather not ruin the fun.',
    author: 'Knock Knock',
    img_url: 'https://i.pinimg.com/736x/e6/99/63/e69963d2561f8a8a8874b7b04a0158e5--glastonbury-england-tor.jpg',
  },
  {
    id:16,
    quote:'I am healthy, vital, and strong. My radiant love of life fills me with healthy, vital, and strong cells. Each cell is a warrior. Every one has its own sword and shield. I dare you to try and penetrate my cellular army. Didn\'t think so, chump.',
    author: 'Knock Knock',
    img_url: 'https://tracts4free.files.wordpress.com/2015/01/dsc_0155-little-finger-baby-ndt.jpg',
  },
  {
    id:17,
    quote:'As I open to the abundant possibilities of my life\'s path, I\'m reminded that I always have unlimited options. Life is a buffet, and I allow myself to choose whatever makes me happiest, without limiting thoughts like "you can\'t put mac n cheese on your baked potato."',
    author: 'Knock Knock',
    img_url: 'https://southwestdesertlover.files.wordpress.com/2012/04/door-in-greece.jpg',
  },
  {
    id:18,
    quote: 'I release myself from any and all judgements. I find my inner critic, call it into my office, and tell it to take a vacation. As it leaves the room, I let out a sigh and begin to enjoy the joy of simply being. Who hired that guy anyway?',
    author: 'Knock Knock',
    img_url: 'https://tpzoo.files.wordpress.com/2014/01/ducklings.jpg',
  },
  {
    id:19,
    quote:'No one is fearless. No one. But even though I\'m not fearless, I am courageous. When fear shows up, I don\'t run away from it. I use my courage to conquer it. My courage allows me to walk right up to that fear and kick it in the nuts -- and then quickly hide behind someone bigger until it goes away.',
    author: 'Knock Knock',
    img_url: 'http://papers.co/wallpaper/papers.co-na91-bubble-art-life-beautiful-colorful-bw-dark-29-wallpaper.jpg',
  },
  {
    id:20,
    quote:'Tough times don’t last. Tough people do.',
    author: 'Robert H. Schuller',
    img_url: 'https://c2.staticflickr.com/6/5216/5491756636_17818b05a1_z.jpg',
  },
  {
    id:21,
    quote:'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
    img_url: 'https://4.bp.blogspot.com/-lR6TnCKgQgw/WT6twv-_ODI/AAAAAAAAVXk/j64EN3I_1lgbDM3ZUGqgZzWwd3rHF2FKwCLcB/s1600/Louangphabang-Laos.jpg',
  },
  {
    id:22,
    quote:'Courage is one step ahead of fear.',
    author: 'Coleman Young',
    img_url: 'http://cdn.theatlantic.com/static/infocus/animals081911/a08_19801986.jpg',
  },
  {
    id:23,
    quote:'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair',
    img_url: 'https://weneedfun.com/wp-content/uploads/2016/08/Beautiful-Ireland-Wallpapers-13.jpg',
  },
  {
    id:24,
    quote:'It’s not about perfect. It’s about effort.',
    author: 'Jillian Michaels',
    img_url: 'http://blog.canvascorpbrands.com/wp-content/uploads/2016/06/Hedgehog-in-a-teacup-4.jpg',
  },
  {
    id:25,
    quote:'You are so much more than what you are going through.',
    author: 'John Tew',
    img_url: 'http://papers.co/wallpaper/papers.co-mr35-lake-calm-nature-beautiful-sea-water-blue-flare-32-wallpaper.jpg',
  },
  {
    id:26,
    quote:'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.',
    author: 'Dennis Wholey',
    img_url: 'http://4.bp.blogspot.com/-Iu4jLjqLlx4/Tw2U8abfzNI/AAAAAAAAUaA/MLCW045upjE/s1600/Animals-News-at-Zoo-Park.jpg',
  },
  {
    id:27,
    quote:'A day without laughter is a day wasted.',
    author: 'Charlie Chaplin',
    img_url: 'http://1.bp.blogspot.com/_cFoTKZRHMqc/S7O5gOFXnkI/AAAAAAAAAa4/VsFR_kubbVo/s1600/2000peace.jpg',
  },



];

module.exports = quotes;
