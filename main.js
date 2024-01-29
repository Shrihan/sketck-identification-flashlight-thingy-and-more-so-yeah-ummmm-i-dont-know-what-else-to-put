function setup(){
canvas=createCanvas(300, 300)
canvas.center()
background("white")
canvas.mouseReleased(classifycanvas)
synt=window.speechSynthesis
}
function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}
function draw(){
    strokeWeight(3)
    stroke("black")
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseX)
    }
}
function classifycanvas(){
    classifier.classify(canvas, gotreuslt)
}
function gotreuslt(error, results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("label").innerHTML="label:"+results[0].label
        document.getElementById("confidence").innerHTML="confidence:"+Math.round(results[0].confidence*100)+"%"
        utter=new SpeechSynthesisUtterance(results[0].label)
        synt.speak(utter)
    }

}
