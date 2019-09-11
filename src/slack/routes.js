'use strict';

const express = require('express');
const router = express.Router();

const contentLibrary = require('../content/content-library.js');

/** This command is used for local testing with Ngrok and any callback function. */
router.post('/slack/ngrok', handleInspireMe);
// TODO: You use /slack for all of these routes, consider setting '/slack' as the default route for this module.
router.post('/slack/echo', handleEcho);
// Is there a reason that these files are removed from the ones above?
router.post('/slack/inspire-help', handleInspireHelp);
router.post('/slack/inspire-me', handleInspireMe);
router.post('/slack/inspire-me-more', handleInspireMeMore);
router.post('/slack/inspire-create', handleInspireCreate);
router.post('/slack/inspire-update', handleInspireUpdate);
router.post('/slack/inspire-delete', handleInspireDelete);
router.post('/slack/inspire-admin', handleInspireAdmin);

/**
 *
 * @param request
 * @param response
 */
function handleEcho(request, response) {
  const message = request.body.text;
  response.status(200).send(message);
}

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
  TODO: Refactor the one liners marked with an asterisk,
  They're just a little too long and will be easier to maintain as a block.
*/

/**
 *
 * @param request
 * @param response
 */
function handleInspireMe(request, response) {
  const userId = request.body.user_id;
  contentLibrary.getInspiration(userId)
    .then(inspiration => response.status(200).send(`(${inspiration._id})\n${inspiration.content}`)) //*
    .catch(console.error);
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireMeMore(request, response) {
  // TODO: /slack/inspire-me-more command
  response.status(200).send('(TODO) You are more inspired!');
}

/**
 *
 * @param request
 * @param response
 */
function handleInspireCreate(request, response) {
  const userId = request.body.user_id;
  const newContent = request.body.text;
  contentLibrary.createInspiration(userId, newContent)
    .then(inspiration => response.status(200).send(`Inspiration ${inspiration._id} saved:\n${inspiration.content}`)) //*
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
  contentLibrary.updateInspiration(user_id, inspirationId, newContent)
    .then(inspiration => response.status(200).send(`Inspiration ${inspiration._id} updated:\n${inspiration.content}`)) //*
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
  contentLibrary.deleteInspiration(userId, inspirationId)
    .then(inspiration => response.status(200).send(`Inspiration ${inspiration._id} deleted:\n${inspiration.content}`)) //*
    .catch(console.error);
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
