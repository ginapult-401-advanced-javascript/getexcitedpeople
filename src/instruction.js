const instruction1 = 'When entering /inspire_me command in the textarea, it will send a random inspiring content pulling from the database of all the inspiring contents that you create to the inspirations channel.';

const instruction2 = 'When entering /inspire_help command in the textarea, it will show you the instruction using this app in the inspirations channel.';

const instruction3 = 'When entering /inspire_create command in the textarea, you also need to enter the new inspiring content to create a new content into your database. (example: /inspire_create this is something I want to create)';

const instruction4 = 'When entering /inspire_update command in the textarea, you also need to enter the id of the content that you want to update and the update content.(example: /inspire_update 1 this is something to be updated)';

const instruction5 = 'When entering /inspre_delete command in the textarea, you also need to enter the id of the content that you want to delete from your database. (example: /inspre_delete 1)';

const inspirations = `${instruction1} \n ${instruction2} \n ${instruction3} \n ${instruction4} \n ${instruction5}`;

module.exports = inspirations;
