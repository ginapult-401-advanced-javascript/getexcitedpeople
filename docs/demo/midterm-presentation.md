## Midterm Project Demo

#### (Prep)
- Tab open with image to 'create' pulled up
- Clear terminal
- Open Slack to channel #inspirations

---

### 1) Scheduled morning inspiration
- Scheduled rando inspiration
- Generated using Heroku scheduler
  - Script calls function that triggers Slack API call
  - Bot posts message in channel
- Every day at 9am
- Pulled from all inspirations, uploaded by any user

### 2) Prompt an inspiration
- `/inspire_me`
- User's random personal inspiration from individual library

### 3) Create a new inspiration
- [Switch to browser, ready with an inspiration to add to library]
- [Right click -> Copy image address]
- `/inspire_create [URL]`

### 4) Delete an undesired inspiration
- `/inspire_me` until an undesirable appears
- I don't like it. How do I delete it?
  - `/inspire_help`
- [Copy inspiration ID]
- `/inspire_delete [ID]`

### 5) Update an inspiration
- `/inspire_create You deserve greatness... because YOU ARE GRAPENESS!`
- Oops!
- `/inspire_update [ID] You deserve greatness... because YOU ARE GREATNESS!`

### 6) Crisp memes

### 7) Transition to tests
- Tab to terminal
- `npm run test`
- Increase font size

[Back to presentation]