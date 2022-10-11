//get the values from the interface
//starts or controller function
function getValues() {
  //get the calues from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse the value into integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //validation that input is an int
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //call generateNumbers
    let numbers = generateNumbers(startValue, endValue);

    //diplay results on the page
    displayNumbers(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only intergers are allowed for Hundo",
    });
  }
}

//generate numbers from startvalue to the endvalue
//logic function(s)
function generateNumbers(startValue, endValue) {
  let numbers = [];

  //we want to get all numbers from start to end
  for (let i = startValue; i <= endValue; i++) {
    
    //this will execute in a loop until index = eValue
    numbers.push(i);
  }

  return numbers;
}

//display numbers with even numbers in bold
//display or view function
function displayNumbers(numbers) {
  let className = "even";
  let templateRows = "";

  //checking to see if the remainder of the number is equal to 0.
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }

    //creates rows in table
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}
