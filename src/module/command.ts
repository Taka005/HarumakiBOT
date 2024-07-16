import { Client, Routes, SlashCommandBuilder } from "discord.js";

export default async(client: Client)=>{
  if(!client.application) throw new Error("アプリケーションが存在しません");

  await client.rest.put(Routes.applicationCommands(client.application.id),{
    body: [
      new SlashCommandBuilder()
        .setName("totalling")
        .setDescription("募集します")
        .addIntegerOption(option=>
          option
            .setName("number")
            .setDescription("分ける数")
            .setRequired(true))
    ]
  });
}