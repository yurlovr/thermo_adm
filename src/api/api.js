export default class ApiData {
  constructor(host) {
    console.log(host)
    this.host = host
    this.headers = {
      'Content-Type': 'application/json'
    }
  }
  call = async (endPoint, data, headers) => {
    return fetch(this.host + endPoint, {
      method: 'POST',
      headers: headers ? { ...this.headers, 'Authorization': headers } : this.headers,
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => data)
    .catch(() => {
      throw new Error('Error')
    })
  }
}