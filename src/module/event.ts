import { Client, Events, Message, MessageReaction, User } from "discord.js";
import messageCreate from "./event/messageCreate";
import messageReactionAdd from "./event/messageReactionAdd";

export default async(client: Client)=>{
  client.once(Events.ClientReady,()=>{
    console.log("準備完了しました");
  });

  client.on(Events.MessageCreate,async(message: Message)=>{
    await messageCreate(message);
  });

  client.on(Events.MessageReactionAdd,async(react,user)=>{
    await messageReactionAdd(react,user);
  });
}