//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "mrdaxx2008@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "263719532041";
global.owner = process.env.OWNER_NUMBER || "263719532041";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09vcyt4T254TzM3OXlPSW1WdEJPSE9uRU9aYzB4VWcxUUc5M1BldVVtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFJaQlFVRGhKL2ZsOXprMEZDZmpneExHYkVOSDgvWisxZDRCR3NjSXJRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRVN4a2lKUUdhN2g1a3pCN2dQbnJXOVJnUXJzV0hCSmJmR0Zpck8yeDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJha3k4cUhiRUVTcFRydEtzWVNxQ0JQR0NaVjJ5TExKQUNQOVlKU2x0RnljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIU1hUbEVyNEx2d0luTnh3b01lbjA1TkxzOG04NGlXOVBJbllZOXl0RXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZyYzZzNGhDNnkxQ2p6Q3JSdEl1QWxBNGxUYVZEK1h0VTRYTk81ZG1hU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURlTzg2ejc1bUp3K2pweEFlN01Ka0RDUGZNaDJoMHdKVjlRUEQxdm0zST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hyNWxqb01TczlCaXM0M1Z2Qm16d0w3czdqNTRnbHdDalBaRm9HYWV3ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJsVDRDd2dkSSsvVitGZTRvTGdPaGZOVXhWaGdaNkFwbkJ0TVpFWEJSZUhjU2VXL1hZT2VmRnlCa2FEdEw5WmRPa1UwczhHeTNpeEJ4ZjI0YXJJcUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiI2ZTNRcFRwU29HUEtiLzFqYmUwdW9kN09qMEpJSk5yaXVQemV1bCs1MW13PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhdldXTmlfa1FWeXR1NmhXOU9mVFZRIiwicGhvbmVJZCI6ImJmMmY3MzE1LTY4YmQtNDkwYS05NTU3LTA2ZTQzYjk4YmQyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNXZtSjQxdUkzVWFicWp4d09RZThKV0IybUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW15ZDRNbGZmbEU3WGJYd1dIVUE1eG9IcW5JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRLS0YyTEU2IiwibWUiOnsiaWQiOiIyNjM3ODMzMzI4OTg6NzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXJpdGhtZXRpYzI4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOU1N0cElERVBPM3ByUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDd1k5MzFWem9PcjdQR3JGaHBUWG1WTkNtM3ZaVk8vSS96NTdwaWViY21vPSIsImFjY291bnRTaWduYXR1cmUiOiIySWZMVW5qNHJYNllXNHVSODREc0pIR2pwVHRaYzNObXZNb1FFMWsxc0RqL1JkM1lHbHUxZ1U3b3NPb1ZrSG0xWGt6dVNjdnkwUWU5T2VnSXdURHZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWxmeCt1OC9QcCtLeFlvSCtOSzV4bXVsSk1INGNYSWtsQUo5RFdrajJ2WXhkM2I4dGxNUFVZY2VZaW0zSzQvd3Z3ak1kTVBNYkJSeFV4ZnFjY0E0Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODMzMzI4OTg6NzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXNHUGQ5VmM2RHErenhxeFlhVTE1bFRRcHQ3MlZUdnlQOCtlNllubTNKcSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDI5NDQwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHNUcifQ=="
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-WALTER-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "bonyoist",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WALTER-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "ARITHMETIC28",
  errorChat: process.env.ERROR_CHAT || "263719532041",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
