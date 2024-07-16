import { Interaction, Colors, ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js"

export default async(interaction: Interaction)=>{
  if(interaction.isChatInputCommand()){
    if(interaction.commandName === "totalling"){
      const number = interaction.options.getInteger("number");

      await interaction.reply({
        embeds:[{
          color: Colors.Green,
          title: `${number}人ずつ分けます`,
          footer:{
            text: "0人が募集済み"
          }
        }],
        components:[
          new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
              new ButtonBuilder()
                .setCustomId(`totalling_join_${interaction.user.id}`)
                .setStyle(ButtonStyle.Primary)
                .setLabel("参加"),
              new ButtonBuilder()
                .setCustomId(`totalling_leave_${interaction.user.id}`)
                .setStyle(ButtonStyle.Danger)
                .setLabel("脱退"),
              new ButtonBuilder()
                .setCustomId(`totalling_stop_${interaction.user.id}`)
                .setStyle(ButtonStyle.Secondary)
                .setLabel("締切")
          )
        ]
      });
    }
  }else if(interaction.isButton()){
    if(interaction.customId.startsWith("totalling_")){
      const data = interaction.customId.split("_");



      await interaction.message.edit({
        embeds: interaction.message.embeds,
        components: interaction.message.components
      }).catch(()=>{});
    }
  }
}