const { existProfile, existOpportunity } = require('../utils/index');


exports.validate = (req, res) => {
  res.render('index')
}

exports.check = async (req, res, next) => {
  const uriProfile = `https://torre.bio/api/bios/${req.body.validate}`;
  const uriOpportunity = `https://torre.co/api/opportunities/${req.body.validate}`;
  let answer;
  try {
    const existP = await existProfile(uriProfile, res);  
    if ( existP ) {
      answer = {
        message: 'exist Profile'
      }
    } else {
      try {
        const existO = await existOpportunity(uriOpportunity, res);
        if (existO) {
          answer = {
            message: 'exist Opportunity'
          }
        }
      } catch (error) {
        console.log(error);
        answer = { error }
      }
    }
  } catch (error) {
    console.log(error);
    answer = { error }
  }
  res.json(answer);
  next();
}