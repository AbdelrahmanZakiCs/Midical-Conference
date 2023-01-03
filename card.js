let names = [
    'Prof. Mohamed Ismaiel',
    'Prof. Mohamed Hisham',
    'Prof. Mona Lisa'

];




let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = "center";

function createElement(i = 1, names) {

    //Element
    let card = document.createElement('div');
    let title = document.createElement('h3');
    let img = document.createElement("img");

    //Content 
    let head = document.createTextNode(names);


    img.src = `imgs/img${i}.jpg`;

    card.appendChild(head);


    // style


    card.style.width = '200px';

    img.style.width = '100px';

    img.style.height = '200px';

    card.appendChild(title);

    card.appendChild(img);

    container.appendChild(card);

    card.style.background = 'whitesmoke';

    card.style.padding = "10px";

    card.style.margin = '24px';

    card.style.display= 'inline-block';

}

  for(let i = 0 ; i < 3 ; i++){
    createElement(i + 1, names[i])
  }