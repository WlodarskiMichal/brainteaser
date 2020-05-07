const baseURL = '/api/scores/'
export default {


  getScores(){
    return fetch(baseURL)
    .then(res => res.json())
  },


  postScores(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
}
