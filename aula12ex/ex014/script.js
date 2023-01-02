function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#f0a78a'
} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#b2d3f0'
} else {
    img.src = 'noite.png'
    document.body.style.background = '#0f2140'

}
}