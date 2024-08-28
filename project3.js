let moon =document.getElementById('moon');
let stars =document.getElementById('stars');
let moountian3 =document.getElementById('mountain');
let river =document.getElementById('river');
let jbal =document.getElementById('jbal');
let bateau =document.getElementById('bateau');
let shemsou =document.querySelector('.shemsou');

window.onscroll=function(){
    let value=scrollY;
    
    // bach n3rfo chal hbtna f scroll :: console.log(value)
    stars.style.left=value+'px';
    moon.style.top=value*3.7+'px'; 
    moountian3.style.top =value*2+'px';
    jbal.style.top=value*1.5+'px';
    river.style.top=value+'px';
    bateau.style.top=value+'px';
    bateau.style.left=value*2+'px';
    shemsou.style.fontSize =value+'px';
    if
        (scrollY>=100){
            shemsou.style.fontSize =100+'px';
            shemsou.style.position='fixed'; 
        
            if(scrollY>=590){
               shemsou.style.display='none' ;
            }
            else{
                shemsou.style.display='block';
            }
            if(scrollY>=158){
                document.querySelector('.main').style.background=' linear-gradient(#376281,#400479)';
            }
            else{
                document.querySelector('.main').style.background='linear-gradient(#200016,#400479)';

                
            }
        }
     
    }
