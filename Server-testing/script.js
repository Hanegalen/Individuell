
const URL = "bacit.info"

function test() {
// Send a GET request without any data to the server
fetch(URL, {method: "GET"})
// Get the JSON data from the raw response
   .then(res => res.json())
// Print the result
   .then(console.log)
}