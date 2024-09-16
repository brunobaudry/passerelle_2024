// Math
Math.round();
Math.random(); // between 0.0 to 1.0 0.43613705113918433 included
Math.round(Math.random() * 10);
// Modulo
this.onload= ()=>{
    const rows = 160;
    const cols = 40;
    let r = 0;
    let c = 0;
    const ballChanger = (e)=>{
        const id = e.target.id.split('-');
        console.log(id, id[0].substr(2));
        const x = Number(id[0].substr(2));
        const y = Number(id[1]);
        console.log(x, y);
        const max = 2;

        for(k = 0; k < rows; k++){
            for(l = 0; l < cols; l++){
                const name = `#id${k}-${l}`;
                let timeout = 1000;
                try{
                    const item = document.querySelector(name);
                    if(k < x - max || k > x + max || l < y -max || l > y + max ){
                        // if(item.textContent)
                         item.textContent = "_";
                         item.setAttribute('class','shadow');
                    }
                    else {
                        if(k === x && l ===y ){
                            item.textContent = "|";
                            item.setAttribute('class','center');
                            timeout = timeout + 1000;
                        }
                        else if(k > x - (max) && l > y - (max) && k < x + (max) && l < y + (max) ){
                            item.textContent = "\\";
                            
                            item.setAttribute('class','circle1');
                            timeout = timeout + 500;
                        }
                        else{
                            item.textContent = "/";
                            item.setAttribute('class','circle2');
                            timeout = timeout + 250;
                        }
                        window.setTimeout(()=>{
                            item.textContent = "_";
                            item.setAttribute('class','shadow');
                        }
                            , timeout * Math.random() + 250);
                    }
                }
                catch(e){
                    //console.warn(`#${k}::${l}`);
                }
                
            }
        }
    }
    for (let i=0; i < rows; i++){
        for (let j=0; j < cols; j++){
            const s = document.createElement('span');
            s.id = `id${i}-${j}`;
            s.class = `row${i}`;
            s.textContent = '_';
            s.addEventListener('mouseover', ballChanger);
            document.body.appendChild(s);
        }
        document.body.appendChild(document.createElement('br'));
    }   
};



// Date
const today = new Date();
today.toISOString();


