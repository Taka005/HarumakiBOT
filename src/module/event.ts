import { Client, Events } from "discord.js";
import messageCreate from "./event/messageCreate";
import messageReactionAdd from "./event/messageReactionAdd";
import interactionCreate from "./event/interactionCreate";
import command from "./command";

export default async(client: Client)=>{
  client.once(Events.ClientReady,async()=>{
    console.log("準備完了しました");

    await command(client);
  });

  client.on(Events.MessageCreate,async(message)=>{
    await messageCreate(message);
  });

  client.on(Events.MessageReactionAdd,async(react,user)=>{
    await messageReactionAdd(react,user);
  });

  client.on(Events.InteractionCreate,async(interaction)=>{
    await interactionCreate(interaction);
  });
}