

let decode = document.querySelector('#decode')
let encode = document.querySelector('#encode')
let result = document.querySelector('#result')
let textArea = document.querySelector('#textArea')
let cifra = document.querySelector('#cifra')
let base = document.querySelector('#base')
let button = document.querySelector('#button')
let method
let incremento = 1


let selection = document.querySelector('#selection')
let hiddenInput = document.querySelector('#hiddenInput')
// function pra pegar entrada do usuário
selection.addEventListener("change", function(selection) {
    var selectionEscolhida = selection.target.value

        if(selectionEscolhida == 'base64') {
            hiddenInput.style.display = "none"
            button.setAttribute("onclick", "base64()")
        } else {
            hiddenInput.style.display = "inline"
            button.setAttribute("onclick", "cesar()")
        }
    }
)

encode.addEventListener("click", function () {
    button.innerText = "Codificar";
})

decode.addEventListener("click", function () {
    button.innerText = "Decodificar";
})

function base64(){
    let mensagem = textArea.value
    let choice = encode.selected
    result.value = base64Logic(mensagem, choice);
}

function base64Logic(mensagem, choice){
    return (choice)? btoa(mensagem) : atob(mensagem);
  }

function cesar()  {
    let mensagem = textArea.value.split("");
    var choice = encode.checked
    var numero =  parseInt(hiddenInput.value);
    if (choice){
      result.value = cesarEncode(mensagem, numero);
    } 
    else {
      result.value = cesarDecode(mensagem, numero);
    }
  }
  
  
  function cesarEncode(arr, key) {
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return String.fromCharCode(((code - 65 + key) % 26) + 65) 
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 + key) % 26) + 97)
        } else return c
    }).join('') 
  }
  
  function cesarDecode(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
        } else return c
    }).join('')
 }
