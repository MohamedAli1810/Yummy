const box = $(".navsilde").innerWidth()
const aHerf= $(".animat").innerHeight()
$(".sildeClose").animate({left: -box+"px"},500)
// console.log(aHerf);
$(".close-open").on("click",()=>{
    const box = $(".navsilde").innerWidth()
    // console.log(box);
    if ($(".sildeClose").css('left') ==  "0px") {
        $(".sildeClose").animate({left: -box+"px"},1000)
        $(".close-open").toggle()
        // $(".animat a").animate({height: aHerf+"184px"});
    }else{
        $(".sildeClose").animate({left:  "0px" },1000)
        $(".close-open").toggle()
        // $(".animat a").animate({height: aHerf+'px'},1000);
        // console.log("open");
    }
})
$(document).ready(function() {
    $("#Loading").hide();
    getapi();
});
let arr = [];
async function getapi() {
    $("#Loading").fadeIn(500);
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const respo = await api.json();
    arr = respo.meals;
    display(arr);
    $("#Loading").fadeOut(500);


}
function display(photos) {
    let cartona = '';
    for (let i = 0; i < photos.length; i++) {
        cartona += `
            <div onclick="getDetails(${photos[i].idMeal})" class="rounded-md group relative cursor-pointer overflow-hidden">
                <div>
                    <div>
                        <img src="${photos[i].strMealThumb}" alt="" class="w-[100%] rounded-md">
                    </div>
                </div>
                <div class="layer rounded-md bg-white bg-opacity-50 absolute top-0 bottom-0 start-0 end-0 flex items-center translate-y-full group-hover:-translate-y-0 duration-700">
                    <h3 class="font-bold text-3xl">${photos[i].strMeal}</h3>
                </div>
            </div>
        `;

    }

    document.getElementById("food").innerHTML = cartona;

}
$(document).ready(function() {
    $("#Loading").hide();
    getapi();
});
let arrdet = [];
async function getDetails(det) {
    $("#Loading").fadeIn(500);
    const apidet = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${det}`);
    const respodet = await apidet.json();
    arrdet = respodet.meals;
    display1(arrdet);
    $("#Loading").fadeOut(500);
}
$(document).ready(function() {
    $("#Loading").hide();
    getDetails();
});
function display1(deta) {
    let cartona = '';
    for (let i = 0; i < arrdet.length; i++) {
        cartona += `
                <div class="w-[30%] mt-11">
                    <img src="${deta[i].strMealThumb}" alt="" class="w-[100%] rounded-md">
                    <h2 class="text-white text-3xl">${deta[i].strMeal}</h2>
                </div>
                <div class="w-[65%] ps-5 mt-11">
                    <h2 class="text-white text-4xl">Instructions</h2>
                    <p class="text-white py-4">${deta[i].strInstructions}</p>
                    <h3 class="text-white pb-5 text-4xl"><span class="font-bold">Area : </span>${deta[i].strArea}</h3>
                    <h3 class="text-white pb-5 text-4xl"><span class="font-bold">Category : </span>${deta[i].strCategory}</h3>
                    <h3 class="text-white pb-5 text-4xl"><span class="font-bold">Recipes  </span>:</h3>
                    <ul class="flex flex-wrap  gap-6">
                        <li class="border rounded-md p-1 text-center text-teal-700 text-nowrap bg-cyan-100">${deta[i].strMeasure1} ${deta[i].strIngredient1}</li>
                        <li class="border rounded-md p-1 text-center text-teal-700 text-nowrap bg-cyan-100">${deta[i].strMeasure2} ${deta[i].strIngredient2}</li>
                        <li class="border rounded-md p-1 text-center text-teal-700 text-nowrap bg-cyan-100">${deta[i].strMeasure3} ${deta[i].strIngredient3}</li>
                        <li class="border rounded-md p-1 text-center text-teal-700 text-nowrap bg-cyan-100">${deta[i].strMeasure4} ${deta[i].strIngredient4}</li>
                        <li class="border rounded-md p-1 text-center text-teal-700 text-nowrap bg-cyan-100">${deta[i].strMeasure5} ${deta[i].strIngredient5}</li>
                        <li class="border rounded-md p-1 text-center text-teal-700 text-nowrap bg-cyan-100">${deta[i].strMeasure6} ${deta[i].strIngredient6}</li>
                    </ul>
                    <h3 class="text-white pb-5 text-4xl"><span class="font-bold">Tags </span>:</h3>
                    <ul class="flex flex-wrap pb-6 gap-6">
                        <li class="border rounded-md p-1 text-center text-rose-950 text-nowrap bg-rose-200">${deta[i].strTags}</li>
                    </ul>
                    <a href="${deta[i].strSource}"  target="_blank" class="p-3 me-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-800  active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-900">Source</a>
                    <a href="${deta[i].strYoutube}"  target="_blank" class="p-3 rounded-md bg-red-600 text-white hover:bg-red-800  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-900">YouTube</a>
                </div>
                
        `;
 
    }
    document.getElementById("details").innerHTML = cartona ;
    document.querySelector("#divSearch").classList.add('hidden')
    document.querySelector("#food").classList.add('hidden')
    document.querySelector("#contact_us").classList.add('hidden')
    document.querySelector("#divCategoryDet").classList.add('hidden')
    document.querySelector("#divArea").classList.add('hidden')
    document.querySelector("#divIngDet").classList.add('hidden')
    document.querySelector("#details").classList.remove('hidden') 
}
let arrSer =[]
async function getSearchBN(name){
    $("#Loading").fadeIn(500);
    const apiSer = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const respoSer = await apiSer.json();
    arrSer =  respoSer.meals || [];
    $("#Loading").fadeOut(500);
}
$(document).ready(function() {
    $("#Loading").hide();
    getSearchBN();
});
let arrSerLet =[]
async function getSearchLet(nameL){
    $("#Loading").fadeIn(500);
    const apiSerLet = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${nameL}`);
    const respoSerLet = await apiSerLet.json();
    arrSerLet =  respoSerLet.meals || []; 
    $("#Loading").fadeOut(500);
}
$(document).ready(function() {
    $("#Loading").hide();
    getSearchLet();
});
$('#Search').on("click", ()=>{
    document.querySelector("#details").classList.add('hidden')
    document.querySelector("#divAreaDet").classList.add('hidden');
    document.querySelector("#contact_us").classList.add('hidden')
    document.querySelector("#food").classList.add('hidden') 
    document.querySelector("#divSearch").classList.remove('hidden')
    $('#byNameS').on("keyup", function(){
        let getname = $(this).val().toLowerCase()
        getSearchBN(getname).then(()=>{
           let cartonaSer = ''
           for (let i = 0; i < arrSer.length; i++) {
            cartonaSer +=`
                    <div class="rounded-md group relative overflow-hidden ">
                        <div class=" ">
                            <div>
                                <img src="${arrSer[i].strMealThumb}" alt="" class="w-[100%] rounded-md">
                            </div>
                        </div>
                        <div class="layer rounded-md bg-white bg-opacity-50 absolute top-0 bottom-0 start-0 end-0 flex items-center translate-y-full group-hover:-translate-y-0 duration-700">
                            <h3 class="font-bold text-3xl">${arrSer[i].strMeal}</h3>
                        </div>
                    </div>
            `           
           }
           document.getElementById('displaySer').innerHTML = cartonaSer
        })
    }) 
    $('#byLetterS').on("keyup", function(){
        let getnameLet = $(this).val().toLowerCase()
        getSearchLet(getnameLet).then(()=>{
           let cartonaSerLet = ''
           for (let i = 0; i < arrSerLet.length; i++) {
            cartonaSerLet +=`
                    <div class="rounded-md group relative overflow-hidden ">
                        <div class=" ">
                            <div>
                                <img src="${arrSerLet[i].strMealThumb}" alt="" class="w-[100%] rounded-md">
                            </div>
                        </div>
                        <div class="layer rounded-md bg-white bg-opacity-50 absolute top-0 bottom-0 start-0 end-0 flex items-center translate-y-full group-hover:-translate-y-0 duration-700">
                            <h3 class="font-bold text-3xl">${arrSerLet[i].strMeal}</h3>
                        </div>
                    </div>
            `           
           }
           document.getElementById('displaySer').innerHTML = cartonaSerLet
        })
    })   
})
let arrCat = [];
async function getCategories() {
    $("#Loading").fadeIn(500);
    const apiCat = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const respoCat = await apiCat.json();
    arrCat = respoCat.categories;
    $("#Loading").fadeOut(500);
    $('#Categories').on("click", () => {
        document.querySelector("#divSearch").classList.add('hidden')
        document.querySelector("#divAreaDet").classList.add('hidden');
        document.querySelector("#contact_us").classList.add('hidden')
        document.querySelector("#food").classList.add('hidden');
        document.querySelector("#divCategory").classList.remove('hidden');
        let cartonaCat = '';
        for (let i = 0; i < arrCat.length; i++) {
            cartonaCat += `
                <div onclick="getCatDet('${arrCat[i].strCategory}')" id="pressdiv${i}" class="rounded-md group relative cursor-pointer overflow-hidden">
                    <div>
                        <div>
                            <img src="${arrCat[i].strCategoryThumb}" alt="" class="w-[100%] rounded-md">
                        </div>
                    </div>
                    <div class="layer rounded-md bg-white bg-opacity-50 absolute top-0 bottom-0 start-0 end-0 flex justify-center flex-col text-center translate-y-full group-hover:-translate-y-0 duration-700">
                        <h3 class="font-bold text-3xl">${arrCat[i].strCategory}</h3>
                        <p>${arrCat[i].strCategoryDescription.split(" ", 25).join(" ")}...</p>
                    </div>
                </div>
            `;
        }
        document.getElementById("divCategory").innerHTML = cartonaCat;
    });
}
$(document).ready(function() {
    $("#Loading").hide();
    getCategories();
});  
let arrCatDet = [];
async function getCatDet(catDet) {
    $("#Loading").fadeIn(500);
    const apiCatDet = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catDet}`);
    const respoCatDet = await apiCatDet.json();
    arrCatDet = respoCatDet.meals;
    $("#Loading").fadeOut(500);
    document.querySelector("#divCategory").classList.add('hidden');
    document.querySelector("#divCategoryDet").classList.remove('hidden');
    let cartonaCatDet = '';
    for (let i = 0; i < arrCatDet.length; i++) {
        cartonaCatDet += `
            <div onclick="getDetails('${arrCatDet[i].idMeal}')" id="igetCatDet" class="rounded-md group relative cursor-pointer overflow-hidden">
                <div>
                    <div>
                        <img src="${arrCatDet[i].strMealThumb}" alt="" class="w-[100%] rounded-md">
                    </div>
                </div>
                <div class="layer rounded-md bg-white bg-opacity-50 absolute top-0 bottom-0 start-0 end-0 flex items-center  translate-y-full group-hover:-translate-y-0 duration-700">
                    <h3 class="font-bold text-3xl">${arrCatDet[i].strMeal}</h3>
                </div>
            </div>
        `;
    }
    document.getElementById("divCategoryDet").innerHTML = cartonaCatDet;
}
$(document).ready(function() {
    $("#Loading").hide();
    getCatDet();
});
let arrAre = [];
async function getArea() {
    $("#Loading").fadeIn(500);
    const apiAre = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const respoAre = await apiAre.json();
    arrAre = respoAre.meals;
    $("#Loading").fadeOut(500);
    updateAreaDisplay(arrAre);
}
$(document).ready(function() {
    $("#Loading").hide();
    getArea();
});
function updateAreaDisplay() {
    let cartonaAre = '';
    for (let i = 0; i < arrAre.length; i++) {
        cartonaAre += `
            <div onclick="getAreDet('${arrAre[i].strArea}')" id="pressdivAre${i}" class="rounded-md group  flex justify-center flex-col text-center cursor-pointer overflow-hidden">
                <div>
                    <div>
                        <i class="fa-solid fa-house-laptop text-5xl text-white"></i>
                    </div>
                </div>
                <div class="text-white">
                    <h3 class="font-bold text-3xl">${arrAre[i].strArea}</h3>
                </div>
            </div>
        `;
    }
    document.getElementById("divAreaDet").innerHTML = cartonaAre;
}
$('#Area').on("click", () => {
    document.querySelector("#divSearch").classList.add('hidden')
    document.querySelector("#details").classList.add('hidden')
    document.querySelector("#contact_us").classList.add('hidden')
    document.querySelector("#food").classList.add('hidden');
    document.querySelector("#divAreaDet").classList.remove('hidden');
    updateAreaDisplay();
});
getArea();
let arrAreDet = [];
async function getAreDet(AreDet) {
    $("#Loading").fadeIn(500);
    const apiAreDet = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreDet}`);
    const respoAreDet = await apiAreDet.json();
    arrAreDet = respoAreDet.meals;
    $("#Loading").fadeOut(500);
      document.querySelector("#details").classList.add('hidden')
      document.querySelector("#divAreaDet").classList.add('hidden')
      document.querySelector("#divArea").classList.remove('hidden')
        let cartonaAreDet = '';
        for (let i = 0; i < arrAreDet.length ; i++) {
            cartonaAreDet += `
                <div onclick="getDetails('${arrAreDet[i].idMeal}')" id="igetAreDet${i}" class="rounded-md group relative cursor-pointer overflow-hidden">
                    <div>
                        <div>
                            <img src="${arrAreDet[i].strMealThumb}" alt="" class="w-[100%] rounded-md">
                        </div>
                    </div>
                    <div class="layer rounded-md bg-white bg-opacity-50 absolute top-0 bottom-0 start-0 end-0 flex items-center translate-y-full group-hover:-translate-y-0 duration-700">
                        <h3 class="font-bold text-3xl">${arrAreDet[i].strMeal}</h3>
                    </div>
                </div>
            `;
        }
        document.getElementById('divArea').innerHTML = cartonaAreDet;
} 
$(document).ready(function() {
    $("#Loading").hide();
    getAreDet();
});
let arrIng = [];
async function getIng() {
    $("#Loading").fadeIn(500);
    const apiIng = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const respoIng = await apiIng.json();
    arrIng = respoIng.meals;
    $("#Loading").fadeOut(500);
    updateIngDisplay();
}
function updateIngDisplay() {
    let cartonaIng = '';
    for (let i = 0; i < arrIng.length; i++) {
        let description = arrIng[i].strDescription ? arrIng[i].strDescription.split(" ", 25).join(" ") : "No description available";
        cartonaIng += `
            <div onclick="getIngDet('${arrIng[i].strIngredient}')" id="pressdivAre${i}" class="rounded-md group flex justify-center flex-col text-center cursor-pointer overflow-hidden">
                <div>
                    <div>
                        <i class="fa-solid fa-drumstick-bite text-5xl text-white"></i>
                    </div>
                </div>
                <div class="layer text-white">
                    <h3 class="font-bold text-3xl">${arrIng[i].strIngredient}</h3>
                    <p>${description}...</p>
                </div>
            </div>
        `;
    }
    document.getElementById("divIng").innerHTML = cartonaIng;
}
$('#Ingredients').on("click", () => {
    document.querySelector("#divSearch").classList.add('hidden')
    document.querySelector("#details").classList.add('hidden')
    document.querySelector("#divAreaDet").classList.add('hidden');
    document.querySelector("#contact_us").classList.add('hidden')
    document.querySelector("#food").classList.add('hidden');
    document.querySelector("#divIng").classList.remove('hidden');
    updateIngDisplay();
});
$(document).ready(function() {
    $("#Loading").hide();
    getIng();
});
let arrIngDet = [];
async function getIngDet(IngDet) {
    $("#Loading").fadeIn(500);
    const apiIngDet = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngDet}`);
    const respoIngDet = await apiIngDet.json();
    arrIngDet = respoIngDet.meals;
    $("#Loading").fadeOut(500);
      document.querySelector("#divIng").classList.add('hidden')
      document.querySelector("#divIngDet").classList.remove('hidden')
        let cartonaIngDet = '';
        for (let i = 0; i < arrIngDet.length ; i++) {
            cartonaIngDet += `
                <div onclick="getDetails('${arrIngDet[i].idMeal}')" id="igetAreDet${i}" class="rounded-md group relative cursor-pointer overflow-hidden">
                    <div>
                        <div>
                            <img src="${arrIngDet[i].strMealThumb}" alt="" class="w-[100%] rounded-md">
                        </div>
                    </div>
                    <div class="layer rounded-md bg-white bg-opacity-50 absolute top-0 bottom-0 start-0 end-0 flex items-center translate-y-full group-hover:-translate-y-0 duration-700">
                        <h3 class="font-bold text-3xl">${arrIngDet[i].strMeal}</h3>
                    </div>
                </div>
            `;
        }
        document.getElementById('divIngDet').innerHTML = cartonaIngDet;
} 
$(document).ready(function() {
    $("#Loading").hide();
    getIngDet();
});
$("#Contact").on("click",()=>{
{
    $("#Loading").fadeIn(500);
function openContactUs() {
    $('#food').addClass('hidden');
    $('#divArea').addClass('hidden');
    $('#divSearch').addClass('hidden');
    $('#divCategoryDet').addClass('hidden');
    $('#divIng').addClass('hidden');
    $('#contact_us').removeClass('hidden');
  }
  $("#Loading").fadeOut(500);
  $(document).ready(function() {
    $("#Loading").hide();
    openContactUs();
});
    let nameInput = false;
    let emailInput = false;
    let phoneInput = false;
    let ageInput = false;
    let passwordInput = false;
    let repasswordInput = false; 
    $(".name-input").on("focus", () => {
        nameInput = true
    })
    $(".email-input").on("focus", () => {
        emailInput = true
    })
    $(".phone-input").on("focus", () => {
        phoneInput = true
    })
    $(".age-input").on("focus", () => {
        ageInput = true
    })
    $(".password-input").on("focus", () => {
        passwordInput = true
    })
    $(".repassword-input").on("focus", () => {
        repasswordInput = true
    }) 
    function inputsValidation() {
      if (nameInput) {      
            if (nameValidation()) {
                $("#nameAlert").removeClass("block").addClass("hidden");
            } else {
                $("#nameAlert").removeClass("hidden").addClass("block");
            }
        }
        if (emailInput) {
            if (emailValidation()) {
                $("#emailAlert").removeClass("block").addClass("hidden");
            } else {
                $("#emailAlert").removeClass("hidden").addClass("block");
            }
        }
        if (phoneInput) {
            if (phoneValidation()) {
                $("#phoneAlert").removeClass("block").addClass("hidden");
            } else {
                $("#phoneAlert").removeClass("hidden").addClass("block");
            }
        }
        if (ageInput) {
            if (ageValidation()) {
                $("#ageAlert").removeClass("block").addClass("hidden");
            } else {
                $("#ageAlert").removeClass("hidden").addClass("block");
            }
        }
        if (passwordInput) {
            if (passwordValidation()) {
                $("#passwordAlert").removeClass("block").addClass("hidden");
            } else {
                $("#passwordAlert").removeClass("hidden").addClass("block");
            }
        }
        if (repasswordInput) {
            if (repasswordValidation()) {
                $("#repasswordAlert").removeClass("block").addClass("hidden");
            } else {
                $("#repasswordAlert").removeClass("hidden").addClass("block");
            }
        }
        if (nameValidation() &&
            emailValidation() &&
            phoneValidation() &&
            ageValidation() &&
            passwordValidation() &&
            repasswordValidation()) {
            $(".submit-btn").removeAttr("disabled")
        } else {
            $(".submit-btn").attr("disabled", true)
        }
    } 
    function nameValidation() {
        return (/^[a-zA-Z ]+$/.test($(".name-input").val()))
    }
    function emailValidation() {
        return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($(".email-input").val()))
    }
    function phoneValidation() {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test($(".phone-input").val()))
    }
    function ageValidation() {
        return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test($(".age-input").val()))
    }
    function passwordValidation() {
        return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test($(".password-input").val()))
    }
    function repasswordValidation() {
        return $(".repassword-input").val() == $(".password-input").val()
    }
    }
})