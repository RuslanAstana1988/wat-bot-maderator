let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'открыть': 'не_оъявление',
'закрыть': 'объявление',
'открыть': 'не_оъявление',
'cзакрыть': 'объявление',
'открыть': 'не_оъявление',
'закрыть': 'объявление',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] НЕ ВЕРНЫЙ ФОРМАТ!!*

*┏━━━❲ ✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыть*
*┠┉↯ ${usedPrefix + command} закрыть*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] ГРУППА НАСТРОИНА УСПЕШНО*')}
}
handler.help = ['группа открыта/ закрыта', 'открыть группу / закрыть']
handler.tags = ['группа']
handler.command = /^(группа|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
