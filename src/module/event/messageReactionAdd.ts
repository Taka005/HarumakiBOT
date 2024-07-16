import { MessageReaction, User, ChannelType, PartialMessageReaction, PartialUser } from "discord.js";

export default async(react: MessageReaction | PartialMessageReaction, user: User | PartialUser)=>{
  if(react.message.channel.type !== ChannelType.GuildText) return;

  if(react.message.channel?.parentId === "1213746501386240010"){
    if(react.emoji.id === "1133410009489870929"){
      await react.message.startThread({ name: user.id });
    }
  }
}