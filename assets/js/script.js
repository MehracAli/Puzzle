let pieces = document.querySelectorAll(".puzzle-piece")
let boxes = document.querySelectorAll(".drop-zone")
let count = 0
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
        let dataId = box.getAttribute("data-id")
        
        let draggable = document.getElementById(id)
        element = box.appendChild(draggable)
        
        if(id == dataId){
            count++
            if(count == 9){
                let win = document.getElementById("win")
                win.style.display = "block"
            }
        }
    })
    box.addEventListener("drop", function (e) {
        let id = e.dataTransfer.getData("id")
        let draggable = document.getElementById(id)
        element = box.appendChild(draggable)
    })
})