var toggleMenu = document.querySelectorAll('.toggle-menu-item')
var dropDownMenu = document.querySelector('.drop-down-menu-item')

toggleMenu.forEach(element => {
    var dropDown = element.nextElementSibling
    var btnChild = element.children
    if(dropDown)
    {

        element.addEventListener('click',(e)=>{
            if(dropDown.classList.contains('show'))
            {
                dropDown.classList.remove('show')
                btnChild[0].classList.remove('ri-arrow-down-s-line')
                btnChild[0].classList.add('ri-arrow-right-s-line')
            }
            else
            {
                dropDown.classList.add('show')                
                btnChild[0].classList.add('ri-arrow-down-s-line')
                btnChild[0].classList.remove('ri-arrow-right-s-line')
            }
        })
    }
    else{
        console.log('méo có để show m')
    }
});