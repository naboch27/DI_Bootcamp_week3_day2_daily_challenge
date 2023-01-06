
/*****
 * 
 * In todays exercise we will be creating a Mad Libs game.
 * If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank 
 * inputs with different word types (ie : noun, adjective, verb), and then a story is generated 
 * based on the words you chose, and sometimes the story is surprisingly funny.
 * In this exercise you work with the HTML code presented below.
 * Follow these steps :
 *Get the value of each of the inputs in the HTML file when the form is submitted. Remember
  the event.preventDefault()
   Make sure the values are not empty
 Write a story that uses each of the values.
Make sure you check the console for errors when playing the game.
Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
 */



let lib_button = document.getElementById("lib-button")

lib_button.addEventListener("click", functionClick)

function functionClick(event) {

    event.preventDefault()

    const noun = document.getElementById("noun").value

    const adjective = document.getElementById("adjective").value

    const person = document.getElementById("person").value

    const verb = document.getElementById("verb").value

    const place = document.getElementById("place").value

    const divstory = document.getElementById("story")

    if (noun == "" || adjective == " " || verb == " " || place == " " || person== "") {

        console.log(" Sorry ,the input is empty")

    } else {
        //console.log("story",story(noun, adjective, person, verb, place))

        divstory.textContent = story(noun, adjective, person, verb, place)
    }
}

function story(noun, adjective, person, verb, place) {

    return  `Je suis ${noun},mon adjective  ${adjective}, mon idol est ${person} 
    "le verbe qui me qualifie est ${verb}  , avec son adjectif ${place} `

}



