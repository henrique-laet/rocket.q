export default function Modal(){

    const modalWapper  = document.querySelector('.modal-wrapper')
    const cancelbutton = document.querySelector('.button.cancel') 

    cancelbutton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe active para a modal
        modalWapper.classList.add("active") 
    }
    function close(){
        //funcionalidade de remover a classe active da modal
        modalWapper.classList.remove("active") 
    }

    return{
        open,
        close
    }
}