const translateBtn=document.querySelector("#btn-translate");
const input=document.querySelector(".in-textarea");
const output=document.querySelector(".out-textarea");

translateBtn.addEventListener('click',function onClick(){
    const inputText=input.value;
    const url="https://api.funtranslations.com/translate/pirate.json"+"?"+"text="+inputText;
     fetch(url)
    .then(response => response.json())
    .then(json => output.innerText=json.contents.translated)
    .catch(errorHandler)
});
const errorHandler=error=>alert("Some error occured .Please try again later");
