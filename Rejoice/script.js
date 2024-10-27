

function cursonEffect(){
    var page1content=document.querySelector("#page1-content")
var cursor=document.querySelector("#cursor")
page1content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1content.addEventListener("mouseenter", function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1content.addEventListener("mouseleave", function(dets){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}

cursonEffect()

function page2animation(){
    gsap.from("",{
        y:120,
        stagger:1.2,
        duration:1,
        scrollTrigger: {
            trigger:"scroll",
            scroller:"#main",
            start:"top 47%",
            end:"top 4%",
            markers:true,
            scrub:2
        }
    }
    )
}
page2animation()