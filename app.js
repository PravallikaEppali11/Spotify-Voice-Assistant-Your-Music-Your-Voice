const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    }

    else if(hr == 12) {
        speak("Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Jarvis");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello') || message.includes('hey jarvis') || message.includes('who are you')) {
        const finalText = "Hello I'm jarvis";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Jarvis";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
        if (response.status === 204) {
            console.log('Track is now playing!');
        } else {
            console.error('Error playing track:', response.status, response.statusText);
        }
    }

    else if(message.includes('open spotify')) {
        window.open("https://open.spotify.com", "_blank");
        const finalText = "Opening spotify";
        speech.text = finalText;
    }

    else if(message.includes('open devotional songs')) {
        window.open("https://open.spotify.com/genre/0JQ5DAqbMKFOTGtSOysEXE", "play");
        const finalText = "Opening devotional songs";
        speech.text = finalText;
    }

    else if(message.includes('open telugu songs')) {
        window.open("https://open.spotify.com/playlist/3p2tAkOvJqOPYjttRxEQD5", "_blank");
        const finalText = "Opening telugu songs";
        speech.text = finalText;
    }

    else if(message.includes('i am sleepy')) {
        window.open("https://open.spotify.com/playlist/37i9dQZF1DXa1rZf8gLhyz", "play");
        const finalText = "Opening sleepy songs";
        speech.text = finalText;
    }

    else if(message.includes('open travelling songs')) {
        window.open("https://open.spotify.com/playlist/7KVlS9nfyKCQBGDnKjd40c", "play");
        const finalText = "Opening travelling songs";
        speech.text = finalText;
    }
    
    else if(message.includes('open hindi sad songs')) {
        window.open("https://open.spotify.com/playlist/6eq5Zviu57AxTT02x0F3pE", "play");
        const finalText = "Opening hindi sad songs";
        speech.text = finalText;
    }

    else if(message.includes('open telugu sad songs')) {
        window.open("https://open.spotify.com/playlist/0c3IEZk9ki5GsMdcxFLD2G", "play");
        const finalText = "Opening telugu sad songs";
        speech.text = finalText;
    }

    else if(message.includes('open english sad songs')) {
        window.open("https://open.spotify.com/playlist/25ZzkJkOuYir9kHr2CqwPQ", "play");
        const finalText = "Opening english sad songs";
        speech.text = finalText;
    }

    else if(message.includes('open sad songs')) {
        window.open("https://open.spotify.com/album/71sb3x5BwKk87d7ZBOoSJY", "play");
        const finalText = "Opening sad songs";
        speech.text = finalText;
    }
    
    else if(message.includes('open my playlist')) {
        window.open("https://open.spotify.com/playlist/6dGq7xTdShfk2mOEwOyfR5", "play");
        const finalText = "Opening your playlist";
        speech.text = finalText;
    }

    else if(message.includes('open dj songs')) {
        window.open("https://open.spotify.com/playlist/5d4c8BsbClVkrNX92F5Zau", "play");
        const finalText = "Opening dj songs";
        speech.text = finalText;
    }

    else if(message.includes('open hanuman songs')) {
        window.open("https://open.spotify.com/playlist/5OGvLXrnjnLZVtkk5ayGIi", "play");
        const finalText = "Opening hanuman songs";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}