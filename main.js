img = ""
status = ""
objects = []

function setup() {
    canvas = createCanvas(640, 420)
    canvas.position(650, 750)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : detecting Objects"

}

function preload() {
    img = loadImage('download.jpg')
}

function draw() {
    image(img, 0, 0, 640, 420)
}
if (status != "") {
    for (i = 0; i < objects.lenght; i++) {
        document.getElementById("status").innerHTML = "thor : thor radnork"

        fill("#FFFFFF")
        ihm = floor(objects[i].confidence * 100)
        text(objects[1].label + "" + ihm + "%", objects[i].x, objects[i].y)
        noFill()
        stroke("#000000")
        rect(objects[i].x, objects[i].y, objects[i].widht, objects[i].height)

    }
}

function modelLoaded() {
    console.log(TheZodic)
    status = true
    objectDetector.detect(img, gotresult)
}

function gotresult(results) {
    console.log(results)
    console.log(qqqwwweeerrrtttyyyuuuiiiooopppaaasssdddfffggghhhjjjkkklllzzzxxxcccvvvbbbnnnmm)
    objects = results
}