
const API_TOKEN = "ecc5442c1df699f167d368361168e0fd"

export function getFilmsFromApiWithSearchedText(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}