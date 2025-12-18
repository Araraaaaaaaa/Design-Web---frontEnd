var contatos = [
    {
        nome: "Jão",
        celular: "92929292",
        foto:"sonic.png",
        favorito: true
    },
    {
        nome: "Jéssica",
        celular: "24242424",
        foto:"timao.png",
        favorito: false
    },
    {
        nome: "Desconhecido",
        celular: "10101010",
        foto:"anonimo.png",
        favorito: false
    },
    {
        nome: "Nicole",
        celular: "78787878",
        foto:"alfredo.png",
        favorito: true
    }
]

const agenda = {
    data(){
        return{
            titulo: "minha agenda de contatos com VUE",
            msg: "Olá, Vue!",
            contatos: window.contatos
        }
    }
}
Vue.createApp(agenda).mount("#app");