function burgerBar(){
    document.getElementById('bar').addEventListener('click',function(){
        document.getElementById('nav').classList.toggle('nav-active')
    })
}
burgerBar()