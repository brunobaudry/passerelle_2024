// run the code once the document is fully loaded
// exécuter le code une fois que le document est entièrement chargé
// Führen Sie den Code aus, sobald das Dokument vollständig geladen ist.
this.onload = ()=>{
    // Make a reference to a node (html element)
    // Verweis auf einen Knoten (html-Element) erstellen
    // Faire référence à un nœud (élément html)
    const anchor = document.querySelector('a');

    // adding a know attribute
    // anchor.href = 'https://www.merriam-webster.com/dictionary/dysfunctional'; // href is known
    // anchor.target = '_blank';
    // anchor.setAttribute('target','_blank'); // same as above
    
    // class is unknown (check auto completion). 
    // anchor.setAttribute('class','highlighted'); // replaces the attribute's value

    // using the classList property, a DOMTokenList object 
    // const classes = anchor.classList; // DOMTokenList
    // console.log(classes);
    // classes.add('links');
    // console.log(classes);

    let className = anchor.className; // String
    // className += ' info';
    // anchor.className = className;
    // console.log(className, anchor.className);
}