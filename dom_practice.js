console.log ('Hello World!')

//Use document.querySelector() to find your an element
//cont class = document.querySelector('.second')

//Use document.querySelectorAll() to find a collection of elements in the DOM.
//const listItems = document.querySelectorAll('li')



//Get the element with the id you assigned and save it to a variable . Console.log that variable.
//let list = document.getElementById('List');

//googled this code to find how to set the list and create a variable 
//Query and change some elements

//no idea where to start 
//Make sure you get an array:

//And not this (a single element)


// did not know how to finish the first part with the console.log variables and don't know where to start. 


    var list = document.getElementById("List");
    list 

    //trying to change color, not sure why it won't work, if selecting li, it should change the color. 
    const listItems = document.querySelectorAll('li')
    listItems[1].style.color ='red'


    //🔵 Using JavaScript, change the innerText of your h2 
 console.log('Welcome to San Francisco')
document.querySelector('h2').innerText = 'Welcome to San Francisco!'


// // Change the style/color of the text of your ONE of your li elements to your favorite html color
// listItems[2].style.color ='red'


//Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
//console.log('Bay Bridge')
document.querySelector('li').innerText = 'Jamboree sandwich at the Jambo-ree'



//Create a new img element using document.createElement()
//not sure how to use this, 
//attempt 3
//Variable = element.createElement("element name");
// var newImg = document.createElement("img");
// newImg.setAttribute("src", "SF2");

//attempt 4
//var img = document.createElement('img'); 
//img.src = 'SF2'; 

//attempt 5
//created a img ID in Html and then created a image tag here, just can't update the size :) 
//creating a new element in called img and then addding a picture
const newBridge = document.createElement('img');
//Add an attribute for the source url of your new image using .setAttribute()
newBridge.setAttribute('src', 'SF2.jpg'); 
// Append it to your page, somewhere, using .appendChild()
document.body.appendChild(newBridge);
image.style.width = '1000'
image.style.height = '600'

//Select any element using querySelector and save it to a variable
//and remove it from your page using .remove()

//attempt # 10
//crated an element in html
// const thirdList = document.querySelector('.third');
// thirdList.appendChild(Alactraz);
// Alcatraz.remove()

//code not working 
//document.remove('li')[1].remove()
//I have tried everything and nothing works, not even index. :(
document.querySelectorAll('.second')[1].remove()









//const second = document.querySelector('.second')
//second.appendChild(Jamboree sandwich at the Jambo-ree)


//Add an attribute for the source url of your new image using .setAttribute()

//Append it to your page, somewhere, using .appendChild()


//Check that your image has appeared


//Select any element using querySelector and save it to a variable




// //function toggleText(element){
//     var text = document.getElementById(element.id).textContent;

//     if (text == 'Edit') {
//         text = 'Done';
//     } else {
//         text = 'Edit';
//     }
// }


