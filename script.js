function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();


  var muscurser = document.querySelector("#muscurser")

  window.addEventListener("mousemove", function(dets){
    muscurser.style.top = dets.y + "px";
    muscurser.style.left = dets.x + "px";
  })





  var bigcrsr = document.querySelectorAll(".bigcrsr")

  bigcrsr.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      muscurser.style.scale = 2.5;
      muscurser.style.opacity =  0.5;
      muscurser.style.backgroundColor = "#ff3a75";
      
    })

    elem.addEventListener("mouseleave",function(){
      muscurser.style.scale = 1;
      muscurser.style.opacity =  1;
      muscurser.style.backgroundColor = "#000";
    })

    
  })

  var pcol = document.querySelector(".pcol")
    pcol.addEventListener("mouseenter", function(){
      pcol.style.color = "blue"
      console.log("st");
    })

    pcol.addEventListener("mouseleave", function(){
      pcol.style.color = "#ff3c90"
      console.log("ed");
    })

  
  function can (){  
  const canvas = document.querySelector("#page>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    https://neverland.agency/assets/0001.ad04d6cb.webp
    https://neverland.agency/assets/0002.cfc021f0.webp
    https://neverland.agency/assets/0003.493bb9b2.webp
    https://neverland.agency/assets/0004.519dabfd.webp
    https://neverland.agency/assets/0005.60fe97e9.webp
    https://neverland.agency/assets/0006.d0feb167.webp
    https://neverland.agency/assets/0007.9171be3a.webp
    https://neverland.agency/assets/0008.f1361a1c.webp
    https://neverland.agency/assets/0009.b22e24fe.webp
    https://neverland.agency/assets/0010.0970b07e.webp
    https://neverland.agency/assets/0011.12bceab6.webp
    https://neverland.agency/assets/0012.5d808b1b.webp
    https://neverland.agency/assets/0013.4b1f4683.webp
    https://neverland.agency/assets/0014.56a08e21.webp
    https://neverland.agency/assets/0015.f1af5917.webp
    https://neverland.agency/assets/0016.0e732b26.webp
    https://neverland.agency/assets/0017.66c4accc.webp
    https://neverland.agency/assets/0018.068ec809.webp
    https://neverland.agency/assets/0019.d85ab0ad.webp
    https://neverland.agency/assets/0020.61e31687.webp
    https://neverland.agency/assets/0021.1932447e.webp
    https://neverland.agency/assets/0022.c0d1542f.webp
    https://neverland.agency/assets/0023.850339b4.webp
    https://neverland.agency/assets/0024.70195dfc.webp
    https://neverland.agency/assets/0025.be569fcc.webp
    https://neverland.agency/assets/0026.55b07224.webp
    https://neverland.agency/assets/0027.19042d23.webp
    https://neverland.agency/assets/0028.e7a75feb.webp
    https://neverland.agency/assets/0029.03014227.webp
    https://neverland.agency/assets/0030.545ed344.webp
    https://neverland.agency/assets/0031.d7eb4aa1.webp
    https://neverland.agency/assets/0032.e63436b2.webp
    https://neverland.agency/assets/0033.3558d158.webp
    https://neverland.agency/assets/0034.5b161b7d.webp
    https://neverland.agency/assets/0035.c2cce845.webp
    https://neverland.agency/assets/0036.2839a03b.webp
    https://neverland.agency/assets/0037.ff696000.webp
    https://neverland.agency/assets/0038.d41347be.webp
    https://neverland.agency/assets/0039.501d0f1c.webp
    https://neverland.agency/assets/0040.84da39e5.webp
    https://neverland.agency/assets/0041.c606f43d.webp
    https://neverland.agency/assets/0042.5e80f3fe.webp
    https://neverland.agency/assets/0043.6509169d.webp
    https://neverland.agency/assets/0044.ea7faa26.webp
    https://neverland.agency/assets/0045.faf589ba.webp
    https://neverland.agency/assets/0046.af9337e9.webp
    https://neverland.agency/assets/0047.1bdcf4de.webp
    https://neverland.agency/assets/0048.d54eb665.webp
    https://neverland.agency/assets/0049.96fed203.webp
    https://neverland.agency/assets/0050.4eafc916.webp
    https://neverland.agency/assets/0051.9965d190.webp
    https://neverland.agency/assets/0052.87b4fd27.webp
    https://neverland.agency/assets/0053.886f42f9.webp
    https://neverland.agency/assets/0054.9a9e4b33.webp
    https://neverland.agency/assets/0055.642be56b.webp
    https://neverland.agency/assets/0056.6488d122.webp
    https://neverland.agency/assets/0057.c67bd9b0.webp
    https://neverland.agency/assets/0058.32e45693.webp
    https://neverland.agency/assets/0059.b204e81b.webp
    https://neverland.agency/assets/0060.792cbb99.webp
    https://neverland.agency/assets/0061.48f9bc24.webp
    https://neverland.agency/assets/0062.5602428b.webp
    https://neverland.agency/assets/0063.cb5131ff.webp
    https://neverland.agency/assets/0064.c9fc4a20.webp
    https://neverland.agency/assets/0065.2fdaacfc.webp
    https://neverland.agency/assets/0066.efa90d23.webp
    https://neverland.agency/assets/0067.0d240c63.webp
    https://neverland.agency/assets/0068.c3ab0297.webp
    https://neverland.agency/assets/0069.686b653f.webp
    https://neverland.agency/assets/0070.c71b9ad7.webp
    https://neverland.agency/assets/0071.0550f569.webp
    https://neverland.agency/assets/0072.fc3fdd4b.webp
    https://neverland.agency/assets/0073.1c13b69f.webp
    https://neverland.agency/assets/0074.7665fbe9.webp
    https://neverland.agency/assets/0075.c03a7177.webp
    https://neverland.agency/assets/0076.0360f3c9.webp
    https://neverland.agency/assets/0077.d35de80b.webp
    https://neverland.agency/assets/0078.482a5002.webp
    https://neverland.agency/assets/0079.e454a32f.webp
    https://neverland.agency/assets/0080.d2257304.webp
    https://neverland.agency/assets/0081.563d2d75.webp
    https://neverland.agency/assets/0082.62d96550.webp
    https://neverland.agency/assets/0083.12f059e6.webp
    https://neverland.agency/assets/0084.3c1fa35d.webp
    https://neverland.agency/assets/0085.0bc3bad6.webp
    https://neverland.agency/assets/0086.41eca6da.webp
    https://neverland.agency/assets/0087.61c0397a.webp
    https://neverland.agency/assets/0088.244741b5.webp
    https://neverland.agency/assets/0089.9fd84ecc.webp
    https://neverland.agency/assets/0090.5b5dfe42.webp
    https://neverland.agency/assets/0091.380c6cee.webp
    https://neverland.agency/assets/0092.834627e8.webp
    https://neverland.agency/assets/0093.9ba91fc2.webp
    https://neverland.agency/assets/0094.473a7c92.webp
    https://neverland.agency/assets/0095.f8fe7382.webp
    https://neverland.agency/assets/0096.2bc22132.webp
    https://neverland.agency/assets/0097.b679e5f5.webp
    https://neverland.agency/assets/0098.f9fe1f14.webp
    https://neverland.agency/assets/0099.74c48688.webp
    https://neverland.agency/assets/0100.c97c2ef0.webp
    https://neverland.agency/assets/0101.81ebba0d.webp
    https://neverland.agency/assets/0102.765ee53a.webp
    https://neverland.agency/assets/0103.5e1beb56.webp
    https://neverland.agency/assets/0104.f3804fdf.webp
    https://neverland.agency/assets/0105.94964fc3.webp
    https://neverland.agency/assets/0106.fd552af7.webp
    https://neverland.agency/assets/0107.0a768725.webp
    https://neverland.agency/assets/0108.40ad8da8.webp
    https://neverland.agency/assets/0109.7c01a515.webp
    https://neverland.agency/assets/0110.eec16d2d.webp
    https://neverland.agency/assets/0111.39ccadc7.webp
    https://neverland.agency/assets/0112.3edab3c7.webp
    https://neverland.agency/assets/0113.51247bb9.webp
    https://neverland.agency/assets/0114.d3ee9f95.webp
    https://neverland.agency/assets/0115.30782272.webp
    https://neverland.agency/assets/0116.118b6af4.webp
    https://neverland.agency/assets/0117.844b33f5.webp
    https://neverland.agency/assets/0118.d0cc340d.webp
    https://neverland.agency/assets/0119.3449084a.webp
    https://neverland.agency/assets/0120.990c5b3b.webp
    https://neverland.agency/assets/0121.afe5a35c.webp
    https://neverland.agency/assets/0122.1eb1705b.webp
    https://neverland.agency/assets/0123.625ad83b.webp
    https://neverland.agency/assets/0124.230c2f2d.webp
    https://neverland.agency/assets/0125.c6c35744.webp
    https://neverland.agency/assets/0126.438dab1a.webp
    https://neverland.agency/assets/0127.d020d75c.webp
    https://neverland.agency/assets/0128.d97160e9.webp
    https://neverland.agency/assets/0129.ddb3d55e.webp
    https://neverland.agency/assets/0130.5a34c351.webp
    https://neverland.agency/assets/0131.2d2ff96b.webp
    https://neverland.agency/assets/0132.aaea4f7d.webp
    https://neverland.agency/assets/0133.b82664dc.webp
    https://neverland.agency/assets/0134.912d1fbe.webp
    https://neverland.agency/assets/0135.0dd5d6bb.webp
    https://neverland.agency/assets/0136.db711bfc.webp
    https://neverland.agency/assets/0137.1d3755b1.webp
    https://neverland.agency/assets/0138.154d7a39.webp
    https://neverland.agency/assets/0139.d3421241.webp
    https://neverland.agency/assets/0140.b4365085.webp
    https://neverland.agency/assets/0141.606a04fa.webp
    https://neverland.agency/assets/0142.51cb398e.webp
    https://neverland.agency/assets/0143.405c48d6.webp
    https://neverland.agency/assets/0144.f8f54931.webp
    https://neverland.agency/assets/0145.9b132333.webp
    https://neverland.agency/assets/0146.b3a2e732.webp
    https://neverland.agency/assets/0147.f9cf6ff9.webp
    https://neverland.agency/assets/0148.1250ab2d.webp
    https://neverland.agency/assets/0149.c88239d5.webp
    https://neverland.agency/assets/0150.093aba96.webp
    https://neverland.agency/assets/0151.cbfbbf59.webp
    https://neverland.agency/assets/0152.627a2249.webp
    https://neverland.agency/assets/0153.94f00001.webp
    https://neverland.agency/assets/0154.0cd59ea9.webp
    https://neverland.agency/assets/0155.c67f6e05.webp
    https://neverland.agency/assets/0156.3a8e0d03.webp
    https://neverland.agency/assets/0157.bc49bad5.webp
    https://neverland.agency/assets/0158.77d3104c.webp
    https://neverland.agency/assets/0159.07753411.webp
    https://neverland.agency/assets/0160.120e9e31.webp
    https://neverland.agency/assets/0161.f6536ad4.webp
    https://neverland.agency/assets/0162.cdd242cb.webp
    https://neverland.agency/assets/0163.d8fbf5b6.webp
    https://neverland.agency/assets/0164.26aaa32f.webp
    https://neverland.agency/assets/0165.c677c1a3.webp
    https://neverland.agency/assets/0166.bf854656.webp
    https://neverland.agency/assets/0167.f9469b38.webp
    https://neverland.agency/assets/0168.fec7024d.webp
    https://neverland.agency/assets/0169.919ec5f7.webp
    https://neverland.agency/assets/0170.7abfad2a.webp
    https://neverland.agency/assets/0171.44bc080b.webp
    https://neverland.agency/assets/0172.74351ab0.webp
    https://neverland.agency/assets/0173.f4578d66.webp
    https://neverland.agency/assets/0174.77242702.webp
    https://neverland.agency/assets/0175.a355406a.webp
    https://neverland.agency/assets/0176.1d5e5143.webp
    https://neverland.agency/assets/0177.282f3259.webp
    https://neverland.agency/assets/0178.2686b4b2.webp
    https://neverland.agency/assets/0179.b39712df.webp
    https://neverland.agency/assets/0180.baf992ce.webp
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 180;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  }

  can();

  


  gsap.to("#text-box h1>span",{
    opacity: 0,
    duration: 2,
    scrollTrigger:{
      trigger:`#text-box h1`,
      scroller:`#main`,
      start:`-70%`,
      end:`-75%`,
      pin:true,
      // markers: true,
      scrub : 2,
    }
  })

  gsap.to("#pera-box p>span",{
    opacity: 0,
    duration: 2,
    scrollTrigger:{
      trigger:`#pera-box p`,
      scroller:`#main`,
      start:`10%`,
      end:`15%`,
      pin:true,
      // markers: true,
      scrub : 2,
    }
  })


  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      scroller:`#main`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
    }
  })

  gsap.to("#page2",{
    scrollTrigger:{
        trigger: `#page2`,
        scroller: `#main`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
    }
  })


  gsap.to("#page canvas",{
    height: "78vh",
    left: "12%",
    top: "10vh",
    width: "78%",
    scrollTrigger:{
        trigger: `#page3`,
        scroller: `#main`,
        start: `80%`,
        end: `89%`,
        pin: true,
        // markers: true,
        scrub: 1,
        }
  })

  gsap.to("#nav svg",{
    filter:" invert(0)",
    scrollTrigger:{
        trigger: `#page3`,
        scroller: `#main`,
        start: `80%`,
        end: `85%`,
        // markers: true,
        pin: true,
        scrub: 2,
    }
  })

  gsap.to("#page canvas",{
    top: "0",
    scrollTrigger:{
        trigger: `#page4`,
        scroller: `#main`,
        start: `-2%`,
        end: `1%`,
        // markers: true,
        pin: true,
        scrub: 2,
    }
  })

  gsap.to("#scroll-aro",{
    opacity: 0 ,
    scrollTrigger:{
        trigger: `#page4`,
        scroller: `#main`,
        start: `-2%`,
        end: `1%`,
        // markers: true,
        pin: true,
        scrub: 2,
    }
  })

  gsap.to("#scroll-aro2",{
    opacity: 1 ,
    y: 0,
    scrollTrigger:{
        trigger: `#page4`,
        scroller: `#main`,
        start: `10%`,
        end: `12%`,
        // markers: true,
        pin: true,
        scrub: 2,
    }
  })



  // gsap.to("#nav svg",{
  //   filter:" invert(0)",
  //   scrollTrigger:{
  //       trigger: `#page4`,
  //       scroller: `#main`,
  //       start: `-2%`,
  //       end: `1%`,
  //       // markers: true,
  //       pin: true,
  //       scrub: 2,
  //   }
  // })
  gsap.to("#hedding",{
    x: 20,
    scrollTrigger:{
        trigger: `#container1`,
        scroller: `#main`,
        start: `-27%`,
        end: `-30%`,
        pin: true,
        // markers:true,
        scrub: 2,
    }
  })

  gsap.to("#scroll-aro2",{
    bottom: "-20vw",
    scrollTrigger:{
        trigger: `#container1`,
        scroller: `#main`,
        start: `70%`,
        end: `72%`,
        // markers: true,
        // pin: true,
        scrub: 1,
    }
  })


  gsap.to("#curcul-img",{
    top: "-15%",
    scrollTrigger:{
      trigger: `#curcul-img`,
      scroller: `#main`,
      start: `-40%`,
      end: `-42%`,
      // markers:true,
      scrub: 1,
    }
  },"ani")




  gsap.to("#curcul-img",{
    top: "-25%",
    scrollTrigger:{
      trigger: `#curcul-img`,
      scroller: `#main`,
      start: `-30%`,
      end: `-32%`,
      // markers:true,
      scrub: 1,
    }
  },"ani")

    gsap.to("#blur",{
      display: "block",
    scrollTrigger:{
      trigger: `#curcul-img`,
      scroller: `#main`,
      start: `-31%`,
      end: `-32%`,
      // markers:true,
      scrub: 1,
    }
  },"ani")

    gsap.to(".box2",{
    opacity: "1",
    scrollTrigger:{
      trigger: `#curcul-img`,
      scroller: `#main`,
      start: `-29%`,
      end: `-31%`,
      // markers:true,
      scrub: 2,
    }
  },"ani")

  gsap.to("#curcul-img",{
    top: "-30%",
    scrollTrigger:{
      trigger: `#curcul-img`,
      scroller: `#main`,
      start: `-20%`,
      end: `-22%`,
      // markers:true,
      scrub: 1,
    }
  },"ani")

  // gsap.to("#container1",{
  //   // backgroundColor: "#FFFAF0",
  //   scrollTrigger:{
  //     trigger: `#curcul-img`,
  //     scroller: `#main`,
  //     start: `0%`,
  //     end: `1%`,
  //     markers:true,
  //     scrub: 1,
  //   }
  // })
  gsap.to("#blur",{
    zIndex: "0",
    scrollTrigger:{
      trigger: `.box3`,
      scroller: `#main`,
      start: `-9%`,
      end: `-10%`,
      // markers:true,
      scrub: 1,
    }
  })

