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
  require("dotenv").config({ path:__dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "taketee811@gmail.com";
global.location = "BO.SIERRA LEONE.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "23274448130@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "freetown/sierraleone";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "23274448130";
global.sudo = process.env.SUDO || "23274448130";
global.owner = process.env.OWNER_NUMBER || "23274448130";
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
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5Ha0JMeTlNbWdhcmJ4OW1hbmNycEJVMDBFQ2FmUUd4Y3dDbWdsS2gyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0krOS9Ic2c2SHdCTk90aVdIUjM1cEh5c1Ftbkc5RzNEemtFNWl0WldXWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUpaRThlTHVLQ3V0NUpMa25RbTZZTEJMYm1TR3c0VFN6bWQ4NnFsdVdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuWHRkN0hoZkVSN1l4RW1IWFV3Y1hvR2xUemdoRFkwZDdPZWlIT0hWY0FFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFTEl2b2N4VmwvNis4Ni9BZlJyL3VqQjFJN0dqdDMzUFlFUUxWT29oVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJQ3p2Q3NrNTUxZWFMd1NDRS9mSWQ1aGtMRmhyN3ZYdk44Y3pnWDFUbVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExIa2xQSTZsWUxwOXJZbndTMmhPRjA3MFdLVlo1eFA3TzJnNkhHVkNYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTJTZWhtOVlZZ2RNU2xOOE9XT21Nc0pLOWZuZytldkZoNWU5ZmtzK216bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjljT2p1NXhwZ1B5b0VWYXJnc3FMMUI2NkNvbFNSNkNJYTMzT3hsWGtENE9wUlVHRnVISDNFOWU1cnlzd3hRd3dxSEI2YlFQSFFENnpPcnZKVWFsb0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJPQno4MXF3R09Vd3NaVHpJV09EMGNwZGdkem4vOE1QRW5tRklySzdzNnBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4QkI4TzB1WlRTLTFadXc5YVBfYzl3IiwicGhvbmVJZCI6IjI1ZTAwZjhiLTgwMzEtNGM5Zi1hNzFlLTlhZDQyYTczMjRkMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RzQrL3ltQnBvczl2VHdkdUZjUTdEZlpWZEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dIWFIzenl1TWZkTFJhMUlwbnVoY1FKUk1BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ0NjNQWlJLIiwibWUiOnsiaWQiOiI5NDc2MjMwNTYxMzo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uMDgvQUNFSyt5NkxRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjYrV3JwNWtoeVREL2dXQmxzTHF2RWpnQ0dsbUFvRmNIY25ZWXFtNmVOQlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9KZmVJcGM0dE1vM284N2YyY3pXdUFXekdQcEZXdG5zTnlSdnBVb0hIQjZ6cEZDMzZXaW85YVUrTVRVVHlkS0wrRW5ibmt3U2ZXMHc0bnlldDVlOUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3bExvVEJXMmVqdlNOYm5aTlY4R1BkdXFVRmcxZDV1ZWNrM0xib2k1cWp5VCtRVXJBODNjWU4zWnEveElvcDgxMkZ4ZkVodHJOMUN4NzhQQ0kzS2ZCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyMzA1NjEzOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXZscTZlWklja3cvNEZnWmJDNnJ4STRBaHBaZ0tCWEIzSjJHS3B1bmpRViJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTM3NTAzNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdVQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Mr Take Tee",
  author: process.env.PACK_AUTHER || "Mr Take Tee",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Tee bot",
  ownername: process.env.OWNER_NAME || "MrTake Tee",
  errorChat: process.env.ERROR_CHAT || "23274448130",
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
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
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
