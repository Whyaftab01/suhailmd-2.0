const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "whyaftab" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_19_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUFh0LzZMZ0tmNjFqemhWSHp1Z0lZV1d4QU1JT1E3OENvbnNTWXVGOWluUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MjkyNDI4ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBNDRFQkREMjIyNzJCOTkxM0E5QTM3Q0Y3RUQzQTQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjI5OTU5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQyOTI0Mjg4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjNBNjlFREU4QjcwMkJFMTY4NkUxQUU5RUFCQjBDMzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMjk5NTkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllmT2tlRXdlUms2eVRzcS00REppb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWZmMmI5YjYtMzZlMi00YjlkLThjYmYtNGVhMzcxNjA1M2ZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMTE0LFxuICAgICAgODYsXG4gICAgICA5MixcbiAgICAgIDgsXG4gICAgICAxMyxcbiAgICAgIDEwOCxcbiAgICAgIDEzMCxcbiAgICAgIDI5LFxuICAgICAgMjQ0LFxuICAgICAgMjQwLFxuICAgICAgODcsXG4gICAgICA2LFxuICAgICAgMjMzLFxuICAgICAgMTgxLFxuICAgICAgMTAsXG4gICAgICAyMTksXG4gICAgICAxNzEsXG4gICAgICAxNDcsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE1MixcbiAgICAgIDE5LFxuICAgICAgMTQzLFxuICAgICAgMjM5LFxuICAgICAgMjAyLFxuICAgICAgMzEsXG4gICAgICAyMCxcbiAgICAgIDE2OCxcbiAgICAgIDEyLFxuICAgICAgMTU0LFxuICAgICAgMjQ3LFxuICAgICAgMTg4LFxuICAgICAgMjM3LFxuICAgICAgNTUsXG4gICAgICAyNTAsXG4gICAgICA5MixcbiAgICAgIDYzLFxuICAgICAgNzksXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTVdSNlBHOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDI5MjQyODgwOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQUZUQUIgVEhFIExFR0VORFwiLFxuICAgIFwibGlkXCI6IFwiMTE2Nzg0OTkyNjI0NzcyOjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMWTR4a1F3SmFEdWdZWUJpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS3pqYmxieExTc0UyOGlYWUdqS0txZXNPMWZwUkhJZWtXcjkwNXVFcFUyST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEd25uQ3YrQm9VNFY3VWFhYlJzcjJRd3B4TER6MHRhQS9GWlJVYWdDcFJMOERFMURWRWplMWRwYzdGMWptVi9LOTJSWVV2SmNweFA5VnF3TXY0RnZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3TWRsUzVWNEFwK21ybjdZb1drUVUvS2pLZUd3TS80NjJlZzE0c1BORUpaZFZoR1RkSlhhOGZSdktzYkFuSjhTbG0zZ1llZW1kMkxSbFBxYW5abStBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MjkyNDI4ODA6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyOTk1ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFdURcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV1RC5qc29uIjogIntcImtleURhdGFcIjpcIktMVGFqODVWSXFqZ2JNdnpHbDVXSFk4aTljSWJ1Uno3eEtWWU1QRzd3eGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTQwNjIwOTcsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE5OTc4NjQ1NzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "whyaftab",
  packname: process.env.PACK_NAME || "aftab the legend",
  botname : process.env.BOT_NAME  || "crazyboy",
  ownername:process.env.OWNER_NAME|| "whyaftab",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
