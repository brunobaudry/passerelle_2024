// run the code once the document is fully loaded
// exécuter le code une fois que le document est entièrement chargé
// Führen Sie den Code aus, sobald das Dokument vollständig geladen ist.
this.onload = ()=>{ 
    // Make a reference to a node (html element)
    // Verweis auf einen Knoten (html-Element) erstellen
    // Faire référence à un nœud (élément html)
    const body = document.querySelector('body');
    
    // Create a new elelement
    // Créer un nouvel élément 
    // Ein neues Element erstellen 
    const title = document.createElement('h1');
   
    // Add text content to the element
    // Fügen Sie dem Element Textinhalt hinzu
    // Ajouter du contenu textuel à l'élément
    title.textContent = 'hello, I am addded by code !';
    
    // Add the H1 as a child of the body element
    // Ajouter le H1 en tant qu'enfant de l'élément body
    // Fügen Sie das H1 als untergeordnetes Element des body-Elements hinzu.
    body.appendChild(title);
   
    //
    // removing elements
    //
    const unwanted = document.querySelector('em');
    // const unwanted = document.querySelector('#unwanted');
    // const unwanted = document.querySelector('.info');
    // body.removeChild(unwanted); // deleting from parent container
    // unwanted.remove(); // self removing 
}