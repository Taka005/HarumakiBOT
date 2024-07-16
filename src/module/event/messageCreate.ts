import { Message, Colors } from "discord.js";

export default async(message: Message)=>{
  if(message.author.bot) return;

  if(message.content === "?BU1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080119533651628063");
  }else if(message.content === "?BU2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080119765156249620");
  }else if(message.content === "?SI1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080119835448594442");
  }else if(message.content === "?SI2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080119873872609292");
  }else if(message.content === "?SI3"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120215179894885");
  }else if(message.content === "?GO1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120386454294638");
  }else if(message.content === "?GO2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120386454294638");
  }else if(message.content === "?GO3"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120521829654558");
  }else if(message.content === "?PU1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120651618197574");
  }else if(message.content === "?PU2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120679778750565");
  }else if(message.content === "?PU3"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120874407043133");
  }else if(message.content === "?DA1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120953159303188");
  }else if(message.content === "?DA2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080120982385217547");
  }else if(message.content === "?DA3"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080121038861508718");
  }else if(message.content === "?MA1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080121098588401694");
  }else if(message.content === "?MA2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080121117706043442");
  }else if(message.content === "?DI1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080118330662322256");
  }else if(message.content === "?DI2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080119046487425135");
  }else if(message.content === "?DI3"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080119086199099442");
  }else if(message.content === "?TO1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080115227221307406");
  }else if(message.content === "?TO2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080115327981072505");
  }else if(message.content === "?TO3"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080115436718395402");
  }else if(message.content === "?SY1"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080126489883836416");
  }else if(message.content === "?SY2"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080126561983934464");
  }else if(message.content === "?SY3"){
    await message.reply("https://discord.com/channels/1080107397642719303/1080126589037195386");
  }else if(message.content === "?VC"){
    await message.reply("https://discord.com/channels/1080107397642719303/1151841798977757184");
  }

  if(message.channel.id === "1201076921778311279"){
    await message.react("❤");
  }else if(message.channel.id === "1080117039269675109"){
    await message.react("<:_yorosiku:1133411560010829844>");
  }

  if(message.content === "?bananaharumakitarouchbananananananaaanaalalalazaq"){
    await message.channel.send({
      embeds:[{
        color: Colors.Green,
        title: "<:emoji_13:1098073984748228609>募集ルール<:emoji_13:1098073984748228609>",
        fields:[
          {
            name: "・連投でメンションを送る行為",
            value: "└連投で募集ロールへメンションを送ると相手へ通知が行くため迷惑がかかるため禁止です。\n最低でも15分～30分は時間を置くようにしてください"
          },

          {
            name: "・相手が不快になる行為",
            value: "└相手が不愉快だと感じる行為はやめましょう\n暴言や下ネタなど"
          },

          {
            name: "・住所や金銭のやりとり",
            value: "└住所を聞かれた場合はすぐにブロックしてください！また金銭のやり取りをしようなど誘われても無視しましょう！\n__※金銭のやり取りや会って何かされても当サーバーは一切責任は負いません__"
          },

          {
            name:"・動画撮影や写真を撮る時",
            value:"└動画や写真をX（旧Twitter）やYoutubeなどのSNSに投稿する場合は絶__対に相手に許可を得てから投稿しましょう__"
          },

          {
            name:"・無言参加、無言向けはやめましょう",
            value:"やめるときは一声かけてやめましょう!また、無許可のVC参加は禁止です"
          }
        

        ],
        footer:{
          text: "この中に入っていなくても不快にされる行為は禁止です。何かあったら管理者にお問い合わせで伝えてください。"
        }
      }]
    });
  }

  if(message.content === "?.scgsucgaihxasc?Ascfuyars6c8yfashjhxio"){
    await message.channel.send({
      embeds:[{
        color: Colors.Green,
        title:"◣__🔰サーバーチャンネル説明🔰__◢",
        description: "サーバーのチャンネル説明をしていきます!\n 各チャンネルへの説明なので新規さん向けの説明となっております!"
      }]
    })
  }
}