var translateBtn=document.querySelector("#btn-translate");
var input=document.querySelector(".in-textarea");
var output=document.querySelector(".out-textarea");

translateBtn.addEventListener('click',function onClick(){
    var inputText=input.value;
    var url="https://api.funtranslations.com/translate/pirate.json"+"?"+"text="+inputText;
     fetch(url)
    .then(response => response.json())
    .then(json => output.innerText=json.contents.translated)
    .catch(errorHandler)
});
function errorHandler(error)
{
    alert("Some error occured .Please try again later");
}