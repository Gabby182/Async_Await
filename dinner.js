const cookBeanSouffle = require('./lib/libraryDinner.js');

// Write your code below:
const hostDinnerParty = async () => {
  try{
    const dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  }catch(error){
    console.log(error)
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();

