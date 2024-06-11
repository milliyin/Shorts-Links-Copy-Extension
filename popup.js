const btn = document.getElementById("savebtn");
const copybtn = document.getElementById("copybtn");


if(btn){
    try {
        btn.addEventListener('click', () => {
            console.log("in popup")
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
                SaveLinktoarry(tabs[0].url);
            });
            
        });
        
    } catch (error) {
        console.log(error)
    }
}
if(copybtn){
    try {
        copybtn.addEventListener('click', () => {
            console.log("in popup")
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
                CopyLINKS();
            });
            
        });
        
    } catch (error) {
        console.log(error)
    }
}
var arr = [];
function SaveLinktoarry(link){
    arr.push(link);
    console.log(arr);
    
}
async function CopyLINKS(){
    try{
        const formattedLinks = arr.join('\n');
        await navigator.clipboard.writeText(formattedLinks);
        console.log(formattedLinks);
    }catch (error) {
        console.log(error)
    }
}