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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05SdDAyTWRERkJUV1hGQkhjZGpobmg5MTlGazJPckxOeStXSE5CQjkwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBWZEg2M25zMkl3VnhjVVFPaEJCYVBFMDQzZ0FHbnE5bnVNSHBneC9VUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSVc2VzFrT1B2eWpBQ1gzN25lRXhMUVQzWGtHN2ZGV05DNFNpNEw0dTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMNTV4TFNrSGNUenovY0RlMzREcEtYbExaSXd3UnVaWm9kNDMzS3Q0T0JjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQOEVxcDlTVzBSeDhKM01jSXZ3MnlZWFRvNlE4bC92eUdxRGVjVWt5a2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0wN1ZZWkJSK2kwanFHTDE3MTh2RDNTdzc1MENjaFErUDdjdFg5NEg0WHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFWS0FOV0dFanYwQm1MNHNSQ0hSaU0wRlVNdHQyRDRGODA2VFNWaERsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDBGS3J4ZFRxRmsySkU5a2xpajNsL2luUUc2cGlCWTlCL3laa3JqK1RHOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNVeXp2Y0YrSXdQQkRPYXlWL1AzR0pWa1pGQy9LclRLeGljUWhEZHNqbmF4RXJIZGJDUjB5RWVFWnRzdUQ1eWx5S1czNmkxYURkWUlkWGFuRkRUL2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiNktFczUwWDNmclIwMWtQc1NmM0RDNWljV0huaUl3Mk5VVzlxajg5WTlPUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZi1yellMRnhUNXFEOVRoSDc4OUpudyIsInBob25lSWQiOiI1MjMxZGNlYy1kMTRiLTQxYjAtOGMxZi1kZGFlYzk0MDdkZDEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNG1EdVlwamQ1aEJ3cXJXOUJhU29UaktLWDVJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndmYzhWeHJMdExKRFo1U3dqSStLbGZPRmxQVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIR0wxTFY1QiIsIm1lIjp7ImlkIjoiMjYzNzE5NTMyMDQxOjYzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYUZqWndHRVBHanByUUdHQ0FnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0MlJLdDVaMnpwSkV0bXAvU253RkdudmRYKzZvb1E1ZUd3YTYxeGczOEhRPSIsImFjY291bnRTaWduYXR1cmUiOiJUd1J2eGVMdkY5cHFYVXBjbFcrdUNQaGtVbjR1Mld4Z2w1aXhmM1dqTVhpVWVzOERyZmZUblJVc3BpTGhCTjJPNTBuVjdvcTRsM0hoZXJJdVdzUkFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSFZsL0FsL1VGSjd3M3VmUElSdHZWTUExeldoM0ZrUnM2cUFWVnpOdzdPd2lPU1dKNytvMzZWS01QZVJFMnFIdHVDc1NIL0h2YXNjVXA4STB5eUR3Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTk1MzIwNDE6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZU5rU3JlV2RzNlNSTFpxZjBwOEJScDczVi91cUtFT1hoc0d1dGNZTi9CMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDI5MTgzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPSUEifQ=="
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
