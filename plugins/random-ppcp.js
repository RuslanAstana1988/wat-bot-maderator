import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙰 𝙲𝚄𝚃𝙴', wm, json.result.female, [['🔄 ДАЛЕЕ 🔄', `/${command}`]], m)
conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙾 𝙲𝚄𝚃𝙴', wm, json.result.male, [['🔄 ДАЛЕЕ 🔄', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