gsap.to("#hedding",{
  opacity: "0",
  scrollTrigger:{
    trigger: `#container2`,
    scroller: `#main`,
    start: `-30%`,
    end: `-32%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})

gsap.to("#hedding2",{
  opacity: "1",
  x: 20,
  scrollTrigger:{
    trigger: `#container2`,
    scroller: `#main`,
    start: `-29%`,
    end: `-32%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})

gsap.to("#hedding2",{
  opacity: "0",
  scrollTrigger:{
    trigger: `#container2`,
    scroller: `#main`,
    start: `60%`,
    end: `62%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})

gsap.to("#hedding3",{
  opacity: "1",
  x: 20,
  scrollTrigger:{
    trigger: `#container2`,
    scroller: `#main`,
    start: `65%`,
    end: `67%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})
gsap.to("#cntr2h1blr2",{
  x: "-20%",
  scrollTrigger:{
    trigger: `#container2 h1`,
    scroller: `#main`,
    start: `-220%`,
    end: `-222%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})

gsap.to("#cntr2h1blr2",{
  x: "-50%",
  scrollTrigger:{
    trigger: `#container2 h1`,
    scroller: `#main`,
    start: `-169%`,
    end: `-172%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})

gsap.to("#cntr2h1blr1",{
  x: "-17%",
  scrollTrigger:{
    trigger: `#container2 h1`,
    scroller: `#main`,
    start: `-125%`,
    end: `-129%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})


gsap.to("#cntr2h1blr1",{
  x: "-57%",
  scrollTrigger:{
    trigger: `#container2 h1`,
    scroller: `#main`,
    start: `-80%`,
    end: `-85%`,
    // pin: true,
    // markers:true,
    scrub: 1,
  }
})






