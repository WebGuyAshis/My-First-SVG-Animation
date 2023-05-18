let logo  = document.querySelectorAll('.flowPath');
console.log(logo);

for(let i = 0; i<logo.length; i++){
    console.log('Inside Loop');
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}