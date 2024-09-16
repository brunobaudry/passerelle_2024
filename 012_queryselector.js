this.onload = ()=>{
    const title = document.querySelector("h1");
    const chapter1 = document.querySelector("#chapt1");
    console.group('title');
    console.log(title);
    console.log(title.textContent);
    console.groupEnd();
    // 
    console.group('chapter');
    console.log(chapter1);
    console.log(chapter1.textContent);
    chapter1.style.color = "blue";
    console.groupEnd();
//
    console.group('spans');
    const spanFirst = document.querySelector("span");
    console.log(spanFirst, spanFirst.textContent);
//
    const spans = document.querySelectorAll("span");
    console.log(spans);
    console.log(spans.textContent);// undefined
    console.group('looping on object'); // will loop on all objects even the 'prototype'. Looking at the prototype, in dev tools, can tell us avaible functions
    for( const i in spans){
        // if(spans[i].textContent === undefined) continue;
        console.log(i,spans[i].textContent);
    }
    console.groupEnd();
    console.group('looping on content');
    spans.forEach((e)=>console.log(e.textContent));
    console.groupEnd();
    console.groupEnd();
};