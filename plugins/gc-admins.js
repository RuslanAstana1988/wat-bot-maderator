let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*СООБЩЕНИЕ:* ${pesan}`
let text = `*━「* ВЫЗОВ АДМИНОВ *」━*

${oi}

*АДМИНЫ:*
${listAdmin}

*[ ⚠ ️] ИСПОЛЬЗОВАЙТЕ ЭТУ КОМАНДУ ТОЛЬКО В ЭКСТРЕННЫХ СИТУАЦИЯХ!!*`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['aадмин <текст>']
handler.tags = ['группа']
handler.command = /^(админы|@admins|dmins)$/i
handler.group = true
export default handler
