const fetch = require('node-fetch');

exports.existProfile = async (uriProfile, res) => {
  try {
    await fetch(uriProfile)
      .then(res => res.json())
      .then(json => {
        if (json.hasOwnProperty('code')) {
          return false;
        } else {
          return res.send(json)
        }
      });
  } catch (error) {
    console.log(error)
  }
}

exports.existOpportunity = async (uriOpportunity, res) => {
  try {
    const response = await fetch(uriOpportunity);
    if (response) {
      try {
        const json = await response.json()
        return res.send(json)
      } catch (error) {
        console.log(error)
      }
    } else {
      return false;
    }
  } catch (error) {
    return false
  }
}
