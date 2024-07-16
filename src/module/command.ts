import { Client, Routes } from "discord.js";

export default async(client: Client)=>{
  if(!client.application) throw new Error("アプリケーションが存在しません");

  await client.rest.put(Routes.applicationCommands(client.application.id),{
    body: []
  });
}