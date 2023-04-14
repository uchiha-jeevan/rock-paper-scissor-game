

// let aiValue = Math.floor(Math.random()*4);

// console.log(aiValue);

// let aip = ['rock','paper','scissor'];

// let aiChoice = aip(aiValue-1);


function reset(){
    let win = document.getElementById('win');
    let loss = document.getElementById('loss');
    let draw = document.getElementById('draw');
    let total = document.getElementById('total');

    let w = Number(win.textContent);
    let l = parseInt(loss.textContent);
    let t = parseInt(total.textContent);
    let d = parseInt(draw.textContent);

    w = 0;
    l = 0;
    d = 0;
    t = 0;

    document.getElementById('win').innerHTML=w;
    document.getElementById('loss').innerHTML=l;
    document.getElementById('draw').innerHTML=d;
    document.getElementById('total').innerHTML=t;

}






function checkWin(h,a){

    let win = document.getElementById('win');
    let loss = document.getElementById('loss');
    let draw = document.getElementById('draw');
    let total = document.getElementById('total');

    let w = Number(win.textContent);
    let l = parseInt(loss.textContent);
    let t = parseInt(total.textContent);
    let d = parseInt(draw.textContent);

    //console.log(w,l,t,typeof w)

    if (a===h){
        document.getElementById('result').innerHTML=`It's a Draw 😁`;
        d+=1
        t+=1;
    }
    else if(h=='rock' && a=='scissor'){
        document.getElementById('result').innerHTML=`rock beats scissor it's a win 😎`;
        t+=1;
        w+=1;
    }
    else if(h=='paper' && a=='scissor'){
        document.getElementById('result').innerHTML=`paper can't beats scissor it's a Loss 😥`;
        t+=1;
        l+=1;
    }
    else if(h=='paper' && a=='rock'){
        document.getElementById('result').innerHTML=`paper beats rock it's a win 😎`;
        t+=1;
        l+=1;
    }
    else if(h=='rock' && a=='paper'){
        document.getElementById('result').innerHTML=`rock can't beats paper it's a Loss 😥`;
        t+=1;
        l+=1;
    }
    else if(h=='scissor' && a=='paper'){
        document.getElementById('result').innerHTML=`scissor beats paper it's a win 😎`;
        t+=1;
        w+=1;
    }
    else if(h=='scissor' && a=='rock'){
        document.getElementById('result').innerHTML=`scissor can't beats rock it's a Loss 😥`;
        l+=1;
        t+=1;
    }
    document.getElementById('win').innerHTML=w;
    document.getElementById('loss').innerHTML=l;
    document.getElementById('draw').innerHTML=d;
    document.getElementById('total').innerHTML=t;



}



function rock(){
    a='rock';
    document.getElementById('human').innerHTML='You Choosed "Rock"';
    let aiValue = Math.floor(Math.random()*3);
    console.log(aiValue);
    let aip = ['rock','paper','scissor'];
    let aiChoice = aip[aiValue];
    console.log(aiChoice)
    document.getElementById('ai').innerHTML='AI Choose "' + aiChoice+'"';
    checkWin(a,aiChoice);
}

function paper(){
    a='paper'
    document.getElementById('human').innerHTML='You Choosed "paper"';
    let aiValue = Math.floor(Math.random()*3);
    console.log(aiValue);
    let aip = ['rock','paper','scissor'];
    let aiChoice = aip[aiValue];
    console.log(aiChoice)
    document.getElementById('ai').innerHTML='AI Choose "' + aiChoice+'"';
    checkWin(a,aiChoice);
}

function scissor(){
    a='scissor'
    document.getElementById('human').innerHTML='You Choosed "scissor"';
    let aiValue = Math.floor(Math.random()*3);
    console.log(aiValue);
    let aip = ['rock','paper','scissor'];
    let aiChoice = aip[aiValue];
    console.log(aiChoice)
    document.getElementById('ai').innerHTML='AI Choose "' + aiChoice+'"';
    checkWin(a,aiChoice);
}