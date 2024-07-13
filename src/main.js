const box = $(".navsilde").innerWidth()
const aHerf= $(".animat").innerHeight()
$(".sildeClose").animate({left: -box+"px"},500)
// console.log(aHerf);
$(".close-open").on("click",()=>{
    const box = $(".navsilde").innerWidth()
    console.log(box);
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
