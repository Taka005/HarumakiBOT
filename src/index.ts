import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import event from "./module/event";

const client: Client = new Client({
  intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions
  ]
});

event(client);

client.login(process.env.BOT_TOKEN)
  .then(()=>{
    console.log("ログインしました");
  });

process.on("uncaughtException",async(error: Error)=>{
  console.error(error);
});

process.on("unhandledRejection",async(error: Error)=>{
  console.error(error);
});