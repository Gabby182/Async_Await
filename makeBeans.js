const {shopForBeans, soakTheBeans, cookTheBeans} = require('./lib/libraryMakeBeans.js');

// Write your code below:
const makeBeans = async () => {
  const type = await shopForBeans();  
  const isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();