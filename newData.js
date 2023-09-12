// const dataArray = []

// function recreate(category, oldDescription, newDescription) {

//   const oldCategoryArray = oldDescription[category];
//   const newCategoryArray = newDescription[category]

//   newCategoryArray.forEach(string => {
//     const data = string.split(":");

//     const isOld = oldCategoryArray.find(c => c.name === data[0]);

//     if(isOld) {

//       oldDescription[category].find(c => c.name === data[0]).description = data[1];

//     }

//   })

//   return console.log(JSON.stringify(oldDescription, null, 2));


// }


// recreate('Ship', {
//   "Ship": [
//     {
//       "name": "Affection",
//       "aliases": [
//         "aff"
//       ],
//       "description": "Shows the number of interactions between two users",
//       "usage": "emt affection [user] (second user)"
//     },
//     {
//       "name": "Date",
//       "aliases": [],
//       "description": "Date a user"
//     },
//     {
//       "name": "Divorce",
//       "aliases": [],
//       "description": "Divorce a user"
//     },
//     {
//       "name": "Marry",
//       "aliases": [
//         "marriage"
//       ],
//       "description": "Marry a user"
//     },
//     {
//       "name": "Match",
//       "aliases": [],
//       "description": "Match two users"
//     }
//   ],
//   "Misc": [
//     {
//       "name": "Addgif",
//       "aliases": [
//         "ag"
//       ],
//       "description": "Add a gif to your personal gif list",
//       "usage": "emt addgif [gif]",
//       "position": 1
//     },
//     {
//       "name": "Gifs",
//       "aliases": [],
//       "description": "Check your personal list of Gifs",
//       "usage": "emt gifs",
//       "position": 1
//     },
//     {
//       "name": "Invite",
//       "aliases": [],
//       "description": "Provides Emilia-tan's invite link",
//       "usage": "emt invite",
//       "position": 1
//     },
//     {
//       "name": "Support",
//       "aliases": [],
//       "description": "Provides the invite link to the support server",
//       "usage": "emt support",
//       "position": 2
//     },
//     {
//       "name": "Feedback",
//       "aliases": [],
//       "description": "Leave your feedback, suggestions or reports so that they can be reviewed.\nTrying to troll or spam may result in permanent ban from using Emilia-tan!",
//       "usage": "emt feedback [feedback]",
//       "position": 3
//     }
//   ]
// }, {
//   "Moderation": [
//     "Purge: Deletes messages in the chat. Max 1000 messages, not older than 14 days.",
//     "Mute: Classic mute command using a 'Muted' role.",
//     "Unmute: Unmutes a member.",
//     "Timeout: Times out a member for a duration.",
//     "Untime: Removes a member's timeout.",
//     "Kick: Kicks a member from the guild.",
//     "Ban: Bans a member, optionally with an automatic unban.",
//     "Unban: Unbans a user.",
//     "Banlist: Lists banned members.",
//     "Softban: Instantly bans and unban with message deletion.",
//     "Createrole: Creates a new role.",
//     "Roleadd: Adds a role to a member.",
//     "Roleremove: Removes a role from a member.",
//     "Slowmode: Enables or disables slow mode for a channel.",
//     "Welcome: Custom welcome messages for new members.",
//     "Disable: Disables a command or category.",
//     "Erase: Deletes and recreates a channel.",
//     "Autorole: Automatically assigns roles to new members.",
//     "Selfrole: Configurable self-assignable roles.",
//     "Logs: Tracks various server events."
//   ],
//   "Utility": [
//     "Avatar: Checks a member's avatar.",
//     "Banner: Checks a member's banner.",
//     "Userinfo: Displays member information.",
//     "Serverinfo: Displays server information.",
//     "Emote: Fetches previously sent emotes and displays information about them.",
//     "Emotes: Displays all the guild's emotes.",
//     "Emotecreate: Create an emote from an image or a message.",
//     "Sticker: Searches for stickers and returns an image.",
//     "Stickercreate: Create a sticker from an image or a message.",
//     "Roles: Provides a list with all the roles in the guild.",
//     "Roleinfo: Provides information about a role.",
//     "Define: Check the definition of a word.",
//     "Remindme: Sets a reminder and receives a DM.",
//     "Reminders: Displays a list of your reminders.",
//     "Badges: Shows the number of badges in a server.",
//     "F: Pay respect to something or someone.",
//     "Translate: Translate text to another language.",
//     "Snipe: Shows the last deleted message from a channel.",
//     "Stats: Displays Emilia-tan's stats.",
//     "Ping: Shows Emilia-tan's ping.",
//     "Help: Displays short explanations for all the commands currently available."
//   ],
//   "Interactions": [
//     "Hug: Hug a member!",
//     "Kiss: Kiss a member! 💜",
//     "Pat: Pat a member!",
//     "Chop: Headchop a member!",
//     "Cuddle: Cuddle with a member. :3",
//     "Nom: Nom a member...you monster.",
//     "Poke: Poke a user!",
//     "Tickle: Tickle a member...why would you do such atrocity?",
//     "Bully: Bully a member! All on you.",
//     "Slap: Slap the stupidity out of someone.",
//     "Kill: Kill a member! I am not responsible whatsoever in these murders.",
//     "Disgust: Express your disgust.",
//     "Punch: Punch a member! I'll record it.",
//     "Boot: Shove a boot into their face.",
//     "Cry: ...Cry, I suppose.",
//     "Greet: Greet a member because you're a nice human being.",
//     "Shrug: Shrug. Show how you didn't care."
//   ],
//   "Music": [
//     "Play: Play a song.",
//     "Playnext: Adds a song to the top of the queue.",
//     "Now: Check the song that is currently playing.",
//     "Pause: Pauses the current song.",
//     "Resume: Resume a paused song.",
//     "Skip: Skip to the next song in the queue.",
//     "Back: Plays the previous song in the queue.",
//     "Loop: Loops the current song or the queue.",
//     "Shuffle: Shuffle the queued songs.",
//     "Queue: Shows all the songs currently queued.",
//     "Jump: Jumps to a song in the queue.",
//     "Duplicates: Removes all the duplicate songs from the queue.",
//     "Lyrics: Searches for a song's lyrics.",
//     "Revive: Restores the last Queue.",
//     "Remove: Removes a song from the queue.",
//     "Clear: Removes all the songs from the queue.",
//     "Seek: Seek a specific time in a song!",
//     "Volume: Control the volume of the song.",
//     "Search: Search for a song.",
//     "Stop: Stops the player and disconnects it from the voice channel."
//   ],
//   "GameCommands": [
//     "Balance: Check a User's Balance.",
//     "Blackjack: Play blackjack and waste your money.",
//     "Buy: Buy an item from the Shop!",
//     "Daily: Claim your daily bonus.",
//     "Deposit: Deposit your money in your bank.",
//     "Gift: Gift money to a User!",
//     "Inventory: Check your Inventory.",
//     "Leaderboard: Check the leaderboard!",
//     "Pay: Pay another User!",
//     "Profile: Check your Profile!",
//     "Rob: Attempt to rob a User!",
//     "Slots: Waste your money on slots.",
//     "Withdraw: Withdraw money from your bank!"
//   ]
// })

