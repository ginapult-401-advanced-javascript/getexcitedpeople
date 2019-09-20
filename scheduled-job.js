'use strict';

const superagent = require('superagent');

function sendScheduledInspiration() {
  return superagent.post('https://get-excited-people.herokuapp.com/slack/inspire-scheduled')
    .then (response => {
      console.log(response.status);
    })
    .catch(console.error);
}

sendScheduledInspiration();
