var SpeechRecognition = window.webitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = fuction(event) 
{

    console.log(event);

    var Content = eventresults[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}