import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ / πππ» π΄π» π²ππ°π» π³π΄ππ΄π° π°π²πΎπππ°π*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[β] π΄πππΎπ, π²πΎπΌπΏπππ΄π±π΄ πππ΄ π΄π» ππ΄πππΎ πΈπ½πΆππ΄ππ°π³πΎ ππ΄π° ππ½ ππ΄πππΎ π΄ πΈπ½ππ΄π½ππ΄π»πΎ π³π΄ π½ππ΄ππΎ*`
let done = `*π»πΈπ½πΊ π°π²πΎπππ°π³πΎ π²πΎππ΄π²ππ°πΌπ΄π½ππ΄!!*\n\n*π»πΈπ½πΊ π°π½ππ΄ππΈπΎπ:*\n${text}\n*π»πΈπ½πΊ π°π²πΎπππ°π³πΎ:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
