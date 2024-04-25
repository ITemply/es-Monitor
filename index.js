const axios = require('axios')
const Tesseract = require('tesseract.js');

function getText(imagePath){
    Tesseract.recognize(
        imagePath,
        'eng',
        {}
    ).then(({ data: { text } }) => {
        return text
    })
}

function formatString(placeId, jobId){
    const formattedString = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${jobId}`
    return formattedString
}

async function get(placeid){
    const response = await axios.get(`https://games.roblox.com/v1/games/${placeid}/servers/0?sortOrder=2&excludeFullGames=false&limit=100`)
    if(response && response.data && response.data.data){return response.data.data}
    return
} ( async() => {
    var servers = await get(2262441883)
    console.log(servers)
})()

console.log(getText('images/image.png'))