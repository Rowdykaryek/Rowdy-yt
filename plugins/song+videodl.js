const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const fg = require('yt-search')


cmd({
    pattern: "song",
    desc: "dawnlod song",
    category: "dawnlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or ti")
const search = await yts(q)
const data= search.videos[0]
const url = data.url

let desc = `
🍭 ROWDY MD SONG Dawnlod 🍭

title: ${data.title}
description:  ${data.description}
time:  ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY ROWDY-MD 👽
`
await conn.sendmessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio
  
let down = await fg.yta(url)
let downlodurl = down.dl_url

//send audio message
await conn.sendmessage(from,{audio: {url:downlodurl},mimetype:"audio/mpeg"},{quoted})


}catch(e){
console.log(e)
reply(`${}`)
}
})

