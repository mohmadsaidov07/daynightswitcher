const header = document.querySelector('.header')
const main = document.querySelector('.main')

let daynightblock = document.createElement('div')
daynightblock.classList.add('daynightblock')
main.append(daynightblock)

let daynightword = document.createElement('div')
daynightword.classList.add('daynightword')
daynightword.textContent = 'NIGHT'
daynightblock.append(daynightword)

daynightblock.classList.toggle('nightblock')
main.classList.toggle('nightmain')
header.classList.toggle('nightheader')

let counter = 0 // 0 == night

const changer = document.querySelector('.main .daynightblock')

function button_toggler(btn){
    btn.addEventListener('click', () => {
        if(counter == 0){
            daynightblock.classList.toggle('nightblock')
            main.classList.toggle('nightmain')
            header.classList.toggle('nightheader')
            daynightword.textContent = 'DAY'
            counter = 1
        }else if(counter == 1){
            daynightblock.classList.toggle('nightblock')
            main.classList.toggle('nightmain')
            header.classList.toggle('nightheader')

            daynightword.textContent = 'NIGHT'
            counter = 0
        }
    })
}

button_toggler(changer)