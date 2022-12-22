
 let  memorygameblocks = document.querySelector(".memory-game-blocks")
 let gameblock = memorygameblocks.querySelectorAll(".game-block")
 let tries = document.querySelector('.tries') 
 let wrongtries = tries.querySelector("span")  
 let username = document.querySelector('.name').querySelector("span")
 let controlbtn = document.querySelector(".control-buttons")
 let startBtn = controlbtn.querySelector("span")   
 let timer = document.querySelector(".info-container").querySelector(".timer")   
 let reset = document.querySelector(".reset")   

    





startBtn.onclick = function(){
    controlbtn.classList.remove('control-buttons')
     username.textContent
     username.textContent = prompt("what is your name")
    if(!username.textContent){
        username.textContent = "unknown"
    }

    
    settingtimer()

    
    
}


function settiming(){
     
        q++
         if(q == 61){
             x++
             q=0
         }
         if(x == 60){
             y++
         }
         if(q == 60){
             alert(`Game over your your wrong tries is ${wrongtries.textContent}`)
             
             clearInterval(yy)
             settingtimer()
             
         }else if(memorygameblocks.querySelectorAll(".has-match").length == memorygameblocks.children.length){
             alert("u win")
             clearInterval(yy)
             settingtimer()  
         }
     
         timer.innerHTML = y+":"+x+":"+q
     }



 function settingtimer(){
    for(let rr of memorygameblocks.querySelectorAll(".has-match")){
        rr.classList.remove("has-match")
    }
    for(let rr of memorygameblocks.querySelectorAll(".is-flipped")){
        rr.classList.remove("is-flipped")
    }
    x=0
    y=0
    q=0
    wrongtries.textContent = 0
    timer.innerHTML = y+":"+x+":"+q
   yy = setInterval(settiming, 1000);

 }


 function resetfunc(){
     clearInterval(yy)
    settingtimer()
      
 }

reset.onclick = resetfunc
 


    wrongtries.textContent = 0
for(let rr of document.querySelectorAll(".face")){
    rr.addEventListener("click" , () => false)
}


function round(){
   settingtimer
}




function managment(elem){
    elem.classList.add("is-flipped")
    let y = memorygameblocks.querySelectorAll(".is-flipped")
    let x = y.length
    let elem1 = y[0]
    let elem2 = y[1]
    if(x == 2){
        if(elem1.dataset.technology == elem2.dataset.technology){
            elem1.classList.remove("is-flipped")
            elem2.classList.remove("is-flipped")
            elem1.classList.add("has-match")
            elem2.classList.add("has-match")
        }
         if(elem1.dataset.technology !== elem2.dataset.technology){
            wrongtries.textContent++
            setTimeout(() => {
                elem1.classList.remove("is-flipped")
                elem2.classList.remove("is-flipped")
            }, 300);
                
           }
        }
        
    }


   
  
    
   


    function shuffle(){
       
        let arr = []
        let set = new Set()
        
        while(true){
            let x = Math.random()
            arr.push(Math.floor(x * memorygameblocks.children.length ))
            set.add(Math.floor(x * memorygameblocks.children.length ))
            if(set.size >= memorygameblocks.children.length){
                break
            }
        }
        arr = [...set.values()]

      let array = [...gameblock]

       array.forEach((item) =>{
           item.style.order = arr[Math.floor(Math.random() * array.length) ]
       }) 

        
    } 

    shuffle()

  for(let rr of gameblock){
   rr.addEventListener("click" , function(){
        managment(rr)
    })
}


