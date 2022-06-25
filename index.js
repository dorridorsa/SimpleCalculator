const num = document.querySelectorAll('div .num');
const operator = document.querySelectorAll('.operator');
const min = document.querySelector('.min');
const eval = document.querySelector('.eval');
const backSpace = document.querySelector('.extra');
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const dot = document.querySelector('.point');
const clear = document.querySelector('.ac');


let y = '';
let x = '';
let p;
let s;
let operate = '';
let r;


function stringNUm(m, n)
{
    s = Number(m);
    p = Number(n);
}

function add(x, y)
{
    return x + y;
}


function subtract(x, y)
{
    return x - y;
}


function divide(x, y)
{
    if (y == 0)
    {
        alert('Error');
    }
    else{
    return x / y;
    }
}


function multiply(x, y)
{
    return x * y;
}


function power(x, y)
{
    return Math.pow(x, y);
}


function percent(x)
{
    return x / 100;
}


function negate(x)
{
    return x = -x;
}


function evaluate(a, b)
{
     if (operate == '-/+')
    {
       return negate(a);
    }
    else if (operate == '%')
    {
        return percent(a);
    }
    else if (x == '' || y =='' || operate == '')
    {
        return;
    }
    else if (operate == 'x')
    {
       return  multiply(a,b);
    }
    else if (operate == '+')
    {
        return add(a,b);
    }
    else if (operate == '/')
    {
        return divide(a, b);
    }
    else if (operate == '-')
    {
        return subtract(a,b);
    }
    else if (operate == '^')
    {
       return power(a, b);
    }
  
    else if (operate == '-/+')
    {
       return negate(a);
    }

}

num.forEach(n =>
    {
        n.addEventListener('click', (e) =>
        {
            const j = n.textContent;
            y += j;
            input.textContent += j;
            stringNUm(x, y);
            r = evaluate(s, p);
            result.textContent = r;
            
        })
    })

dot.addEventListener('click', (e) =>
{
    y += dot.textContent;
    input.textContent += dot.textContent
    dot.style.visibility = 'hidden';
})

operator.forEach(o =>{
    o.addEventListener('click', (e) =>
    {
        operate = o.textContent;
        input.textContent += o.textContent;
        x = y;
        y = '';
        dot.style.visibility = 'visible';
        min.style.visibility = 'visible';
    
        if(r)
        {
           x = r 
        }
        stringNUm(x, y);
        r = evaluate(s, p);
        result.textContent = r;
        console.log(operate);
        
    })
})

clear.addEventListener('click', (e) =>
{
    y = '';
    x = '';
    r = '';
    result.textContent = '';
    input.textContent = '';
    dot.style.visibility = 'visible';
    min.style.visibility = 'visible';
})

min.addEventListener('click', (e) =>
{
    y = `-${y}`;
    if (x)
    {
    input.textContent += y;
    }
    else{
        input.textContent = y; 
    }

    min.style.visibility = 'hidden';
})

eval.addEventListener('click', (e) =>
{
    y = r;
    r = '';
    x = '';
    result.textContent = '';
    input.textContent = y;
})

backSpace.addEventListener('click', (e) =>
{
    let q;
    let z = input.textContent;
    q = z.split('');
    q.splice(-1, 1);
    input.textContent = q.join('');
    
    if (y)
    {
       q = y.split('');
       q.splice(-1, 1);
       y = q.join('')
       console.log(y);
    }
    else if(operate)
    {
      operate = '';
         console.log(operate);
    }
    else if(x)
    {
        q = x.split('');
       q.splice(-1, 1);
       x = q.join('')
       console.log(x); 
    }
    else{
        result.textContent = '';
        r = '';
    }
     stringNUm(x, y);   
    r = evaluate(s,p);
    result.textContent = r;

})
