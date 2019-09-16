'use strict';

const Inspiration = require('../models/inspiration/inspiration.js');
const inspiration = new Inspiration();

/**
 * Retrieves a random inspiration from the given user's inspiration library.
 *
 * @param {string} userId - A Slack user ID
 * @returns {Promise<object>} An inspiration object
 */
const getInspiration = userId => {
  return inspiration.get()
    .then(allInspiration => {
      const userInspiration = allInspiration.filter(inspiration => inspiration.user_id === userId);
      const randomIndex = Math.floor(Math.random() * userInspiration.length);
      return userInspiration[randomIndex];
    });
};

/**
 * Creates a new inspiration object associated with the given user.
 *
 * @param {string} userId - A Slack user ID
 * @param {string} newInspiration - The content for a new inspiration
 * @returns {Promise<object>} The new inspiration object
 */
const createInspiration = (userId, newInspiration) => {
  const inspirationObject = {
    user_id: userId,
    content: newInspiration,
  };
  return inspiration.create(inspirationObject);
};

/**
 * Checks if the given user owns the given inspiration, and if so, updates the
 * inspiration with the new content.
 *
 * @param {string} userId - A Slack user ID
 * @param {string} inspirationId - An inspiration ID
 * @param {object} newInspiration - The updated inspiration content
 * @returns {Promise<object>} The updated inspiration object
 * @throws Will throw an error if the user doesn't own the inspiration
 */
const updateInspiration = (userId, inspirationId, newInspiration) => {
  return inspiration.get(inspirationId)
    .then(results => {
      const ownerId = results[0].user_id;
      if(userId === ownerId) {
        return inspiration.update(inspirationId, {content: newInspiration});
      }else{
        throw Error('Permission denied');
      }
    });
};

/**
 * Checks if the given user owns the given inspiration, and if so, deletes the
 * inspiration from the database.
 * 
 * @param {string} userId - A Slack user ID
 * @param {string} inspirationId - An inspiration ID
 * @returns {Promise<object>} The deleted inspiration object
 * @throws Will throw an error if the user doesn't own the inspiration
 */
const deleteInspiration = (userId, inspirationId) => {
  return inspiration.get(inspirationId)
    .then(results => {
      const ownerId = results[0].user_id;
      if(userId === ownerId) {
        return inspiration.delete(inspirationId);
      }else{
        throw Error('Permission denied');
      }
    });
};

/**
 * Retrieves a random inspiration from the database.
 *
 * @returns {Promise<object>} An inspiration object
 */
const getAnyInspiration = () => {
  return inspiration.get()
    .then(allInspiration => {
      const randomIndex = Math.floor(Math.random() * allInspiration.length);
      return allInspiration[randomIndex];
    });
};

module.exports = {
  getInspiration,
  createInspiration,
  updateInspiration,
  deleteInspiration,
  getAnyInspiration,
};
