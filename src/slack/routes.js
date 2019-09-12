'use strict';

const express = require('express');
const router = express.Router();

const slackBot = require('./api.js');
const inspirationLibrary = require('../content/inspiration-library.js');

const instructions = require('./instructions.js');

/** This command is used for local testing with Ngrok and any callback function. */
router.post('/ngrok', handleInspireMe);

/** Slack command routes. Slack sends requests after slack commands. */

/**
 * @route POST /inspire-help
 * @returns {object} returns instruction for the app
 */
router.post('/inspire-help', handleInspireHelp);

/**
 * @route POST /inspire-me
 * @returns {string} 200 a status code means okay
 * @returns {object} user_id and message
 */
router.post('/inspire-me', handleInspireMe);

/**
 * @route POST /inspire-me-more
 * @returns {string} 200 a status code means okay
 */
router.post('/inspire-me-more', handleInspireMeMore);

/**
 * @route POST /inspire-me
 * @returns {string} 200 a status code means okay
 * @returns {object} saved content and its id
 */
router.post('/inspire-create', handleInspireCreate);

/**
 * @route POST /inspire-update
 * @returns {string} 200 a status code means okay
 * @returns {object} id and content of the updated data
 */
router.post('/inspire-update', handleInspireUpdate);

/**
 * @route POST /inspire-delete
 * @returns {string} 200 a status code means okay
 * @returns {object} id and the content of the deleted data
 */
router.post('/inspire-delete', handleInspireDelete);

/**
 * @route POST /inspire-admin
 * @returns {string} 200 a status code means okay
 */
router.post('/inspire-admin', handleInspireAdmin);

/**
 * @route POST /inspire-scheduled
 * @returns {string} 200 a status code means okay
 */
router.post('/inspire-scheduled', handleInspireScheduled);



/**
 *This function is a callback function to send the instruction of using *the app to the client.
 *
 * @param {object} request
 * @param {string} response
 * @returns {string} code 200 that means okay
 * @returns {string} instruction for the app
 */
function handleInspireHelp(request, response) {
  response.status(200).send(instructions);
}

/**
 *This function takes user_id from request and then send inspiration content and its id to the slackBot
 *
 * @param {object} request
 * @param {string} response
 * @returns {string} code 200 that means okay
 * @returns {object} user id and a message
 */
function handleInspireMe(request, response, next) {
  const userId = request.body.user_id;

  inspirationLibrary.getInspiration(userId)
    .then(inspiration => {
      const message = `(${inspiration._id})\n${inspiration.content}`;
      slackBot.sendMessage('inspirations', message);
      response.status(200).send();
    })
    .catch(next);

}

/**
 *This function takes in user_id from request and then create new *content and save it to the database
 *
 * @param {object} request
 * @param {string} response
 * @returns {string} code 200 that means okay
 * @returns {object} inspiration id and the saved content
 */
function handleInspireCreate(request, response, next) {
  const userId = request.body.user_id;
  const newContent = request.body.text;
  inspirationLibrary.createInspiration(userId, newContent)
    .then(inspiration => {
      return response.status(200)
        .send(`Inspiration ${inspiration._id} saved:\n${inspiration.content}`);
    })
    .catch(next);
}

/**
 *This function takes in user_id, inspirationId and a text, then update the content of the content with the inspirationId in the database
 *
 * @param {object} request
 * @param {string} response
 * @returns {string} code 200 that means okay
 * @returns {object} inspirationId and updated content
 */
function handleInspireUpdate(request, response, next) {
  const {user_id, text} = request.body;
  const spaceIndex = text.indexOf(' ');
  const inspirationId = text.substring(0, spaceIndex);
  const newContent = text.substring(spaceIndex + 1);
  inspirationLibrary.updateInspiration(user_id, inspirationId, newContent)
    .then(inspiration => {
      return response.status(200)
        .send(`Inspiration ${inspiration._id} updated:\n${inspiration.content}`);
    })
    .catch(next);
}

/**
 *This function takes in user id and inspirationId and then delete the *content with the inspirationId and return the deleted content and its id
 *
 * @param {object} request
 * @param {string} response
 * @returns {string} code 200 that means okay
 * @returns {object} user id and a message
 */
function handleInspireDelete(request, response, next) {
  const userId = request.body.user_id;
  const inspirationId = request.body.text;
  inspirationLibrary.deleteInspiration(userId, inspirationId)
    .then(inspiration => {
      return response.status(200)
        .send(`Inspiration deleted:\n${inspiration.content}`);
    })
    .catch(next);
}

/**
 *This function takes sends a random inspiration to the inspirations channel
 *
 * @param request
 * @param response
 */
function handleInspireScheduled(request, response) {

  inspirationLibrary.getAnyInspiration()
    .then(inspiration => {
      const message = `Rando inspiration of the moment! (${inspiration._id})\n${inspiration.content}`;
      return slackBot.sendMessage('inspirations', message);
    })
    .catch(console.error);

  return response.status(200).send();
}

/**
 *
 *
 * @param {object} request
 * @param {string} response
 * @returns {string} code 200 that means okay
 */
function handleInspireMeMore(request, response) {
  // TODO: Stretch Goal - /slack/inspire-me-more command
  response.status(200).send('(TODO) You are more inspired!');
}

/**
 *
 * @param {object} request
 * @param {string} response
 * @returns {string} code 200 that means okay
 */
function handleInspireAdmin(request, response) {
  // TODO: Stretch Goal - /slack/inspire-admin command
  response.status(200).send('(TODO) Admin command');
}


module.exports = router;
