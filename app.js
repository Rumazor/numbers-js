console.log('numbers project');

const numbers = [...document.querySelectorAll('.number')]


const updateCount = (el) =>{
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value/1000);
    let initialValue = 0

    const incrementCount = setInterval(()=>{
        initialValue += increment;
        if(initialValue > value){
            el.textContent = `${value}`;
            clearInterval(incrementCount);
            return;
        }


        el.textContent = `${initialValue}`;
    })





};

numbers.forEach(n =>{
    updateCount(n)
})