const hash = {"Weed": "find a way to keep money to smoke",
         "Women": "Start Dressing nice and smell well and KEEP money",
          "Traveling": "get a part time job for an airline with benefits",
        "Partying": "learn how to be a Dj or a stripper",
        "Food":"learn how to cook,get stamps,get job to buy food",
        "TV":"Handle your business so you can builtguilt free watching",
        "Alone_time": "just disappear"
        }

const response = document.getElementById("response")
const something = document.createElement("p");
const val =document.createElement('h4')
      val.classList.add("sug")
response.appendChild(something)
//gives us the random key
   function switcher(){       //.keys and . val are objects methods
        const kays = Object.keys(hash).length
       const keys = Object.keys(hash); // this ian array of keys
       // the length is 4 
        const num = Math.floor(Math.random() * (0 +kays) );// the plus one makes it exclusive //to make a radom you make the range after floor and random and then plus one 
        const randomnum = keys[num]//randkey
        something.innerText = `${randomnum}`;
       }


         // set interval ws the method we needed
         const timerId = setInterval(switcher,1000)
         // after a click event  clearInterval(timerId)

      response.appendChild(something)

      //events
         something.addEventListener('click',function(){
             clearInterval(timerId)
             //iterating throughgt the hash
            for(const prop in hash){// prop is a key
               if(something.innerHTML === prop){
                   response.appendChild(val)//the val is a element
                   val.innerText = `${hash[prop]}`
                }
               } 
              }
              );

        something.addEventListener('dblclick',function(){
            something.remove();
        })


         

         

