function rd_fact(){
  // delete any previously generated facts
  let prev_facts = document.querySelectorAll("p");
  prev_facts.forEach((fact)=>{
    fact.parentNode.removeChild(fact);
  })
  //un-display previously generated img
  if (document.getElementById("shake_head").style.display == "block"){
    document.getElementById("shake_head").style.display = "none";
  } 
  if (document.getElementById("hipster").style.display == "block"){
    document.getElementById("hipster").style.display = "none";
  }

  //ask user how many rand facts they want
  let inputNumber;
  do {
    pmt = prompt('Please enter a number between 1 and 100:')
    console.log(pmt)
    inputNumber = parseInt(pmt);
    console.log(inputNumber);
    if (pmt == null) {
      console.log("cancel clicked")
      // If the user clicked "cancel", exit the loop
      break;
    } else if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
      // If the input is not a number between 1 and 100, warn the user
      alert('Invalid input! Please enter a number between 1 and 100.');
    }
  } while (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100);
  
  if (!isNaN(inputNumber)){
    //generate random images
    var randomNum = Math.floor(Math.random() * 2) + 1;
    if (randomNum == 1) {
      document.getElementById("shake_head").style.display = "block";
      document.getElementById("shake_head").classList.add("img_rd");
    } else {
      document.getElementById("hipster").style.display = "block";
      document.getElementById("hipster").classList.add("img_rd");
    }

    //api
    const params = { number: `${inputNumber}` };
    const url1 = 'https://dog-api.kinduff.com/api/facts';
    fetch(`${url1}?${new URLSearchParams(params)}`)
      .then(response => response.json())
      .then(data => {
        const factList = data.facts;
        let count = 1;
        for (let fact of factList) {
          factWithNum = count + ". " + fact;
          let p = document.createElement('p');
          let textNode = document.createTextNode(factWithNum);
          p.appendChild(textNode);
          document.getElementById('content_Rand').appendChild(p);
          count += 1;
        }
      })
  }

}

