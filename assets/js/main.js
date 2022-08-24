console.log('Siva')

const myBtn = document.getElementsByTagName('button')[0]
const myDiv = document.getElementsByClassName('umwickeln')[0]
let counter = 0



myBtn.addEventListener('click', () =>{
    let pNode = document.createTextNode(counter)
    const pTag = document.createElement('p')
    
    console.log(counter)
    
    if(counter% 10 == 0){    
        pTag.classList.remove('rechteck')
        pTag.classList.add('weiss')
    }else{
        pTag.classList.remove('weiss')
        pTag.classList.add('rechteck')
    }

    pTag.appendChild(pNode)
    
    counter++

    myDiv.appendChild(pTag)
})