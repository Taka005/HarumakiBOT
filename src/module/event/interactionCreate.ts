import { Interaction, Colors, ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js"

export default async(interaction: Interaction)=>{
  if(interaction.isChatInputCommand()){
    if(interaction.commandName === "totalling"){
      const number = interaction.options.getInteger("number")||0;

      if(number <= 0) return await interaction.reply({
        embeds:[{
          color: Colors.Red,
          title: `募集人数は1以上で指定してください`
        }],
        ephemeral: true
      });

      await interaction.reply({
        embeds:[{
          color: Colors.Green,
          title: `${number}人ずつ募集しています`,
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

      let description = interaction.message.embeds[0].description || "";
      let footer = "";

      const list = description ? description.split("\n") : [];

      if(data[1] === "join"){
        if(list.filter(ele=>ele.includes(interaction.user.id))[0]) return await interaction.reply({
          embeds:[{
            color: Colors.Red,
            title: `既に参加しています`
          }],
          ephemeral: true
        });

        description = description + `\n${interaction.user.displayName}(${interaction.user.id})が参加しました`;
        footer = `${list.length+1}人が募集済み`;

        await interaction.reply({
          embeds:[{
            color: Colors.Green,
            title: `参加しました`
          }],
          ephemeral: true
        });
      }else if(data[1] === "leave"){
        if(!list.filter(ele=>ele.includes(interaction.user.id))[0]) return await interaction.reply({
          embeds:[{
            color: Colors.Red,
            title: `まだ参加していません`
          }],
          ephemeral: true
        });

        description = list.filter(ele=>!ele.includes(interaction.user.id)).join("\n");
        footer = `${list.length-1}人が募集済み`;

        await interaction.reply({
          embeds:[{
            color: Colors.Green,
            title: `脱退しました`
          }],
          ephemeral: true
        });
      }else if(data[1] === "stop"){
        if(data[2] !== interaction.user.id) return await interaction.reply({
          embeds:[{
            color: Colors.Red,
            title: `作成者しか操作できません`
          }],
          ephemeral: true
        });

        const ids = description.match(/\d{17,19}/g) || [];
        const members = Number((interaction.message.embeds[0].title?.match(/\d{1,10}/g)||[])[0])||0;
        if(!ids[0]) return await interaction.reply({
          embeds:[{
            color: Colors.Red,
            title: `誰も参加していません`
          }],
          ephemeral: true
        });

        if(members > ids.length) return await interaction.reply({
          embeds:[{
            color: Colors.Red,
            title: `参加人数が不足しています`
          }],
          ephemeral: true
        });

        for(let i = ids.length - 1;i > 0;i--){
          const j = Math.floor(Math.random()*(i + 1));
          [ids[i],ids[j]] = [ids[j],ids[i]];
        }

        const result = [];
        for (let i = 0;i < ids.length;i += members){
          result.push(ids.slice(i,i + members));
        }

        result.forEach(async(id,i)=>{
          await interaction.channel?.send({
            content: `**グループ${i+1}**\n\n`+id.map(d=>`<@${d}>`).join("\n")
          }).catch(()=>{});
        });

        interaction.message.components = [];

        await interaction.reply({
          embeds:[{
            color: Colors.Green,
            title: `締め切りました`
          }],
          ephemeral: true
        });
      }

      await interaction.message.edit({
        embeds:[{
          color: Colors.Green,
          title: interaction.message.embeds[0].title || "",
          description: description,
          footer:{
            text: footer
          }
        }],
        components: interaction.message.components
      }).catch(()=>{});
    }
  }
}