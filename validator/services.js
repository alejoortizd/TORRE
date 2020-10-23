const { existProfile, existOpportunity } = require('../utils/index');


exports.validate = (req, res) => {
  res.render('index')
}

exports.check = async (req, res) => {
  const uriProfile = `https://torre.bio/api/bios/${req.body.validate}`;
  const uriOpportunity = `https://torre.co/api/opportunities/${req.body.validate}`;
  
   const existP = await existProfile(uriProfile, res);
  const existO = await existOpportunity(uriOpportunity, res);
  
  if (existP) {
    res.send(existP)
  } else {
    res.send(existO)
  }
}