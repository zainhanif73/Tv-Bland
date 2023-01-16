import axios from axios

function GetDataFromApi(url) {
    axios.get(url).then((response) => response.data).catch((error) => console.log(error))
}