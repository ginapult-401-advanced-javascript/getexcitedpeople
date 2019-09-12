const instructions = 
`Enter the "/inspire_me" command into the text area to retrieve a random inspiration  from your inspiration library and post it to the inspirations channel. 

Enter the "/inspire_help" command into the text area to learn how to use the slack commands in the inspirations channel.

Enter the "/inspire_create" command into the text area followed by a space and your new inspiring content to save new inspirations to your inspiration library. 
(example: /inspire_create Keep going! You can do it!)

Enter the "/inspire_update" command into the text area followed by a space and the id of the content that you want to update, followed by a space and the new content.
(example: /inspire_update 5d796e03a773690017333032 Keep going! You are the best!)

Enter the "/inspire_delete" command into the text area followed by a space and the id of the content that you want to delete from your library. 
(example: /inspire_delete 5d796e03a773690017333032)`;

module.exports = instructions;
