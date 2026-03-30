var agora = new Date()
var diasem = agora.getDay()
switch(diasem){
    case 0:
        console.log(diasem + ' domingo')
    break

    case 1:
        console.log(diasem + ' segunda')
    break

    case 2:
        console.log(diasem + ' terça')
    break

    case 3:
        console.log(diasem + ' quarta')
    break

    case 4:
        console.log(diasem + ' quinta')
    break

    case 5:
        console.log(diasem + ' sexta')
    break

    case 6:
        console.log(diasem + ' sabado')
    break
    
    default:
        console.log('dia invalido')
    break
}