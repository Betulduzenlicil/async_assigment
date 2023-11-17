const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const button = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const date = document.getElementById("date");


// sayfanın yüklenme anı
window.addEventListener('load', () => {
    containerDiv.style.display="none";
    setTimeout(()=>{
        containerDiv.style.display="flex";
        loadingDiv.style.display="none";
        // apıRequest()
    },3000)
    apıRequest();
    cats();
});



// guncel tarih ve zaman 
const outputDate=()=>{
    let currentDate=new Date(); //suanki zaman 
    let datedate = currentDate.toLocaleDateString(); // localden suanki tarih
    let time = currentDate.toLocaleTimeString(); // localden suanki saat

    let currentDateTimeString=datedate + "," + time
    date.textContent = currentDateTimeString

}

setInterval(outputDate,1000)

//API isteme
let veri=""
const apıRequest=()=>{
   
    // cardDiv.innerHTML=`<img src="./img/loading.gif" />`
    
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((res)=>{
        if (!res.ok) {
            throw new Error (`Hata: ${res.status}`) 
        }else{
           
            return res.json()
        }
    }).then((response)=>{
        veri=data
        cats(response)

    })
    .catch((err)=>cardDiv.innerHTML=`<img src="./img/loading.gif" />`)


    const cats = (data) => {
        data.forEach((image) => {
            cardDiv.innerHTML =""
            data.forEach((image)=>{
                const images=      `
                <div class="col-12 col-sm-6 col-lg-4">
                <div style="height:200px;">
                  <img src="${image.url}" class="w-100 h-100" alt="...">
                </div>
          </div>
                `;
                cardDiv.innerHTML+=images
            })
      
        })
        
    }

}


//buton tıklandığında 

button.addEventListener("click", apıRequest )

