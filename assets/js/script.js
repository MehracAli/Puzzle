let pieces = document.querySelectorAll(".puzzle-piece")
let boxes = document.querySelectorAll(".drop-zone")

pieces.forEach((piece) =>{
    piece.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("id", e.target.id)
        console.log(e.target.id)
    })
})

boxes.forEach((box) =>{
    box.addEventListener("dragover", function (e) {
        e.preventDefault()
    })

    box.addEventListener("drop", function (e) {
        let id = e.dataTransfer.getData("id")
        let draggable = document.getElementById(id)
        box.append(draggable)
    })
    box.addEventListener("drop", function (e) {
        let id = e.dataTransfer.getData("id")
        let draggable = document.getElementById(id)
        box.append(draggable)
    })
})