'use strict';

const Inspiration = require('../models/inspiration/inspiration.js');
const inspiration = new Inspiration();

/**
 *
 * @param {string} userId -- takes in the Slack user id
 * pulls in all of the inspiration content from db, returns it to be filtered for a random one (1)
 *
 */
const getInspiration = userId => {
  return inspiration.get()
    .then(allInspiration => {
      const userInspiration = allInspiration.filter(inspiration => inspiration.user_id === userId);
      const randomIndex = Math.floor(Math.random() * userInspiration.length);
      return userInspiration[randomIndex];
    })
    .catch(console.error);
};

/**
 *
 * @param {string} userId -- takes in the Slack user id
 * @param {object} newInspiration -- goes to our inspiration model and 'saves' to our inspiration db
 *
 */
const createInspiration = (userId, newInspiration) => {
  const inspirationObject = {
    user_id: userId,
    content: newInspiration,
  };
  return inspiration.create(inspirationObject);
};

/**
 *
 * @param {string} userId -- takes in the Slack user id
 * @param {object} inspirationId -- the db identification number
 * @param {object} newInspiration -- updated inspiration content
 *
 */
const updateInspiration = (userId, inspirationId, newInspiration) => {
  return inspiration.get(inspirationId)
    .then(results =>{
      const ownerId = results[0].user_id;
      if(userId === ownerId) {
        return inspiration.update(inspirationId, {content: newInspiration});
      }else{
        throw Error('Permission denied');
      }
    });
};

/**
 * 
 * @param {string} userId -- takes in slack user id
 * @param {string} inspirationId -- id of the inspiration object from mongo
 * deletes selected inspirationId
 */
const deleteInspiration = (userId, inspirationId) => {
  return inspiration.get(inspirationId)
    .then(results =>{
      const ownerId = results[0].user_id;
      if(userId === ownerId) {
        return inspiration.delete(inspirationId);
      }else{
        throw Error('Permission denied');
      }
    });
};

/**
 * generates and then returns a random inspriation object from the db
 */
const getAnyInspiration = () => {
  return inspiration.get()
    .then(allInspiration => {
      const randomIndex = Math.floor(Math.random() * allInspiration.length);
      return allInspiration[randomIndex];
    })
    .catch(console.error);
};

module.exports = {
  getInspiration,
  createInspiration,
  updateInspiration,
  deleteInspiration,
  getAnyInspiration,
};
