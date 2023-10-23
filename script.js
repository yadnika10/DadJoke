const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const audio = new Audio("laugh.mp3");

const apiKey = "Yxy+Xy+T+diU4JjgeAqfUw==Se6u9LHJ6uQHtpcT";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

const apiurl = "https://api.api-ninjas.com/v1/jokes?limit=1";
console.log(apiurl);

async function getJoke(){
    try{
        jokeElement.innerText = "Updating...";
        btnElement.disabled = true;
        btnElement.innerText = "Loading...";
        const response = await fetch(apiurl,options);
        const data = await response.json();
        console.log(data);

        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke 😛";

        jokeElement.innerText = data[0].joke + "😆";
        audio.play();
    }catch(error){
        jokeElement.innerText = "Sorry No Joke..!"
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke 😛";
    }
}

btnElement.addEventListener('click',getJoke);


//Share on media
const shareTwitterButton = document.getElementById('share-twitter');
const shareFacebookButton = document.getElementById('share-facebook');
const shareWhatsAppButton = document.getElementById('share-whatsapp');

shareTwitterButton.addEventListener('click',()=>{
    try{
        const joke = "Your joke Shared on"
        shareOnSocialMedia('Twitter',joke);
    }
    catch(error){
        console.log("error");
    }
})
shareFacebookButton.addEventListener('click',()=>{
    try{
        const joke = "Your joke Shared on"
        shareOnSocialMedia('Facebook',joke);
    }
    catch(error){
        console.log("error");
    }
})
shareWhatsAppButton.addEventListener('click',()=>{
    try{
        const joke = "Your joke Shared on"
        shareOnSocialMedia('Whatsapp',joke);
    }
    catch(error){
        console.log("error");
    }
})
function shareOnSocialMedia(platform, text) {
    alert(`${text} ${platform}`);
}