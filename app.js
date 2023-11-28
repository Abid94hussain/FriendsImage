const data = {
     Abid: {
          name: "Abid",
          age: 23,
          image: [
               {
                    img: "sazid1.jpg",
               },
               {
                    img: "sazid2.jpg",
               },
               {
                    img: "sazid5.jpg"
               }
          ]
     },
     Sazid: {
          name: "ChSazid",
          age: 25,
          image: [
               {
                    img: "sazid01.jpg",
               },
               {
                    img: "sazid02.jpg",
               },
               {
                    img: "sazid03.jpg",
               },
               {
                    img: "sazid06.jpg",
               },
               {
                    img: "sazid07.jpg"
               }
          ]
     }
};

let submit = document.querySelector("#submit");
let inpt = document.querySelector("#inpt");
let img = document.querySelector("#img");

submit.addEventListener("click", function () {
     if (inpt.value == "Abid") {
          for (let i = 0; i < 3; i++) {
               let im = document.createElement("img");
               let img2 = document.body.appendChild(im);
               img2.setAttribute("class","img2")
               img2.src = data.Abid.image[i].img;
          }
     }
     if (inpt.value == "Sazid") {
          for (let i = 0; i < 5; i++) {
               let im = document.createElement("img");
               let img2 = document.body.appendChild(im);
               img2.setAttribute("class","img2");
               img2.src = data.Sazid.image[i].img;
          }
     }
     inpt.value = "";
});