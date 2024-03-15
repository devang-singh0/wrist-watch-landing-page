let section = document.querySelector('main #two #imgDiv section');
let index = 1;
func()
function func(){
    section.style.cssText = `transform: translateX(${(index - 1) * -500}px);`
    if(index == 1){
        document.body.style.cssText = 'background: linear-gradient(106deg, #F4A764 -2.93%, #FFDEC2 72.14%);'
    }
    if(index == 2){
        document.body.style.cssText = 'background: linear-gradient(106deg, #ADB0B0 -2.93%, #E1E1E1 72.14%);'
    }
    if(index == 3){
        document.body.style.cssText = 'background: linear-gradient(106deg, #30A357 -2.93%, #75E39A 72.14%);'
    }
    if(index == 4){
        document.body.style.cssText = 'background: linear-gradient(106deg, #F24F4F -2.93%, #FFA895 72.14%);'
    }
}
function indexPlus(){
    if(index < 4){
        index = index + 1;
    }else{
        index = 1;
    }
    func()
}
function indexMinus(){
    if(index > 1){
        index = index - 1;
    }else{
        index = 4;
    }
    func()
}