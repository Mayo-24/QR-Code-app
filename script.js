let inputText = document.querySelector('.Text');
let sizes = document.querySelector('.size');
let main = document.querySelector('.qr-body');
let gButton = document.querySelector('.generate');
let dButton = document.querySelector('.download');

let empty = ()=> {
  if (inputText.value.length > 0) {
    generateQrCode();
  } else {
    alert('Enter the text or URL')
  }
}

let size = sizes.value;
sizes.addEventListener('change',(e)=> {
 size = e.target.value;
 empty();
});


function generateQrCode(){
  main.innerHTML= '';
  new QRCode(main, {
    text: inputText.value,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
});
} 

dButton.addEventListener('click',()=> {
  let img = document.querySelector('.qr-body img');
  if (img == null) {
    let imgAtrr = img.getAttribute('src');
    dButton.setAttribute('href',imgAtrr);
  } else {
    dButton.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`);
  }
})
gButton.addEventListener('click',(e)=>{
  empty();
  e.preventDefault();
  });
  
  