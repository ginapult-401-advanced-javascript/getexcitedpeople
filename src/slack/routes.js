'use strict';

const express = require('express');
const router = express.Router();

const inspirationLibrary = require('../content/inspiration-library.js');

/** This command is used for local testing with Ngrok and any callback function. */
router.post('/ngrok', handleInspireMe);

/** These routes are our slack command routes. Slack sends requests after slack commands. */

router.post('/inspire-help', handleInspireHelp);
router.post('/inspire-me', handleInspireMe);
router.post('/inspire-me-more', handleInspireMeMore);
router.post('/inspire-create', handleInspireCreate);
router.post('/inspire-update', handleInspireUpdate);
router.post('/inspire-delete', handleInspireDelete);
router.post('/inspire-admin', handleInspireAdmin);

/**
 *
 * @param request
 * @param response
 */
function handleInspireHelp(request, response) {
  // TODO: /slack/inspire-help command
  response.status(200).send('(TODO) Sending help!');
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireMe(request, response) {
  const userId = request.body.user_id;
  inspirationLibrary.getInspiration(userId)
    .then(inspiration => {
      return response.status(200)
        .send(`(${inspiration._id})\n${inspiration.content}`);
    })
    .catch(console.error);
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
