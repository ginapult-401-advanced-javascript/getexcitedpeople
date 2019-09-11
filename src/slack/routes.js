'use strict';

const express = require('express');
const router = express.Router();

const slackBot = require('./api.js');
const inspirationLibrary = require('../content/inspiration-library.js');

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
 * @returns {object} returns instruction for the app
 */
router.post('/inspire-me', handleInspireMe);
router.post('/inspire-me-more', handleInspireMeMore);
router.post('/inspire-create', handleInspireCreate);
router.post('/inspire-update', handleInspireUpdate);
router.post('/inspire-delete', handleInspireDelete);
router.post('/inspire-admin', handleInspireAdmin);


function handleInspireHelp(request, response) {
  // TODO: /slack/inspire-help command
  response.status(200).send('(TODO) Sending help!');
}

/**
 * TODO: Remove this function once DMs are confirmed through deployment
 */
function handleDirectMessageSelf(request, response) {
  const userId = request.body.user_id;
  const message = request.body.text;
  slackBot.postMessageToChannel(userId, message)
    .then(() => {
      console.log(`Message sent to User: ${userId}`);
      response.status(200).send();
    })
    .catch(console.error);
}

/**
 *This function takes user_id from request and then send inspiration content and its id to the slackBot
 * 
 * @param request
 * @param response 
 */
function handleInspireMe(request, response) {
  const userId = request.body.user_id;

  inspirationLibrary.getInspiration(userId)
    .then(inspiration => {
      const message = `(${inspiration._id})\n${inspiration.content}`;
      slackBot.postMessageToChannel(userId, message);
    })
    .catch(console.error);

  return response.status(200).send();
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireCreate(request, response) {
  const userId = request.body.user_id;
  const newContent = request.body.text;
  inspirationLibrary.createInspiration(userId, newContent)
    .then(inspiration => {
      return response.status(200)
        .send(`Inspiration ${inspiration._id} saved:\n${inspiration.content}`);
    })
    .catch(console.error);
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireUpdate(request, response) {
  const {user_id, text} = request.body;
  const spaceIndex = text.indexOf(' ');
  const inspirationId = text.substring(0, spaceIndex);
  const newContent = text.substring(spaceIndex + 1);
  inspirationLibrary.updateInspiration(user_id, inspirationId, newContent)
    .then(inspiration => {
      return response.status(200)
        .send(`Inspiration ${inspiration._id} updated:\n${inspiration.content}`);
    })
    .catch(console.error);
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireDelete(request, response) {
  const userId = request.body.user_id;
  const inspirationId = request.body.text;
  inspirationLibrary.deleteInspiration(userId, inspirationId)
    .then(inspiration => {
      return response.status(200)
        .send(`Inspiration ${inspiration._id} deleted:\n${inspiration.content}`);
    })
    .catch(console.error);
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireMeMore(request, response) {
  // TODO: Stretch Goal - /slack/inspire-me-more command
  response.status(200).send('(TODO) You are more inspired!');
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireAdmin(request, response) {
  // TODO: Stretch Goal - /slack/inspire-admin command
  response.status(200).send('(TODO) Admin command');
}


module.exports = router;
