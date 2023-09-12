function getCommandCategory(category) {

const commands = {
    "Moderation": [
      {
        "name": "Purge",
        "aliases": [
          "clean"
        ],
        "description": " Deletes messages in the chat. Max 1000 messages, not older than 14 days.",
        "usage": "emt clean [option] (amount)\n\nOptions:\n**<@ID>:** [ Delete messages sent by a specific user. ]\n  **USERS:** [ Delete group of messages excluding bots. ]\n  **BOT:** [ Delete messages sent by bots. ]\n  **MATCH:** [ Delete messages containing a specified word. ]\n  **EMOTES:** [ Delete messages containing emotes. ]\n  **STICKERS:** [ Delete messages containing stickers.]\n  **IMAGE:** [ Delete messages containing images. ]\n  **EMBEDS:** [ Delete messages containing embeds. ]\n  **MENTIONS:** [ Delete messages containing mentions. ]",
        "position": 1,
        "permissions": "8192"
      },
      {
        "name": "Mute",
        "aliases": [],
        "description": " Classic mute command using a 'Muted' role.",
        "usage": "emt mute [member] (time) (reason)",
        "position": 2,
        "permissions": "268435456"
      },
      {
        "name": "Unmute",
        "aliases": [],
        "description": " Unmutes a member.",
        "usage": "emt unmute [member]",
        "position": 3,
        "permissions": "268435456"
      },
      {
        "name": "Timeout",
        "aliases": [
          "to"
        ],
        "description": " Times out a member for a duration.",
        "usage": "emt timeout [member] [time] (reason)",
        "position": 4,
        "permissions": "1099511627776"
      },
      {
        "name": "Untime",
        "aliases": [
          "untimeout",
          "ut",
          "uto"
        ],
        "description": " Removes a member's timeout.",
        "usage": "emt untime [member]",
        "position": 5,
        "permissions": "1099511627776"
      },
      {
        "name": "Kick",
        "aliases": [],
        "description": " Kicks a member from the guild.",
        "usage": "emt kick [member] (reason)",
        "position": 6,
        "permissions": "2"
      },
      {
        "name": "Ban",
        "aliases": [],
        "description": " Bans a member, optionally with an automatic unban.",
        "usage": "emt ban [member] (time) (reason)",
        "position": 7,
        "permissions": "4"
      },
      {
        "name": "Unban",
        "aliases": [],
        "description": " Unbans a user.",
        "usage": "emt unban [user tag]\nemt unban [user ID]",
        "position": 8,
        "permissions": "4"
      },
      {
        "name": "Banlist",
        "aliases": [
          "bl"
        ],
        "description": " Lists banned members.",
        "usage": "emt banlist",
        "position": 9,
        "permissions": "4"
      },
      {
        "name": "Softban",
        "aliases": [],
        "description": " Instantly bans and unban with message deletion.",
        "usage": "emt softban [member] (reason)",
        "position": 10,
        "permissions": "4"
      },
      {
        "name": "Createrole",
        "aliases": [
          "rolecreate",
          "cr",
          "rc"
        ],
        "description": " Creates a new role.",
        "usage": "emt createrole [Hex Color] [Name]",
        "position": 11,
        "permissions": "268435456"
      },
      {
        "name": "Roleadd",
        "aliases": [
          "addrole",
          "ra"
        ],
        "description": " Adds a role to a member.",
        "usage": "emt roleadd [member] [role name]\nemt roleadd [member] [role ID]",
        "position": 12,
        "permissions": "268435456"
      },
      {
        "name": "Roleremove",
        "aliases": [
          "removerole",
          "rr"
        ],
        "description": " Removes a role from a member.",
        "usage": "emt roleremove [member] [role name]\nemt roleremove [member] [role ID]",
        "position": 13,
        "permissions": "268435456"
      },
      {
        "name": "Slowmode",
        "aliases": [],
        "description": " Enables or disables slow mode for a channel.",
        "usage": "emt slowmode [channel] [time]\nemt slowmode off [channel]",
        "position": 14,
        "permissions": "8192"
      },
      {
        "name": "Welcome",
        "aliases": [
          "welcomer"
        ],
        "description": " Custom welcome messages for new members.",
        "usage": "emt welcome\nemt welcome test\nemt welcome enable [channel]\nemt welcome disable",
        "position": 15,
        "permissions": "8"
      },
      {
        "name": "Disable",
        "aliases": [],
        "description": " Disables a command or category.",
        "usage": "emt disable [command name]",
        "position": 16,
        "permissions": "8"
      },
      {
        "name": "Erase",
        "aliases": [],
        "description": " Deletes and recreates a channel.",
        "usage": "emt erase [#channel]",
        "position": 16,
        "permissions": "8"
      },
      {
        "name": "Autorole",
        "aliases": [
          "ar"
        ],
        "description": " Automatically assigns roles to new members.",
        "usage": "emt autorole [role]\nemt autorole remove [role]\nemt autorole enable\nemt autorole disable",
        "position": 17,
        "permissions": "8,268435456"
      },
      {
        "name": "Selfrole",
        "aliases": [
          "sr"
        ],
        "description": " Configurable self-assignable roles.",
        "usage": "emt selfrole [role]\nemt selfrole remove [role]\nemt selfrole enable\nemt selfrole disable",
        "position": 17,
        "permissions": "8,268435456"
      },
      {
        "name": "Logs",
        "aliases": [
          "log"
        ],
        "description": " Tracks various server events.",
        "usage": "emt logs\nemt logs settings\nemt logs enable [#channel]\nemt logs disable",
        "position": 18,
        "permissions": "8"
      }
    ],
    "Utility": [
      {
        "name": "Avatar",
        "aliases": [
          "av",
          "pfp",
          "who"
        ],
        "description": " Checks a member's avatar.",
        "usage": "emt avatar (member)",
        "position": 1
      },
      {
        "name": "Banner",
        "aliases": [
          "ba"
        ],
        "description": " Checks a member's banner.",
        "usage": "emt banner (member)",
        "position": 2
      },
      {
        "name": "Userinfo",
        "aliases": [
          "ui",
          "who",
          "whois"
        ],
        "description": " Displays member information.",
        "usage": "emt userinfo (user)",
        "position": 3
      },
      {
        "name": "Userstats",
        "aliases": [
          "us"
        ],
        "description": "Wait 5 minutes to get some basic stats on a user",
        "usage": "emt userstats (user)",
        "position": 3
      },
      {
        "name": "Serverinfo",
        "aliases": [
          "si",
          "sv",
          "server"
        ],
        "description": " Displays server information.",
        "usage": "emt serverinfo",
        "position": 4
      },
      {
        "name": "Emote",
        "aliases": [
          "emoji"
        ],
        "description": " Fetches previously sent emotes and displays information about them.",
        "usage": "emt emote",
        "position": 5
      },
      {
        "name": "Emotes",
        "aliases": [
          "emojis"
        ],
        "description": " Displays all the guild's emotes.",
        "usage": "emt emotes",
        "position": 6
      },
      {
        "name": "Emotecreate",
        "aliases": [
          "createemote",
          "ce",
          "ec",
          "addemote",
          "ae"
        ],
        "description": " Create an emote from an image or a message.",
        "usage": "emt emotecreate [name] [emoji]\nemt emotecreate [image] [file]\nemt emotecreate [name] [reply to a message that has an emote or image]",
        "position": 7,
        "permissions": "1073741824"
      },
      {
        "name": "Sticker",
        "aliases": [
          "stickers"
        ],
        "description": " Searches for stickers and returns an image.",
        "usage": "emt sticker (sticker)",
        "position": 7
      },
      {
        "name": "Stickercreate",
        "aliases": [
          "createsticker",
          "cs",
          "sc",
          "addsticker",
          "as"
        ],
        "description": " Create a sticker from an image or a message.",
        "usage": "emt stickercreate [name] [sticker]",
        "position": 8,
        "permissions": "1073741824"
      },
      {
        "name": "Roles",
        "aliases": [],
        "description": " Provides a list with all the roles in the guild.",
        "usage": "emt roles",
        "position": 9
      },
      {
        "name": "Roleinfo",
        "aliases": [
          "inforole",
          "ri"
        ],
        "description": " Provides information about a role.",
        "usage": "emt roleinfo [role]",
        "position": 10
      },
      {
        "name": "Define",
        "aliases": [
          "def"
        ],
        "description": " Check the definition of a word.",
        "usage": "emt define [word]",
        "position": 12
      },
      {
        "name": "Remindme",
        "aliases": [
          "rm"
        ],
        "description": " Sets a reminder and receives a DM.",
        "usage": "emt remindme [time] [reminder]",
        "position": 13
      },
      {
        "name": "Reminders",
        "aliases": [
          "reminder"
        ],
        "description": " Displays a list of your reminders.",
        "usage": "emt reminders",
        "position": 14
      },
      {
        "name": "Badges",
        "aliases": [],
        "description": " Shows the number of badges in a server.",
        "usage": "emt badges",
        "position": 15
      },
      {
        "name": "F",
        "aliases": [],
        "description": " Pay respect to something or someone.",
        "usage": "emt f [argument]",
        "position": 16
      },
      {
        "name": "Translate",
        "aliases": [
          "tr"
        ],
        "description": " Translate text to another language.",
        "usage": "emt translate [language] [text]",
        "position": 17
      },
      {
        "name": "Snipe",
        "aliases": [],
        "description": " Shows the last deleted message from a channel.",
        "usage": "emt snipe",
        "position": 18
      },
      {
        "name": "Stats",
        "aliases": [],
        "description": " Displays Emilia-tan's stats.",
        "usage": "emt stats",
        "position": 19
      },
      {
        "name": "Ping",
        "aliases": [],
        "description": " Shows Emilia-tan's ping.",
        "usage": "emt ping",
        "position": 20
      },
      {
        "name": "Help",
        "aliases": [
          "h",
          "ohmydearqueenibegoftheehelpmyignorantself"
        ],
        "description": " Displays short explanations for all the commands currently available.",
        "usage": "emt help | emt help (command name) | emt help (category)",
        "position": 21
      }
    ],
    "Interactions": [
      {
        "name": "Hug",
        "aliases": [],
        "description": " Hug a member!",
        "usage": "emt hug [member]",
        "position": 1
      },
      {
        "name": "Kiss",
        "aliases": [],
        "description": " Kiss a member! 💜",
        "usage": "emt kiss [member]",
        "position": 2
      },
      {
        "name": "Pat",
        "aliases": [
          "pet",
          "headpat"
        ],
        "description": " Pat a member!",
        "usage": "emt pat [member]",
        "position": 3
      },
      {
        "name": "Chop",
        "aliases": [
          "headchop"
        ],
        "description": " Headchop a member!",
        "usage": "emt chop [member]",
        "position": 4
      },
      {
        "name": "Cuddle",
        "aliases": [],
        "description": " Cuddle with a member. ",
        "usage": "emt cuddle [member]",
        "position": 5
      },
      {
        "name": "Nom",
        "aliases": [
          "bite"
        ],
        "description": " Nom a member...you monster.",
        "usage": "emt nom [member]",
        "position": 6
      },
      {
        "name": "Poke",
        "aliases": [
          "boop"
        ],
        "description": " Poke a user!",
        "usage": "emt poke [member]",
        "position": 7
      },
      {
        "name": "Tickle",
        "aliases": [],
        "description": " Tickle a member...why would you do such atrocity?",
        "usage": "emt tickle [member]",
        "position": 8
      },
      {
        "name": "Bully",
        "aliases": [],
        "description": " Bully a member! All on you.",
        "usage": "emt bully [member]",
        "position": 9
      },
      {
        "name": "Slap",
        "aliases": [],
        "description": " Slap the stupidity out of someone.",
        "usage": "emt slap [member]",
        "position": 10
      },
      {
        "name": "Kill",
        "aliases": [],
        "description": " Kill a member! I am not responsible whatsoever in these murders.",
        "usage": "emt kill [member]",
        "position": 11
      },
      {
        "name": "Disgust",
        "aliases": [],
        "description": " Express your disgust.",
        "usage": "emt disgust (member)",
        "position": 12
      },
      {
        "name": "Punch",
        "aliases": [],
        "description": " Punch a member! I'll record it.",
        "usage": "emt punch [member]",
        "position": 12
      },
      {
        "name": "Boot",
        "aliases": [],
        "description": " Shove a boot into their face.",
        "usage": "emt boot [member]",
        "position": 13
      },
      {
        "name": "Cry",
        "aliases": [],
        "description": " ...Cry, I suppose.",
        "usage": "emt cry (member)",
        "position": 13
      },
      {
        "name": "Greet",
        "aliases": [],
        "description": " Greet a member because you're a nice human being.",
        "usage": "emt greet [member]"
      },
      {
        "name": "Shrug",
        "aliases": [],
        "description": " Shrug. Show how you didn't care.",
        "usage": "emt shrug [member]",
        "position": 14
      }
    ],
    "Music": [
      {
        "name": "Play",
        "aliases": [
          "p",
          "add"
        ],
        "description": "Play a song.",
        "usage": "emt play [song]",
        "position": 1
      },
      {
        "name": "Playnext",
        "aliases": [
          "pn",
          "pnext",
          "nextsong"
        ],
        "description": "Adds a song to the top of the queue.",
        "usage": "emt playnext [song]",
        "position": 2
      },
      {
        "name": "Now",
        "aliases": [
          "nowplaying",
          "np",
          "current",
          "currentlyplaying",
          "cp"
        ],
        "description": "Check the song that is currently playing",
        "usage": "emt now",
        "position": 3
      },
      {
        "name": "Pause",
        "aliases": [
          "pa"
        ],
        "description": "Pauses the current song.",
        "usage": "emt pause",
        "position": 4
      },
      {
        "name": "Resume",
        "aliases": [
          "re"
        ],
        "description": "Resume a paused song.",
        "usage": "emt resume",
        "position": 5
      },
      {
        "name": "Skip",
        "aliases": [
          "sk",
          "next"
        ],
        "description": "Skip to the next song in the queue",
        "usage": "emt skip",
        "position": 6
      },
      {
        "name": "Back",
        "aliases": [
          "ba",
          "previous",
          "prev"
        ],
        "description": "Plays the previous song in the queue.",
        "usage": "emt back",
        "position": 7
      },
      {
        "name": "Loop",
        "aliases": [
          "l"
        ],
        "description": "Loops the current song or the queue",
        "usage": "emt loop [track]\nemt loop [queue]\nemt loop [off]",
        "position": 8
      },
      {
        "name": "Shuffle",
        "aliases": [
          "sh"
        ],
        "description": "Shuffle the queued songs",
        "usage": "emt shuffle",
        "position": 9
      },
      {
        "name": "Queue",
        "aliases": [
          "q"
        ],
        "description": "Shows all the songs currently queued.",
        "usage": "emt queue",
        "position": 10
      },
      {
        "name": "Jump",
        "aliases": [
          "j"
        ],
        "description": "Jumps to a song in the queue",
        "usage": "emt jump",
        "position": 11
      },
      {
        "name": "Duplicates",
        "aliases": [
          "dup"
        ],
        "description": "Removes all the duplicate songs from the Queue",
        "usage": "emt duplicates",
        "position": 12
      },
      {
        "name": "Lyrics",
        "aliases": [
          "ly"
        ],
        "description": "Searches for a song's lyrics.",
        "usage": "emt lyrics",
        "position": 13
      },
      {
        "name": "Revive",
        "aliases": [
          "rev"
        ],
        "description": "Restores the last Queue.",
        "usage": "emt revive",
        "position": 14
      },
      {
        "name": "Remove",
        "aliases": [
          "r"
        ],
        "description": "Removes a song from the queue",
        "usage": "emt remove [index]\nemt remove [song title]",
        "position": 15
      },
      {
        "name": "Clear",
        "aliases": [
          "c"
        ],
        "description": "Removes all the songs from the queue",
        "usage": "emt clear",
        "position": 16
      },
      {
        "name": "Seek",
        "aliases": [],
        "description": "Seek a specific time in a song!",
        "usage": "emt seek [time]",
        "position": 17
      },
      {
        "name": "Volume",
        "aliases": [
          "v",
          "vol"
        ],
        "description": "Control the volume of the song",
        "usage": "emt volume [number]",
        "position": 18
      },
      {
        "name": "Search",
        "aliases": [],
        "description": "Search for a song.",
        "usage": "emt search [song]",
        "position": 19
      },
      {
        "name": "Stop",
        "aliases": [
          "s",
          "dc",
          "disconnect",
          "leave"
        ],
        "description": "Stops the player and disconnects it from the voice channel",
        "usage": "emt stop",
        "position": 20
      }
    ],
    "GameCommands": [
      {
        "name": "Balance",
        "aliases": [
          "bal"
        ],
        "description": "Check a User's Balance"
      },
      {
        "name": "Blackjack",
        "aliases": [
          "bj"
        ],
        "description": "Play blackjack and waste your money"
      },
      {
        "name": "Buy",
        "aliases": [],
        "description": "Buy items from the shop (work in progress)"
      },
      {
        "name": "Cut",
        "description": "Cut trees cuz why not"
      },
      {
        "name": "Daily",
        "description": "Daily Money, yay!"
      },
      {
        "name": "Deposit",
        "aliases": [
          "dep"
        ],
        "description": "Deposit money to your [empty] bank account."
      },
      {
        "name": "Fish",
        "description": "Fishing command because of course"
      },
      {
        "name": "Give",
        "description": "Share your wealth"
      },
      {
        "name": "Hunt",
        "description": "Hunt for animals such as yourself"
      },
      {
        "name": "Inventory",
        "aliases": [
          "inv"
        ],
        "description": "Check a User's inventory"
      },
      {
        "name": "Monthly",
        "description": "Monthly Money, ooo!"
      },
      {
        "name": "Rob",
        "aliases": [
          "steal"
        ],
        "description": "Rob people like they robbed my happiness away"
      },
      {
        "name": "Shop",
        "aliases": [],
        "description": "Buy items from the shop"
      },
      {
        "name": "Snakeeyes",
        "aliases": [
          "se"
        ],
        "description": "Play snakeeyes cause you have nothing else to do"
      },
      {
        "name": "Task",
        "aliases": [],
        "description": "Complete a daily task for a reward"
      },
      {
        "name": "Threecards",
        "aliases": [
          "tc"
        ],
        "description": "Play threecards. That's it."
      },
      {
        "name": "Withdraw",
        "aliases": [
          "with"
        ],
        "description": "Withdraw money from your [empty] bank account."
      },
      {
        "name": "Work",
        "description": "Work. Work. Work."
      }
    ],
    "Ship": [
      {
        "name": "Affection",
        "aliases": [
          "aff"
        ],
        "description": "Shows the number of interactions between two users",
        "usage": "emt affection [user] (second user)"
      },
      {
        "name": "Date",
        "aliases": [],
        "description": "Date a user"
      },
      {
        "name": "Divorce",
        "aliases": [],
        "description": "Divorce a user"
      },
      {
        "name": "Marry",
        "aliases": [
          "marriage"
        ],
        "description": "Marry a user"
      },
      {
        "name": "Match",
        "aliases": [],
        "description": "Match two users"
      }
    ],
    "Misc": [
      {
        "name": "Addgif",
        "aliases": [
          "ag"
        ],
        "description": "Add a gif to your personal gif list",
        "usage": "emt addgif [gif]",
        "position": 1
      },
      {
        "name": "Gifs",
        "aliases": [],
        "description": "Check your personal list of Gifs",
        "usage": "emt gifs",
        "position": 1
      },
      {
        "name": "Invite",
        "aliases": [],
        "description": "Provides Emilia-tan's invite link",
        "usage": "emt invite",
        "position": 1
      },
      {
        "name": "Support",
        "aliases": [],
        "description": "Provides the invite link to the support server",
        "usage": "emt support",
        "position": 2
      },
      {
        "name": "Feedback",
        "aliases": [],
        "description": "Leave your feedback, suggestions or reports so that they can be reviewed.\nTrying to troll or spam may result in permanent ban from using Emilia-tan!",
        "usage": "emt feedback [feedback]",
        "position": 3
      }
    ],

    "Interactions": [
      {
        "name": "Hug",
        "aliases": [],
        "description": "Hug a member! We all need one from time to time.",
        "usage": "emt hug [member]",
        "position": 1
      },
      {
        "name": "Kiss",
        "aliases": [],
        "description": "Kiss a member! 💜",
        "usage": "emt kiss [member]",
        "position": 2
      },
      {
        "name": "Pat",
        "aliases": [
          "pet",
          "headpat"
        ],
        "description": "Pat a member! Who's a good member?",
        "usage": "emt pat [member]",
        "position": 3
      },
      {
        "name": "Chop",
        "aliases": [
          "headchop"
        ],
        "description": "Headchop a member!",
        "usage": "emt chop [member]",
        "position": 4
      },
      {
        "name": "Cuddle",
        "aliases": [],
        "description": "Cuddle with a member. :3",
        "usage": "emt cuddle [member]",
        "position": 5
      },
      {
        "name": "Nom",
        "aliases": [
          "bite"
        ],
        "description": "Nom a member...you monster",
        "usage": "emt nom [member]",
        "position": 6
      },
      {
        "name": "Poke",
        "aliases": [
          "boop"
        ],
        "description": "Poke a user!",
        "usage": "emt poke [member]",
        "position": 7
      },
      {
        "name": "Tickle",
        "aliases": [],
        "description": "Tickle a member...why would you do such atrocity?",
        "usage": "emt tickle [member]",
        "position": 8
      },
      {
        "name": "Bully",
        "aliases": [],
        "description": "Bully a member! All on you.",
        "usage": "emt bully [member]",
        "position": 9
      },
      {
        "name": "Slap",
        "aliases": [],
        "description": "Slap the stupidity out of someone.",
        "usage": "emt slap [member]",
        "position": 10
      },
      {
        "name": "Kill",
        "aliases": [],
        "description": "Kill a member! I am not responsible whatsoever in these murders.",
        "usage": "emt kill [member]",
        "position": 11
      },
      {
        "name": "Disgust",
        "aliases": [],
        "description": "Express your disgust",
        "usage": "emt disgust (member)",
        "position": 12
      },
      {
        "name": "Punch",
        "aliases": [],
        "description": "Punch a member! I'll record it.",
        "usage": "emt punch [member]",
        "position": 12
      },
      {
        "name": "Boot",
        "aliases": [],
        "description": "Shove a boot into their face. [ Name subject to change ]",
        "usage": "emt boot [member]",
        "position": 13
      },
      {
        "name": "Cry",
        "aliases": [],
        "description": "...Cry, I suppose",
        "usage": "emt cry (member)",
        "position": 13
      },
      {
        "name": "Greet",
        "aliases": [],
        "description": "Greet a member cause you're a nice human being.",
        "usage": "emt greet [member]"
      },
      {
        "name": "Shrug",
        "aliases": [],
        "description": "Shrug. Show how u didn't care",
        "usage": "emt shrug [member]",
        "position": 14
      }
    ],
    "Music": [
      {
        "name": "Play",
        "aliases": [
          "p",
          "add"
        ],
        "description": "Play a song.",
        "usage": "emt play [song]",
        "position": 1
      },
      {
        "name": "Playnext",
        "aliases": [
          "pn",
          "pnext",
          "nextsong"
        ],
        "description": "Adds a song to the top of the queue.",
        "usage": "emt playnext [song]",
        "position": 2
      },
      {
        "name": "Now",
        "aliases": [
          "nowplaying",
          "np",
          "current",
          "currentlyplaying",
          "cp"
        ],
        "description": "Check the song that is currently playing",
        "usage": "emt now",
        "position": 3
      },
      {
        "name": "Pause",
        "aliases": [
          "pa"
        ],
        "description": "Pauses the current song.",
        "usage": "emt pause",
        "position": 4
      },
      {
        "name": "Resume",
        "aliases": [
          "re"
        ],
        "description": "Resume a paused song.",
        "usage": "emt resume",
        "position": 5
      },
      {
        "name": "Skip",
        "aliases": [
          "sk",
          "next"
        ],
        "description": "Skip to the next song in the queue",
        "usage": "emt skip",
        "position": 6
      },
      {
        "name": "Back",
        "aliases": [
          "ba",
          "previous",
          "prev"
        ],
        "description": "Plays the previous song in the queue.",
        "usage": "emt back",
        "position": 7
      },
      {
        "name": "Loop",
        "aliases": [
          "l"
        ],
        "description": "Loops the current song or the queue",
        "usage": "emt loop [track]\nemt loop [queue]\nemt loop [off]",
        "position": 8
      },
      {
        "name": "Shuffle",
        "aliases": [
          "sh"
        ],
        "description": "Shuffle the queued songs",
        "usage": "emt shuffle",
        "position": 9
      },
      {
        "name": "Queue",
        "aliases": [
          "q"
        ],
        "description": "Shows all the songs currently queued.",
        "usage": "emt queue",
        "position": 10
      },
      {
        "name": "Jump",
        "aliases": [
          "j"
        ],
        "description": "Jumps to a song in the queue",
        "usage": "emt jump",
        "position": 11
      },
      {
        "name": "Duplicates",
        "aliases": [
          "dup"
        ],
        "description": "Removes all the duplicate songs from the Queue",
        "usage": "emt duplicates",
        "position": 12
      },
      {
        "name": "Lyrics",
        "aliases": [
          "ly"
        ],
        "description": "Searches for a song's lyrics.",
        "usage": "emt lyrics",
        "position": 13
      },
      {
        "name": "Revive",
        "aliases": [
          "rev"
        ],
        "description": "Restores the last Queue.",
        "usage": "emt revive",
        "position": 14
      },
      {
        "name": "Remove",
        "aliases": [
          "r"
        ],
        "description": "Removes a song from the queue",
        "usage": "emt remove [index]\nemt remove [song title]",
        "position": 15
      },
      {
        "name": "Clear",
        "aliases": [
          "c"
        ],
        "description": "Removes all the songs from the queue",
        "usage": "emt clear",
        "position": 16
      },
      {
        "name": "Seek",
        "aliases": [],
        "description": "Seek a specific time in a song!",
        "usage": "emt seek [time]",
        "position": 17
      },
      {
        "name": "Volume",
        "aliases": [
          "v",
          "vol"
        ],
        "description": "Control the volume of the song",
        "usage": "emt volume [number]",
        "position": 18
      },
      {
        "name": "Search",
        "aliases": [],
        "description": "Search for a song.",
        "usage": "emt search [song]",
        "position": 19
      },
      {
        "name": "Stop",
        "aliases": [
          "s",
          "dc",
          "disconnect",
          "leave"
        ],
        "description": "Stops the player and disconnects it from the voice channel",
        "usage": "emt stop",
        "position": 20
      }
    ],
    "GameCommands": [
      {
        "name": "Balance",
        "aliases": [
          "bal"
        ],
        "description": "Check a User's Balance"
      },
      {
        "name": "Blackjack",
        "aliases": [
          "bj"
        ],
        "description": "Play blackjack and waste your money"
      },
      {
        "name": "Buy",
        "aliases": [],
        "description": "Buy items from the shop (work in progress)"
      },
      {
        "name": "Cut",
        "description": "Cut trees cuz why not"
      },
      {
        "name": "Daily",
        "description": "Daily Money, yay!"
      },
      {
        "name": "Deposit",
        "aliases": [
          "dep"
        ],
        "description": "Deposit money to your [empty] bank account."
      },
      {
        "name": "Fish",
        "description": "Fishing command because of course"
      },
      {
        "name": "Give",
        "description": "Share your wealth"
      },
      {
        "name": "Hunt",
        "description": "Hunt for animals such as yourself"
      },
      {
        "name": "Inventory",
        "aliases": [
          "inv"
        ],
        "description": "Check a User's inventory"
      },
      {
        "name": "Monthly",
        "description": "Monthly Money, ooo!"
      },
      {
        "name": "Rob",
        "aliases": [
          "steal"
        ],
        "description": "Rob people like they robbed my happiness away"
      },
      {
        "name": "Shop",
        "aliases": [],
        "description": "Buy items from the shop"
      },
      {
        "name": "Snakeeyes",
        "aliases": [
          "se"
        ],
        "description": "Play snakeeyes cause you have nothing else to do"
      },
      {
        "name": "Task",
        "aliases": [],
        "description": "Complete a daily task for a reward"
      },
      {
        "name": "Threecards",
        "aliases": [
          "tc"
        ],
        "description": "Play threecards. That's it."
      },
      {
        "name": "Withdraw",
        "aliases": [
          "with"
        ],
        "description": "Withdraw money from your [empty] bank account."
      },
      {
        "name": "Work",
        "description": "Work. Work. Work."
      }
    ],
    "Ship": [
      {
        "name": "Affection",
        "aliases": [
          "aff"
        ],
        "description": "Shows the number of interactions between two users",
        "usage": "emt affection [user] (second user)"
      },
      {
        "name": "Date",
        "aliases": [],
        "description": "Date a user"
      },
      {
        "name": "Divorce",
        "aliases": [],
        "description": "Divorce a user"
      },
      {
        "name": "Marry",
        "aliases": [
          "marriage"
        ],
        "description": "Marry a user"
      },
      {
        "name": "Match",
        "aliases": [],
        "description": "Match two users"
      }
    ],
    "Misc": [
      {
        "name": "Addgif",
        "aliases": [
          "ag"
        ],
        "description": "Add a gif to your personal gif list",
        "usage": "emt addgif [gif]",
        "position": 1
      },
      {
        "name": "Gifs",
        "aliases": [],
        "description": "Check your personal list of Gifs",
        "usage": "emt gifs",
        "position": 1
      },
      {
        "name": "Invite",
        "aliases": [],
        "description": "Provides Emilia-tan's invite link",
        "usage": "emt invite",
        "position": 1
      },
      {
        "name": "Support",
        "aliases": [],
        "description": "Provides the invite link to the support server",
        "usage": "emt support",
        "position": 2
      },
      {
        "name": "Feedback",
        "aliases": [],
        "description": "Leave your feedback, suggestions or reports so that they can be reviewed.\nTrying to troll or spam may result in permanent ban from using Emilia-tan!",
        "usage": "emt feedback [feedback]",
        "position": 3
      }
    ],
  "Utility": [
    {
      "name": "Avatar",
      "aliases": [
        "av",
        "pfp",
        "who"
      ],
      "description": "Check a member's avatar",
      "usage": "emt avatar (member)",
      "position": 1
    },
    {
      "name": "Banner",
      "aliases": [
        "ba"
      ],
      "description": "Check a member's avatar.",
      "usage": "emt banner (member)",
      "position": 2
    },
    {
      "name": "Userinfo",
      "aliases": [
        "ui",
        "who",
        "whois"
      ],
      "description": "Displays information about a member",
      "usage": "emt userinfo (user)",
      "position": 3
    },
    {
      "name": "Userstats",
      "aliases": [
        "us"
      ],
      "description": "Wait 5 minutes to get some basic stats on a user",
      "usage": "emt userstats (user)",
      "position": 3
    },
    {
      "name": "Serverinfo",
      "aliases": [
        "si",
        "sv",
        "server"
      ],
      "description": "Displays information about the server",
      "usage": "emt serverinfo",
      "position": 4
    },
    {
      "name": "Emote",
      "aliases": [
        "emoji"
      ],
      "description": "Fetches previously sent emotes and displays information about them.",
      "usage": "emt emote",
      "position": 5
    },
    {
      "name": "Emotes",
      "aliases": [
        "emojis"
      ],
      "description": "Displays all the guild's emotes.",
      "usage": "emt emotes",
      "position": 6
    },
    {
      "name": "Emotecreate",
      "aliases": [
        "createemote",
        "ce",
        "ec",
        "addemote",
        "ae"
      ],
      "description": "Create an emote from an image, another emote, or from replying to a message that contains an image or emote!",
      "usage": "emt emotecreate [name] [emoji]\nemt emotecreate [image] [file]\nemt emotecreate [name] [reply to a message that has an emote or image]",
      "position": 7,
      "permissions": "1073741824"
    },
    {
      "name": "Sticker",
      "aliases": [
        "stickers"
      ],
      "description": "Searches for stickers and returns an image.",
      "usage": "emt sticker (sticker)",
      "position": 7
    },
    {
      "name": "Stickercreate",
      "aliases": [
        "createsticker",
        "cs",
        "sc",
        "addsticker",
        "as"
      ],
      "description": "Create a sticker from an image, another sticker, or from replying to a message with an image or a sticker!",
      "usage": "emt stickercreate [name] [sticker]",
      "position": 8,
      "permissions": "1073741824"
    },
    {
      "name": "Roles",
      "aliases": [],
      "description": "Provides a list with all the roles in the guild",
      "usage": "emt roles",
      "position": 9
    },
    {
      "name": "Roleinfo",
      "aliases": [
        "inforole",
        "ri"
      ],
      "description": "Provides information about a role",
      "usage": "emt roleinfo [role]",
      "position": 10
    },
    {
      "name": "Define",
      "aliases": [
        "def"
      ],
      "description": "Check the definition of a word. Dictionary and Urban.",
      "usage": "emt define [word]",
      "position": 12
    },
    {
      "name": "Remindme",
      "aliases": [
        "rm"
      ],
      "description": "Makes the bot dm you with your reminder after a specified amount of time.",
      "usage": "emt remindme [time] [reminder]",
      "position": 13
    },
    {
      "name": "Reminders",
      "aliases": [
        "reminder"
      ],
      "description": "Displays a list with your reminders",
      "usage": "emt reminders",
      "position": 14
    },
    {
      "name": "Badges",
      "aliases": [],
      "description": "Shows the number of badges in a server",
      "usage": "emt badges",
      "position": 15
    },
    {
      "name": "F",
      "aliases": [],
      "description": "Pay respect to something/someone",
      "usage": "emt f [argument]",
      "position": 16
    },
    {
      "name": "Translate",
      "aliases": [
        "tr"
      ],
      "description": "Translate text to another language",
      "usage": "emt translate [language] [text]",
      "position": 17
    },
    {
      "name": "Snipe",
      "aliases": [],
      "description": "Shows the last deleted message from a channel",
      "usage": "emt snipe",
      "position": 18
    },
    {
      "name": "Stats",
      "aliases": [],
      "description": "Displays Emilia-tan's Stats",
      "usage": "emt stats",
      "position": 19
    },
    {
      "name": "Ping",
      "aliases": [],
      "description": "Show's Emilia-tan's ping",
      "usage": "emt ping",
      "position": 20
    },
    {
      "name": "Help",
      "aliases": [
        "h",
        "ohmydearqueenibegoftheehelpmyignorantself"
      ],
      "description": "Displays short explanations for all the commands currently available",
      "usage": "emt help | emt help (command name) | emt help (category)",
      "position": 21
    }
  ],
  "Interactions": [
    {
      "name": "Hug",
      "aliases": [],
      "description": "Hug a member! We all need one from time to time.",
      "usage": "emt hug [member]",
      "position": 1
    },
    {
      "name": "Kiss",
      "aliases": [],
      "description": "Kiss a member! 💜",
      "usage": "emt kiss [member]",
      "position": 2
    },
    {
      "name": "Pat",
      "aliases": [
        "pet",
        "headpat"
      ],
      "description": "Pat a member! Who's a good member?",
      "usage": "emt pat [member]",
      "position": 3
    },
    {
      "name": "Chop",
      "aliases": [
        "headchop"
      ],
      "description": "Headchop a member!",
      "usage": "emt chop [member]",
      "position": 4
    },
    {
      "name": "Cuddle",
      "aliases": [],
      "description": "Cuddle with a member. :3",
      "usage": "emt cuddle [member]",
      "position": 5
    },
    {
      "name": "Nom",
      "aliases": [
        "bite"
      ],
      "description": "Nom a member...you monster",
      "usage": "emt nom [member]",
      "position": 6
    },
    {
      "name": "Poke",
      "aliases": [
        "boop"
      ],
      "description": "Poke a user!",
      "usage": "emt poke [member]",
      "position": 7
    },
    {
      "name": "Tickle",
      "aliases": [],
      "description": "Tickle a member...why would you do such atrocity?",
      "usage": "emt tickle [member]",
      "position": 8
    },
    {
      "name": "Bully",
      "aliases": [],
      "description": "Bully a member! All on you.",
      "usage": "emt bully [member]",
      "position": 9
    },
    {
      "name": "Slap",
      "aliases": [],
      "description": "Slap the stupidity out of someone.",
      "usage": "emt slap [member]",
      "position": 10
    },
    {
      "name": "Kill",
      "aliases": [],
      "description": "Kill a member! I am not responsible whatsoever in these murders.",
      "usage": "emt kill [member]",
      "position": 11
    },
    {
      "name": "Disgust",
      "aliases": [],
      "description": "Express your disgust",
      "usage": "emt disgust (member)",
      "position": 12
    },
    {
      "name": "Punch",
      "aliases": [],
      "description": "Punch a member! I'll record it.",
      "usage": "emt punch [member]",
      "position": 12
    },
    {
      "name": "Boot",
      "aliases": [],
      "description": "Shove a boot into their face. [ Name subject to change ]",
      "usage": "emt boot [member]",
      "position": 13
    },
    {
      "name": "Cry",
      "aliases": [],
      "description": "...Cry, I suppose",
      "usage": "emt cry (member)",
      "position": 13
    },
    {
      "name": "Greet",
      "aliases": [],
      "description": "Greet a member cause you're a nice human being.",
      "usage": "emt greet [member]"
    },
    {
      "name": "Shrug",
      "aliases": [],
      "description": "Shrug. Show how u didn't care",
      "usage": "emt shrug [member]",
      "position": 14
    }
  ],
  "Music": [
    {
      "name": "Play",
      "aliases": [
        "p",
        "add"
      ],
      "description": "Play a song.",
      "usage": "emt play [song]",
      "position": 1
    },
    {
      "name": "Playnext",
      "aliases": [
        "pn",
        "pnext",
        "nextsong"
      ],
      "description": "Adds a song to the top of the queue.",
      "usage": "emt playnext [song]",
      "position": 2
    },
    {
      "name": "Now",
      "aliases": [
        "nowplaying",
        "np",
        "current",
        "currentlyplaying",
        "cp"
      ],
      "description": "Check the song that is currently playing",
      "usage": "emt now",
      "position": 3
    },
    {
      "name": "Pause",
      "aliases": [
        "pa"
      ],
      "description": "Pauses the current song.",
      "usage": "emt pause",
      "position": 4
    },
    {
      "name": "Resume",
      "aliases": [
        "re"
      ],
      "description": "Resume a paused song.",
      "usage": "emt resume",
      "position": 5
    },
    {
      "name": "Skip",
      "aliases": [
        "sk",
        "next"
      ],
      "description": "Skip to the next song in the queue",
      "usage": "emt skip",
      "position": 6
    },
    {
      "name": "Back",
      "aliases": [
        "ba",
        "previous",
        "prev"
      ],
      "description": "Plays the previous song in the queue.",
      "usage": "emt back",
      "position": 7
    },
    {
      "name": "Loop",
      "aliases": [
        "l"
      ],
      "description": "Loops the current song or the queue",
      "usage": "emt loop [track]\nemt loop [queue]\nemt loop [off]",
      "position": 8
    },
    {
      "name": "Shuffle",
      "aliases": [
        "sh"
      ],
      "description": "Shuffle the queued songs",
      "usage": "emt shuffle",
      "position": 9
    },
    {
      "name": "Queue",
      "aliases": [
        "q"
      ],
      "description": "Shows all the songs currently queued.",
      "usage": "emt queue",
      "position": 10
    },
    {
      "name": "Jump",
      "aliases": [
        "j"
      ],
      "description": "Jumps to a song in the queue",
      "usage": "emt jump",
      "position": 11
    },
    {
      "name": "Duplicates",
      "aliases": [
        "dup"
      ],
      "description": "Removes all the duplicate songs from the Queue",
      "usage": "emt duplicates",
      "position": 12
    },
    {
      "name": "Lyrics",
      "aliases": [
        "ly"
      ],
      "description": "Searches for a song's lyrics.",
      "usage": "emt lyrics",
      "position": 13
    },
    {
      "name": "Revive",
      "aliases": [
        "rev"
      ],
      "description": "Restores the last Queue.",
      "usage": "emt revive",
      "position": 14
    },
    {
      "name": "Remove",
      "aliases": [
        "r"
      ],
      "description": "Removes a song from the queue",
      "usage": "emt remove [index]\nemt remove [song title]",
      "position": 15
    },
    {
      "name": "Clear",
      "aliases": [
        "c"
      ],
      "description": "Removes all the songs from the queue",
      "usage": "emt clear",
      "position": 16
    },
    {
      "name": "Seek",
      "aliases": [],
      "description": "Seek a specific time in a song!",
      "usage": "emt seek [time]",
      "position": 17
    },
    {
      "name": "Volume",
      "aliases": [
        "v",
        "vol"
      ],
      "description": "Control the volume of the song",
      "usage": "emt volume [number]",
      "position": 18
    },
    {
      "name": "Search",
      "aliases": [],
      "description": "Search for a song.",
      "usage": "emt search [song]",
      "position": 19
    },
    {
      "name": "Stop",
      "aliases": [
        "s",
        "dc",
        "disconnect",
        "leave"
      ],
      "description": "Stops the player and disconnects it from the voice channel",
      "usage": "emt stop",
      "position": 20
    }
  ],
  "GameCommands": [
    {
      "name": "Balance",
      "aliases": [
        "bal"
      ],
      "description": "Check a User's Balance"
    },
    {
      "name": "Blackjack",
      "aliases": [
        "bj"
      ],
      "description": "Play blackjack and waste your money"
    },
    {
      "name": "Buy",
      "aliases": [],
      "description": "Buy items from the shop (work in progress)"
    },
    {
      "name": "Cut",
      "description": "Cut trees cuz why not"
    },
    {
      "name": "Daily",
      "description": "Daily Money, yay!"
    },
    {
      "name": "Deposit",
      "aliases": [
        "dep"
      ],
      "description": "Deposit money to your [empty] bank account."
    },
    {
      "name": "Fish",
      "description": "Fishing command because of course"
    },
    {
      "name": "Give",
      "description": "Share your wealth"
    },
    {
      "name": "Hunt",
      "description": "Hunt for animals such as yourself"
    },
    {
      "name": "Inventory",
      "aliases": [
        "inv"
      ],
      "description": "Check a User's inventory"
    },
    {
      "name": "Monthly",
      "description": "Monthly Money, ooo!"
    },
    {
      "name": "Rob",
      "aliases": [
        "steal"
      ],
      "description": "Rob people like they robbed my happiness away"
    },
    {
      "name": "Shop",
      "aliases": [],
      "description": "Buy items from the shop"
    },
    {
      "name": "Snakeeyes",
      "aliases": [
        "se"
      ],
      "description": "Play snakeeyes cause you have nothing else to do"
    },
    {
      "name": "Task",
      "aliases": [],
      "description": "Complete a daily task for a reward"
    },
    {
      "name": "Threecards",
      "aliases": [
        "tc"
      ],
      "description": "Play threecards. That's it."
    },
    {
      "name": "Withdraw",
      "aliases": [
        "with"
      ],
      "description": "Withdraw money from your [empty] bank account."
    },
    {
      "name": "Work",
      "description": "Work. Work. Work."
    }
  ],
  "Ship": [
    {
      "name": "Affection",
      "aliases": [
        "aff"
      ],
      "description": "Shows the number of interactions between two users",
      "usage": "emt affection [user] (second user)"
    },
    {
      "name": "Date",
      "aliases": [],
      "description": "Date a user"
    },
    {
      "name": "Divorce",
      "aliases": [],
      "description": "Divorce a user"
    },
    {
      "name": "Marry",
      "aliases": [
        "marriage"
      ],
      "description": "Marry a user"
    },
    {
      "name": "Match",
      "aliases": [],
      "description": "Match two users"
    }
  ],
  "Misc": [
    {
      "name": "Addgif",
      "aliases": [
        "ag"
      ],
      "description": "Add a gif to your personal gif list",
      "usage": "emt addgif [gif]",
      "position": 1
    },
    {
      "name": "Gifs",
      "aliases": [],
      "description": "Check your personal list of Gifs",
      "usage": "emt gifs",
      "position": 1
    },
    {
      "name": "Invite",
      "aliases": [],
      "description": "Provides Emilia-tan's invite link",
      "usage": "emt invite",
      "position": 1
    },
    {
      "name": "Support",
      "aliases": [],
      "description": "Provides the invite link to the support server",
      "usage": "emt support",
      "position": 2
    },
    {
      "name": "Feedback",
      "aliases": [],
      "description": "Leave your feedback, suggestions or reports so that they can be reviewed.\nTrying to troll or spam may result in permanent ban from using Emilia-tan!",
      "usage": "emt feedback [feedback]",
      "position": 3
    }
  ]
}

return commands[category];

}

export {
  getCommandCategory
}