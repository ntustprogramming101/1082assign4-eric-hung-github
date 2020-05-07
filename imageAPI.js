var images = new Image;
var imagesSrcStr = [
    "img/bg.jpg",
    "img/cabbage.png",
    "img/title.jpg",
    "img/gameover.jpg",
    "img/startNormal.png",
    "img/startHovered.png",
    "img/restartNormal.png",
    "img/restartHovered.png",
    "img/groundhogDown.png",
    "img/groundhogIdle.png",
    "img/groundhogLeft.png",
    "img/groundhogRight.png",
    "img/soldier.png",
    "img/life.png",
    "img/soil0.png",
    "img/soil1.png",
    "img/soil2.png",
    "img/soil3.png",
    "img/soil4.png",
    "img/soil5.png",
    "img/stone1.png",
    "img/stone2.png",
    "img/soils/soilEmpty.png",
    "img/soils/soil0/soil0_0.png",
    "img/soils/soil0/soil0_1.png",
    "img/soils/soil0/soil0_2.png",
    "img/soils/soil0/soil0_3.png",
    "img/soils/soil0/soil0_4.png",
    "img/soils/soil1/soil1_0.png",
    "img/soils/soil1/soil1_1.png",
    "img/soils/soil1/soil1_2.png",
    "img/soils/soil1/soil1_3.png",
    "img/soils/soil1/soil1_4.png",
    "img/soils/soil2/soil2_0.png",
    "img/soils/soil2/soil2_1.png",
    "img/soils/soil2/soil2_2.png",
    "img/soils/soil2/soil2_3.png",
    "img/soils/soil2/soil2_4.png",
    "img/soils/soil3/soil3_0.png",
    "img/soils/soil3/soil3_1.png",
    "img/soils/soil3/soil3_2.png",
    "img/soils/soil3/soil3_3.png",
    "img/soils/soil3/soil3_4.png",
    "img/soils/soil4/soil4_0.png",
    "img/soils/soil4/soil4_1.png",
    "img/soils/soil4/soil4_2.png",
    "img/soils/soil4/soil4_3.png",
    "img/soils/soil4/soil4_4.png",
    "img/soils/soil5/soil5_0.png",
    "img/soils/soil5/soil5_1.png",
    "img/soils/soil5/soil5_2.png",
    "img/soils/soil5/soil5_3.png",
    "img/soils/soil5/soil5_4.png",
    "img/stones/stone0/stone0_0.png",
    "img/stones/stone0/stone0_1.png",
    "img/stones/stone0/stone0_2.png",
    "img/stones/stone0/stone0_3.png",
    "img/stones/stone0/stone0_4.png",
    "img/stones/stone1/stone1_0.png",
    "img/stones/stone1/stone1_1.png",
    "img/stones/stone1/stone1_2.png",
    "img/stones/stone1/stone1_3.png",
    "img/stones/stone1/stone1_4.png"
]

function preLoadImage(url, cb) {
    var image = new Image()
    image.src = url

    if (image.complete) {
        // 圖片已經被載入
        cb(image)
    } else {
        // 如果圖片未被載入，則設定載入時的回調
        image.onload = function () {
            cb(image)
        }
    }
}

function preLoadImages() {
    for (let i = 0; i < imagesSrcStr.length; i++) {
        images[i] = new Image;
        images[i].src = imagesSrcStr[i];
        console.log("set src success\n");
    }

    for (let i = 0; i < imagesSrcStr.length; i++) {
        if (!images[i].complete) {
            //i--;
        }
    }

    

    return true;
}


function loadImage(src) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].src == src) {
            return images[i];
        }
    }
}



/*preLoading
img/bg.jpg",
"img/cabbage.png",
"img/title.jpg",
"img/gameover.jpg",
"img/startNormal.png",
"img/startHovered.png",
"img/restartNormal.png",
"img/restartHovered.png",
"img/groundhogDown.png",
"img/groundhogIdle.png",
"img/groundhogLeft.png",
"img/groundhogRight.png",
"img/soldier.png",
"img/life.png",
"img/soil0.png",
"img/soil1.png",
"img/soil2.png",
"img/soil3.png",
"img/soil4.png",
"img/soil5.png",
"img/stone1.png",
"img/stone2.png",
"img/soils/soilEmpty.png",
"img/soils/soil0/soil0_0.png",
"img/soils/soil0/soil0_1.png",
"img/soils/soil0/soil0_2.png",
"img/soils/soil0/soil0_3.png",
"img/soils/soil0/soil0_4.png",
"img/soils/soil1/soil1_0.png",
"img/soils/soil1/soil1_1.png",
"img/soils/soil1/soil1_2.png",
"img/soils/soil1/soil1_3.png",
"img/soils/soil1/soil1_4.png",
"img/soils/soil2/soil2_0.png",
"img/soils/soil2/soil2_1.png",
"img/soils/soil2/soil2_2.png",
"img/soils/soil2/soil2_3.png",
"img/soils/soil2/soil2_4.png",
"img/soils/soil3/soil3_0.png",
"img/soils/soil3/soil3_1.png",
"img/soils/soil3/soil3_2.png",
"img/soils/soil3/soil3_3.png",
"img/soils/soil3/soil3_4.png",
"img/soils/soil4/soil4_0.png",
"img/soils/soil4/soil4_1.png",
"img/soils/soil4/soil4_2.png",
"img/soils/soil4/soil4_3.png",
"img/soils/soil4/soil4_4.png",
"img/soils/soil5/soil5_0.png",
"img/soils/soil5/soil5_1.png",
"img/soils/soil5/soil5_2.png",
"img/soils/soil5/soil5_3.png",
"img/soils/soil5/soil5_4.png",
"img/stones/stone0/stone0_0.png",
"img/stones/stone0/stone0_1.png",
"img/stones/stone0/stone0_2.png",
"img/stones/stone0/stone0_3.png",
"img/stones/stone0/stone0_4.png",
"img/stones/stone1/stone1_0.png",
"img/stones/stone1/stone1_1.png",
"img/stones/stone1/stone1_2.png",
"img/stones/stone1/stone1_3.png",
"img/stones/stone1/stone1_4.png""
*/
