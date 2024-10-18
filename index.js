//Create arrays to hold the names and occupations of your freelancers.

//make an array to store the freelancers, include names, price, occupation.

// Loop through the freelancer array 
  // add HTML elements for each freelancer's information.
  // add these elements to the DOM so they appear on the webpage.

// Create a function that grabs a random freelancer off the array
  //display their name, price, occupation

// set up an interval to add a new freelancer to the page every 5 secs

// set up a function that gives the average of all freelanvers 
  //use a sum function / number of free lancers

// create a function that updates the average price whenever a new freelancer is added
const initialFreelancers = [
  {name: `Alice`, occupation: `Writer`, price: 30},
  {name: `Bob`, occupation: `Teacher`, price: 50},
  {name: `Carol`, occupation: `Programmer`, price: 70}
];
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const appendFreelancers = (freelancers) => {
  const nameList = document.querySelector(`#name-list`)
  const occupationList = document.querySelector(`#occupation-list`)
  const priceList = document.querySelector(`#price-list`)
  
  freelancers.forEach(freelancer => {
    const nameItem = document.createElement(`li`)
    const occupationItem = document.createElement(`li`)
    const priceItem = document.createElement(`li`)

    nameItem.textContent = freelancer.name;
    occupationItem.textContent = freelancer.occupation;
    priceItem.textContent = `$${freelancer.price}`;

    nameList.append(nameItem);
    occupationList.append(occupationItem)
    priceList.append(priceItem)
  })
 
}
let freelancerIndex = 0
const freelanceInterval = setInterval(() =>{
  const ulname = document.querySelector(`#name-list`);
  const ulocc = document.querySelector(`occupation-list`)
  const ulprice = document.querySelector(`price-list`)

  if(freelancerIndex < freelancers.length) {
    const freelancer = freelancers[freelancerIndex];
    const li = document.createElement('li');
    li.innerText = freelancer.name;
    ulname.append(li);
    freelancerIndex++;
  }
  if(freelancerIndex < freelancers.length) {
    const freelancer = freelancers[freelancerIndex];
    const li = document.createElement('li');
    li.innerText = freelancer.occupation;
    ulocc.append(li);
    freelancerIndex++;
  }
  if(freelancerIndex < freelancers.length) {
    const freelancer = freelancers[freelancerIndex];
    const li = document.createElement('li');
    li.innerText = freelancer.price;
    ulprice.append(li);
    freelancerIndex++;
  }



  if(freelancerIndex >= 5){
    clearInterval(freelanceInterval);}
}, 
5000);



document.addEventListener(``, ()=>{
  appendFreelancers(freelancers);
})

console.log(freelanceInterval)

