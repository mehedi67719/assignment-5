// call button 

const callbuttons=document.querySelectorAll(".call-btn");

for(const callbutton of callbuttons){
    callbutton.addEventListener("click",function(){
               const presentcoin=Number(document.getElementById("coin").innerText);
        if(presentcoin<20){
            alert("you have no enough coin");
            return
        }
        const card=callbutton.closest("div.card-container")

        const servicename=card.querySelector("h3").innerText;
        const servicenumber=card.querySelector("p.number").innerText;

        alert("calling " + servicename + " at " + servicenumber);


     

        const newcoin=(presentcoin)-20;
        document.getElementById("coin").innerText=newcoin;






        // call history 
        const callhistory=document.getElementById("call-history");
        const newhistory=document.createElement("div");
        newhistory.classList.add("bg-white","p-4","rounded-lg","mt-4","drop-shadow-lg", "border-solid","border-[1px]","mx-[5px]");

        newhistory.innerHTML=`<div class="flex justify-between items-center">
            <div>
            <h2>${servicename}</h2>
            <p>${servicenumber}</p>
            </div>
            <p>${new Date().toLocaleTimeString()}</p>
            
        </div>`;

        callhistory.appendChild(newhistory);
        



    })
}



// call history clear 

document.getElementById("call-history-clear").addEventListener("click",function(){
    document.getElementById("call-history").innerText="";

})





// add hart count 

let hartcount=Number(document.getElementById("hart-count").innerText);
const hart_icon=document.querySelectorAll(".hart-icon");

for(const hart of hart_icon){
    hart.addEventListener("click",function(){
        hartcount=hartcount+1;

        document.getElementById("hart-count").innerText=hartcount;
    })
}




// copy count 



let  copycount=Number(document.getElementById("copy-count").innerText);

const copybtn=document.querySelectorAll(".copy-btn");

for(const copy of copybtn){
    copy.addEventListener("click",function(){
        alert("Text copied successfully!")
        copycount=copycount+1;

        document.getElementById("copy-count").innerText=copycount;
    })
}



// hotlline number copy 


const hotlinenumbeers=document.querySelectorAll(".number");
for(const hotlinenumbeer of  hotlinenumbeers){
    hotlinenumbeer.addEventListener("click",function(){
        const text=hotlinenumbeer.innerText;
        navigator.clipboard.writeText(text);
    })
}

