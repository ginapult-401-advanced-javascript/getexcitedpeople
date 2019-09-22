'use strict';
/**
 * @module
 */

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
 * @route POST /inspire-scheduled
 * @returns {string} 200 a status code means okay
 */
router.post('/inspire-scheduled', handleInspireScheduled);


// Route Handlers

/**
 * This route handler simply sends usage instructions back to the Slack user
 * via the response.
 *
 * @param {object} request
 * @param {object} response
 */
function handleInspireHelp(request, response) {
  response.status(200).send(instructions);
}

/**
 * This route handler takes the Slack User ID from the request and sends
 * a random inspiration object from that user's library to the "inspirations"
 * channel in the bot's Slack workspace.
 *
 * @param {object} request
 * @param {object} response
 * @param {function} next
 * @returns {Promise}
 */
function handleInspireMe(request, response, next) {
  const userId = request.body.user_id;

  return inspirationLibrary.getInspiration(userId)
    .then(inspiration => {
      const message = `(${inspiration._id})\n${inspiration.content}`;
      return slackBot.sendMessage('inspirations', message);
    })
    .then(() => response.status(200).send())
    .catch(next);
}

/**
 * This route handler takes the Slack User ID and command text from the request
 * and creates a new inspiration in the user's library, saving it to the database.
 *
 * @param {object} request
 * @param {object} response
 * @param {function} next
 * @returns {Promise}
 */
function handleInspireCreate(request, response, next) {
  const userId = request.body.user_id;
  const newContent = request.body.text;

  return inspirationLibrary.createInspiration(userId, newContent)
    .then(inspiration => {
      const message = `Inspiration ${inspiration._id} saved:\n${inspiration.content}`;
      response.status(200).send(message);
    })
    .catch(next);
}

/**
 * This route handler takes the Slack User ID and command text from the request
 * and updates the inspiration with the matching ID in the user's library,
 * saving the updated object to the database.
 *
 * @param {object} request
 * @param {object} response
 * @param {function} next
 * @returns {Promise}
 */
function handleInspireUpdate(request, response, next) {
  const {user_id, text} = request.body;
  const spaceIndex = text.indexOf(' ');
  const inspirationId = text.substring(0, spaceIndex);
  const newContent = text.substring(spaceIndex + 1);

  return inspirationLibrary.updateInspiration(user_id, inspirationId, newContent)
    .then(inspiration => {
      const message = `Inspiration ${inspiration._id} updated:\n${inspiration.content}`;
      response.status(200).send(message);
    })
    .catch(next);
}

/**
 * This route handler takes the Slack User ID and command text from the request
 * and deletes the inspiration with the matching ID in the user's library from
 * the database.
 *
 * @param {object} request
 * @param {object} response
 * @param {function} next
 * @returns {Promise}
 */
function handleInspireDelete(request, response, next) {
  const userId = request.body.user_id;
  const inspirationId = request.body.text;

  return inspirationLibrary.deleteInspiration(userId, inspirationId)
    .then(inspiration => {
      const message = `Inspiration deleted:\n${inspiration.content}`;
      response.status(200).send(message);
    })
    .catch(next);
}

/**
 * This route handler grabs a random inspiration from the database and sends
 * it to the "inspirations" channel in the bot's Slack workspace.
 *
 * @param {object} request
 * @param {object} response
 * @param {function} next
 * @returns {Promise}
 */
function handleInspireScheduled(request, response, next) {
  return inspirationLibrary.getAnyInspiration()
    .then(inspiration => {
      const message = `Rando inspiration of the moment! (${inspiration._id})\n${inspiration.content}`;
      return slackBot.sendMessage('inspirations', message);
    })
    .then(() => response.status(200).send())
    .catch(next);
}

module.exports = router;
