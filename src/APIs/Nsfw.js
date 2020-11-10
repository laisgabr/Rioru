module.exports = class Nsfw {
    getBoobs() {
        function addZerosEsquerda(n) {
           return ("0000" + n).slice(-4)
        } 
          
        const valor = Math.floor(Math.random() * 403)

        const number = addZerosEsquerda(valor)   

        const string = `http://www.porngif.top/gif/prsa/${number}.gif`
        
        return string
    }

    getAss() {
        function addZerosEsquerda(n) {
          return ("0000" + n).slice(-4)
        } 
          
        const valor = Math.floor(Math.random() * 216)

        const number = addZerosEsquerda(valor)
        const string = `www.porngif.top/gif/zadky/${number}.gif`

        return string
    }

    getPussy() {
       function addZerosEsquerda(n) {
           return ("0000" + n).slice(-4)
        } 
          
        const valor = Math.floor(Math.random() * 229)

        const number = addZerosEsquerda(valor)
         
       const string = "www.porngif.top/gif/kundicky/" + number + ".gif"

       return string
    }
}