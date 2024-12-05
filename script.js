// getters
const paragraphs = document.getElementById('paragraphs');
const generate = document.getElementById('generate');
const outputArea = document.getElementById('output');

// Array of Trumpisms
const trumpsims = [
    "Make America Great Again.",
    "Nobody knows more about this than me.",
    "They're eating the dogs! They're eating the cats.",
    "I could stand in the middle of 5th Avenue and shoot somebody and I wouldn't lose voters.",
    "It's gonna be Huuuuuge.",
    "I don't have small hands and believe I've never had any compllaints in that area.",
    "We're going to build a wall, and it's going to be a big, beautiful wall.",
    "I know words. I have the best words.",
    "I'm a very stable genius.",
    "Fake news! Sad.",
    "We will win so much, you may even get tired of winning.",
    "Believe me, it’s tremendous.",
    "It’s going to be huge.",
    "I have a great relationship with everybody.",
    "Jobs, jobs, jobs!",
    "The best people. Just incredible people.",
    "Despite the constant negative press covfefe.",
    "Sometimes by losing a battle you find a new way to win the war.",
    "I see the disinfectant where it knocks it out in a minute. One minute. And is there a way we can do something like that, by injection inside or almost a cleaning?",
    "Do you mind if I sit back a little? Because your breath is very bad.",
    "And you know Mexico is going to pay for it!",
    "Nobody does it better than me, believe me...",
    "The numbers was the best there have ever been and quite possibly the best they'll ever be.",
    "Sometimes your best investments are the ones you don't make.",
    "If we drink bleach it will kill Covid.",
    "It's really the best code ever!",
    "Everything in life is luck.",
    "We're gonna build the biggest wall ever!",
    "It's gonna be beautiful.",
    "It was a perfect phonecall...",
    "Show me someone without an ego, and I'll show you a loser.",
    "I will be phenomenal to the women. I mean, I want to help women.",
    "We have it totally under control. It’s one person coming in from China. It’s going to be just fine.",
    "I could shoot someone on fifth avenue and I wouldn't lose any voters",
    "They're not sending their best",
    "I know words I have the best words. That Lorem Ipsum was created by the Chinese to devalue our dollar.",
    "What a great idea this was.",
    "When you see the other side chopping off heads, waterboarding doesn't sound very severe.",
    "My father gave me a small loan of a million dollars.",
    "Just tried watching Modern Family - written by a moron, really boring. Writer has the mind of a very dumb and backward child. Sorry Danny!"
]

/**
 * This function generates the paragraphs from the number inputted and 
 * returns it
 * @param {number} paragraphCount 
 */
function generateTrumpIpsum(paragraphCount) {
    output = '';
    // loop over the number of paragraphs
    for (let i = 0; i < paragraphCount; i++) {
        // get a random number from 3 to 7
        const sentenceCount = Math.floor(Math.random() * 5) + 3;
        // create an empty array to hold our sentences in
        const sentences = [];
        for (let j = 0; j < sentenceCount; j++) {
            const randomIndex = Math.floor(Math.random() * trumpsims.length);
            sentences.push(trumpsims[randomIndex]);
        }
        output += `<p>${sentences.join(' ')}</p>`;
    }
    return output;
}

generate.addEventListener('click', () => {
    let counter = parseInt(paragraphs.value);
    outputArea.innerHTML = generateTrumpIpsum(counter);
})

// const demoThing = document.getElementById('hey');

// demoThing.addEventListener('keydown', (event) => {
//     console.log(event.key);
// })
