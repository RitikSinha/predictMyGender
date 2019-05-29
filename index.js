// let's create a neural network which will pridict the gender of the name.
//Long Short Term memory is used in this project 
const brain = require('brain.js');
const data = require('./data.json');


//create neural network
const network = new brain.recurrent.LSTM();

//train data 
const trainingData = data.map(i=>({
    input: i.name,
    output: i.gender
}) );

network.train(trainingData,{
    iterations:2000
});
const output = network.run('Tinku');
console.log(`gender of the name is  ${output}`);