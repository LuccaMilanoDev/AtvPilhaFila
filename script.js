let vetor = [];
let number = document.querySelector("#number");
let isPilhaSelecionado = false;
let isFilaSelecionado = false;

function add() {
  if (isPilhaSelecionado) {
    vetor.push(number.value);
    console.log(vetor);
    console.log(number.value);
  } else if(isFilaSelecionado){
    vetor.unshift(number.value);
    console.log(vetor);
    console.log(number.value);
  }
}
function remove() {
   if(isPilhaSelecionado){
      vetor.pop()
   }else if(isFilaSelecionado){
      vetor.shift()
   }
   console.log(vetor)
}
function clean() {
  for (let i = 0; i <= vetor.length; i++) {
    vetor.splice(i);
  }
  console.log(vetor);
}

function isPilha() {
  isPilhaSelecionado = true;
  isFilaSelecionado = false;
}

function isFila() {
  isPilhaSelecionado = false;
  isFilaSelecionado = true;
}