function canvas1(){
  const canvas = document.querySelector("#cont3pg>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
https://neverland.agency/assets/0001.4d684736.webp
https://neverland.agency/assets/0002.8878f1bd.webp
https://neverland.agency/assets/0003.ca0e9c8a.webp
https://neverland.agency/assets/0004.2808c96d.webp
https://neverland.agency/assets/0005.137311c4.webp
https://neverland.agency/assets/0006.5cf19c96.webp
https://neverland.agency/assets/0007.6f0df1b2.webp
https://neverland.agency/assets/0008.a9704791.webp
https://neverland.agency/assets/0009.30e1da96.webp
https://neverland.agency/assets/0010.8e411586.webp
https://neverland.agency/assets/0011.833ea8cc.webp
https://neverland.agency/assets/0012.b66c8eec.webp
https://neverland.agency/assets/0013.f323e260.webp
https://neverland.agency/assets/0014.ebd01c73.webp
https://neverland.agency/assets/0015.c4b244d6.webp
https://neverland.agency/assets/0016.6e8ab877.webp
https://neverland.agency/assets/0017.4b250551.webp
https://neverland.agency/assets/0018.1250d182.webp
https://neverland.agency/assets/0019.97c4cdce.webp
https://neverland.agency/assets/0020.1273de08.webp
https://neverland.agency/assets/0021.72cdc020.webp
https://neverland.agency/assets/0022.321430f2.webp
https://neverland.agency/assets/0023.f986f3c5.webp
https://neverland.agency/assets/0024.75f68864.webp
https://neverland.agency/assets/0025.cb50ceaf.webp
https://neverland.agency/assets/0026.54f061ae.webp
https://neverland.agency/assets/0027.c4dd226b.webp
https://neverland.agency/assets/0028.62d0063e.webp
https://neverland.agency/assets/0029.ea637cf8.webp
https://neverland.agency/assets/0030.59808900.webp
https://neverland.agency/assets/0031.ca3f1ebf.webp
https://neverland.agency/assets/0032.788996d7.webp
https://neverland.agency/assets/0033.01a5016f.webp
https://neverland.agency/assets/0034.91d5f0ce.webp
https://neverland.agency/assets/0035.e1f61dec.webp
https://neverland.agency/assets/0036.f1847fbf.webp
https://neverland.agency/assets/0037.9741c29a.webp
https://neverland.agency/assets/0038.4c3879a9.webp
https://neverland.agency/assets/0039.877a7d4b.webp
https://neverland.agency/assets/0040.3d126791.webp
https://neverland.agency/assets/0041.19cf5945.webp
https://neverland.agency/assets/0042.58a17dbc.webp
https://neverland.agency/assets/0043.738a974f.webp
https://neverland.agency/assets/0044.4e5e1b94.webp
https://neverland.agency/assets/0045.b0512c82.webp
https://neverland.agency/assets/0046.61130815.webp
https://neverland.agency/assets/0047.61302406.webp
https://neverland.agency/assets/0048.9676d1a3.webp
https://neverland.agency/assets/0049.6832cd43.webp
https://neverland.agency/assets/0050.61eff422.webp
https://neverland.agency/assets/0051.1c30c844.webp
https://neverland.agency/assets/0052.982102e8.webp
https://neverland.agency/assets/0053.3087a1ec.webp
https://neverland.agency/assets/0054.204ca963.webp
https://neverland.agency/assets/0055.f9c81336.webp
https://neverland.agency/assets/0056.36da55de.webp
https://neverland.agency/assets/0057.4a7a0cc3.webp
https://neverland.agency/assets/0058.bb9ba99d.webp
https://neverland.agency/assets/0059.be67cd7f.webp
https://neverland.agency/assets/0060.81eb4911.webp
https://neverland.agency/assets/0061.c06b2a1e.webp
https://neverland.agency/assets/0062.72ecd370.webp
https://neverland.agency/assets/0063.e3227f0f.webp
https://neverland.agency/assets/0064.f83a0411.webp
https://neverland.agency/assets/0065.fd58eff1.webp
https://neverland.agency/assets/0066.4c66cccd.webp
https://neverland.agency/assets/0067.6f6d6b73.webp
https://neverland.agency/assets/0068.62b7a52f.webp
https://neverland.agency/assets/0069.7ea1d862.webp
https://neverland.agency/assets/0070.e5c1baf1.webp
https://neverland.agency/assets/0071.2a920e04.webp
https://neverland.agency/assets/0072.b0f6286e.webp
https://neverland.agency/assets/0073.a5c1826a.webp
https://neverland.agency/assets/0074.a2f57e5d.webp
https://neverland.agency/assets/0075.1c599655.webp
https://neverland.agency/assets/0076.5ca31f70.webp
https://neverland.agency/assets/0077.461139ae.webp
https://neverland.agency/assets/0078.e5ad54e2.webp
https://neverland.agency/assets/0079.19af7eed.webp
https://neverland.agency/assets/0080.7a910520.webp
https://neverland.agency/assets/0081.6b44c783.webp
https://neverland.agency/assets/0082.9d024f26.webp
https://neverland.agency/assets/0083.87ae5d36.webp
https://neverland.agency/assets/0084.d6f7c908.webp
https://neverland.agency/assets/0085.6db32e45.webp
https://neverland.agency/assets/0086.eeea0749.webp
https://neverland.agency/assets/0087.aae9db3b.webp
`;
return data.split("\n")[index];
}

const frameCount = 87;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#cont3pg`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({
trigger: "#cont3pg",
pin: true,
scroller: `#main`,
start: `top top`,
end: `80% top`,
pin: true,
});
}
canvas1();




// gsap.to("#container3",{
//   scrollTrigger:{
//     trigger:`#container3`,
//     scroller:`#main`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//   }
// })
gsap.to("#cont3pg canvas",{
  // top: "60%",
  width: "80vw",
  height: "80vh",
  scrollTrigger:{
    trigger:`#cont3pg`,
    scroller:`#main`,
    start:`3%`,
    end:`5%`,
    pin:true,
    // markers: true,
    scrub: 1,
  }
})

gsap.to("#hedding3",{
  color: "#fff",
  scrollTrigger:{
    trigger:`#cont3pg canvas`,
    scroller:`#main`,
    start:`-40%`,
    end:`bottom top`,
    // pin:true,
    // markers: true,
    scrub: 1,
  }
})


gsap.to("#scroll-aro3",{
  opacity: 1 ,
  y: 2,
  scrollTrigger:{
    trigger:`#cont3pg canvas`,
    scroller:`#main`,
    start:`-40%`,
    end:`-45%`,
    // pin:true,
    // markers: true,
    scrub: 1,
  }
})





// gsap.to("#nav svg",{
//   filter: "invert(1)",
//   scrollTrigger:{
//     trigger:`#cont3pg canvas`,
//     scroller:`#main`,
//     start:`top top`,
//     end:`bottom top`,
//     // pin:true,
//     // markers: true,
//     scrub: 1,
//   }
// })


gsap.to("#hedding3",{
  color: "#000",
  scrollTrigger:{
    trigger:`#cont3pg`,
    scroller:`#main`,
    start:`2%`,
    end:`3%`,
    // pin:true,
    // markers: true,
    scrub: 1,
  }
})

gsap.to("#scroll-aro3",{
  bottom: "-20vw",
  scrollTrigger:{
    trigger:`#cont3pg`,
    scroller:`#main`,
    start:`2%`,
    end:`3%`,
    // pin:true,
    // markers: true,
    scrub: 1,
  }
})

// gsap.to("#nav svg",{
//   filter: "invert(0)",
//   scrollTrigger:{
//     trigger:`#cont3pg`,
//     scroller:`#main`,
//     start:`1%`,
//     end:`bottom top`,
//     // pin:true,
//     // markers: true,
//     scrub: 1,
//   }
// })

gsap.to("#hedding4",{
  x: 20,
  scrollTrigger:{
    trigger:`#cont3pg`,
    scroller:`#main`,
    start:`4%`,
    end:`100%`,
    // pin:true,
    // markers: true,
    scrub: 1,
  }
})

gsap.to("#scroll-aro4",{
  opacity: 1 ,
  y: 0,
  x: 2,
  scrollTrigger:{
    trigger:`#cont3pg`,
    scroller:`#main`,
    start:`4%`,
    end:`100%`,
    // pin:true,
    // markers: true,
    scrub: 1,
  }
})

gsap.to(".canbxopc",{
  opacity: "1",
  scrollTrigger:{
    trigger:`#container4`,
    scroller:`#main`,
    start:`-15%`,
    end:`-16%`,
    pin:true,
    // markers: true,
    scrub: 1,
  }
})


gsap.to("#container4",{
  scrollTrigger:{
    trigger:`#container4`,
    scroller:`#main`,
    start:`-11%`,
    end:`-9%`,
    pin:true,
    // markers: true,
    scrub: 1,
  }
})
gsap.to("#container5",{
  scrollTrigger:{
    trigger:`#container5`,
    scroller:`#main`,
    start:`top top`,
    end:`bottom top`,
    // pin:true,
    // markers: true,
    // scrub: 1,
  }
})

gsap.to("#nav svg",{
  opacity: "0",
  scrollTrigger:{
    trigger:`#container6`,
    scroller:`#main`,
    start:`-22%`,
    end:`-25%`,
    // pin:true,
    scrub: 1,
    // markers: true,
  }
})
gsap.to("#hedding4",{
  opacity: "0",
  scrollTrigger:{
    trigger:`#container6`,
    scroller:`#main`,
    start:`-22%`,
    end:`-25%`,
    // pin:true,
    scrub: 1,
    // markers: true,
  }
})

gsap.to("#scroll-aro4",{
  bottom: "-20vw",
  scrollTrigger:{
    trigger:`#container6`,
    scroller:`#main`,
    start:`-22%`,
    end:`-25%`,
    // pin:true,
    scrub: 1,
    // markers: true,
  }
})

gsap.to("#container7",{
  scrollTrigger:{
    trigger:`#container7`,
    scroller:`#main`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
  }
})
// gsap.to("#container8",{
//   scrollTrigger:{
//     trigger:`#container8`,
//     scroller:`#main`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//   }
// })
