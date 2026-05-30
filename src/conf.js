import defaultImageUser from "./assets/images/defaultUser.png"
import imageMenu from "./assets/images/menu.jpg"
import imageContact from "./assets/images/contact.jpg";
import comida1 from "./assets/images/comida1.webp"
import comida2 from "./assets/images/comida2.webp"
import comida3 from "./assets/images/comida3.webp"
import comida4 from "./assets/images/comida4.webp"
import comida5 from "./assets/images/comida5.webp"
import mapaBrasil from "./assets/images/mapaBrasil.png"

export const restaurantInfo = {
   name: "Restaurant Page",
   contact: {
    phone: "(##) #####-####",
    email: "restaurantpage@email.com",
   },
   location: {
    point1: {
      way: "Avenida Afonso Pena",
    neighborhood: "Centro",
    city: "Belo Horizonte - MG"
    },
    point2: {
      way: "Rua João Pessoa",
    neighborhood: "Centro",
    city: "Aracaju - SE"
    },
    point3: {
      way: "Rua Marechal Deodoro",
    neighborhood: "Centro",
    city: "Manaus - AM"
    }
   },
   pages: {
     page1: "Home",
     page2: "Menu",
     page3: "Contact"
   }


}

const imagesMarquees = [comida1, comida2, comida3, comida4, comida5]

let pages = [restaurantInfo.pages.page1, restaurantInfo.pages.page2, restaurantInfo.pages.page3];

let imagesPages = [ imageMenu, imageContact]

export let texts = {
 siteName: "Restaurant Page"
 
}

export function components() {

   return {
      el (el, cl = undefined, id = undefined) {
         const elem = document.createElement(`${el}`);
        
         if(cl !== undefined) { elem.setAttribute("class", cl)};
        if(id !== undefined) { elem.setAttribute("id", id)};

        return elem;
         console.log(elem)
      },
      p (text = "", cl = undefined, id = undefined) {
        const p = document.createElement("p");
        
        if(cl !== undefined) { p.setAttribute("class", cl)};
        if(id !== undefined) { p.setAttribute("id", id)};
        p.textContent = `${text}`

        return p;
      },
       a (text = "", cl = undefined, id = undefined, href = undefined) {
        const a = document.createElement("a");
        
            if(cl !== undefined) { a.setAttribute("class", cl)};
            if(id !== undefined) { a.setAttribute("id", id)};
          if (href !== undefined) { a.setAttribute("href", href)};

        a.textContent = `${text}`

        return a;
      
   },
   img (src = defaultImageUser, alt = "Image", cl = undefined, id = undefined) {
      const img = document.createElement("img");

       img.setAttribute("src", `${src}`);
       img.setAttribute("alt", alt)

          if(cl !== undefined) { img.setAttribute("class", cl)};
        if(id !== undefined) { img.setAttribute("id", id)};

        return img;
   }, 
   button (text = "", cl = undefined, id = undefined) {
        const button = document.createElement("button");
        
        if(cl !== undefined) { button.setAttribute("class", cl)};
        if(id !== undefined) { button.setAttribute("id", id)};
        button.textContent = `${text}`

        return button;
}
}
} 

export const comps = components();


// home page


export function header(father) {

   const h = document.createElement("header");

   h.setAttribute("class", "headerTop")

   father.appendChild(h);
    
    const nav = comps.el("nav", ["nav_header"], undefined);
    h.appendChild(nav);


    const logo = comps.p("Restaurant", ["logo"], undefined);

    const ul = comps.el("ul", undefined, undefined);
     
    for(let i = 0; i < 3; i++) {
      const li = comps.el("li", ["pages"], undefined);
 
     
       
      const a = comps.p(`${pages[i]}`, undefined, pages[i]);

      li.appendChild(a)

      ul.appendChild(li)
    }

    ul.addEventListener("click", (e) => {
    const page = e.target.id;

    switch(page) {
      case "Home": const pageHome = new CustomEvent("cPageHome");
       document.dispatchEvent(pageHome); 
       break;
      case "Menu": const pageMenu = new CustomEvent("cPageMenu");
       document.dispatchEvent(pageMenu);
       break;
      case "Contact": const pageContact = new CustomEvent("cPageContact");
       document.dispatchEvent(pageContact);
       break;
      
    }
    })

    const options = comps.el("div", "options", "hambOptions");

    options.addEventListener("click", () => {
       const controlSideBar = new CustomEvent('cSideBar');

       document.dispatchEvent(controlSideBar)
    })
    
    for(let i = 0; i < 3; i++) {
     const option = comps.el("span", undefined, undefined);

     options.appendChild(option)
    }

    nav.append(logo, ul, options);

   h.addEventListener("click", (e) => {
    const elem = e.target.id;

    switch(elem) {
      case "hambOptions": 

    }
   })

}

export function footer(father) {
 
 const footer = comps.el("footer", undefined, undefined);

 const linkTheOdinProject = comps.a("The curse of The Odin Project", undefined, undefined, "https://www.theodinproject.com");

 const linkUserGitHub = comps.a("The my user GitHub: MTprogramer0", undefined, undefined, 'https://github.com/MTprogramer0');

 const linkUsnplash = comps.a("The images from: Unsplash", undefined, undefined, "https://unsplash.com");

 footer.append(linkTheOdinProject, linkUserGitHub, linkUsnplash);

 father.appendChild(footer);

}

export function intro(father) {
  const container_intro = comps.el("div", ["container_intro"], undefined)

  father.appendChild(container_intro);



  // container texts

  const container_texts = comps.el("div", ["container_texts"], undefined);

  const title = comps.p("Bem vindo ao", undefined, undefined)

  const description = comps.p("O restaurant conta com a melhor qualidade e diversidade de pratos para todos os gostos", undefined, undefined)

  const container_description = comps.el("div", undefined, undefined)

   container_description.appendChild(description)
  
  container_texts.append(title, container_description)

  const container_marquees = comps.el("div", ["container_marquees"], undefined);

  for(let i = 0; i <3; i++){

     const images1 = imagesMarquees.map(el => comps.img(`${el}`, "image comida", "images_marques", undefined))

     const images2 = imagesMarquees.map(el => comps.img(`${el}`, "image comida", "images_marques", undefined))

    const container = comps.el("div", "container_marquees_image", undefined );

    const content = comps.el("div", "content_image", undefined);

    const content2 = comps.el("div", "content_image", undefined)

    content.append(...images1);

    content2.append(...images2);

    
    container.append(content, content2);

    container_marquees.appendChild(container)
  }

  container_intro.append(container_texts, container_marquees)

}

export function sectionHours(father) {
  const hours = comps.el("section", "section_hours", undefined);

  const textHours = comps.p("Horários de funcionamento");

  const containerWeekHours = comps.el("div", "container_week_hours", undefined);

  let week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  let weekHours1 = ["8:00 horas", "6:00 horas", "6:00 horas", "6:00 horas", "6:00 horas", "6:00 horas", "8:00 horas"];

  let weekHours2 = ["20:00 horas", "18:00 horas", "18:00 horas" , "18:00 horas", "22:00 horas", "22:00 horas", "22:00 horas"]

  const weekCards = week.map((day, index) => {
  
    const card = comps.el('div', "card_day", undefined);

    const cardContainerTop = comps.el("div", undefined, undefined);

    const cardContainerBottom = comps.el("div", undefined, undefined);

    const cardTitle = comps.p(day, undefined, undefined);

    const cardHour1 = comps.p(weekHours1[index], undefined, undefined);

    const complementHours = comps.p("às", undefined, undefined);

    const cardHour2 = comps.p(weekHours2[index], undefined, undefined);
    

  cardContainerTop.appendChild(cardTitle);

  cardContainerBottom.append(cardHour1, complementHours, cardHour2);

  card.append(cardContainerTop, cardContainerBottom);

  return card;
  
  })


  containerWeekHours.append(...weekCards);

  hours.append(textHours, containerWeekHours);

  father.appendChild(hours)
}

export function sectionLocation(father) {
  const containerLocation = comps.el("section", "container_location", undefined);

  const content_img = comps.el("div", "container_image", undefined);

  const img = comps.img(mapaBrasil, "Foto do estabelecimento", "location_image", undefined);

  for(let i = 0; i < 3; i++) {
    const point = comps.el("div", "point", `point${i}`);

    content_img.appendChild(point)
  }

  const content_text = comps.el("div", "container_texts_location", undefined);

  const title = comps.p("Localizações", undefined, undefined);

  const container_location = comps.el("div", "container_location_content", undefined);

  let cities = [restaurantInfo.location.point1.city, restaurantInfo.location.point2.city, restaurantInfo.location.point3.city];
  let ways = [restaurantInfo.location.point1.way, restaurantInfo.location.point2.way, restaurantInfo.location.point3.way];
  let neighborhood = [restaurantInfo.location.point1.neighborhood, restaurantInfo.location.point2.neighborhood, restaurantInfo.location.point3.neighborhood];
  
  const locations = cities.map((el, index) => {
    const container = comps.el("div", "file_location", undefined);

    const containerPoint = comps.el("div", "container_point", undefined);
    const pointFile = comps.el("div", undefined, `point_file${index + 1}`);

    const containerText = comps.el("div", "content_text_adress", undefined);

    const textCities = comps.p(el, undefined, undefined);
    const textWaysNeighborhood = comps.p(`${ways[index]} - ${neighborhood[index]}`, undefined, undefined);
    
    containerPoint.appendChild(pointFile);

    containerText.append(textCities, textWaysNeighborhood);

    container.append(containerPoint, containerText);

    return container;
    
  })

  container_location.append(...locations);

  content_text.append(title, container_location);

  content_img.append(img);

  containerLocation.append(content_img, content_text);

  father.appendChild(containerLocation)
}

export function sideBar(father) {
  const side = comps.el("aside", "aside_options", undefined);

  const title = comps.p("Opções", undefined, undefined)

  const nav = comps.el("nav", undefined, undefined);

  let options = ["Horários", "Sobre", "contato", "reportarBugs", "avaliarSite"];

  const elemOptions = options.map((el, index ) =>{ return el = comps.button(el, "btn_options", `btn${index + 1}`)})

  nav.append(...elemOptions);

  side.append(title, nav)

  father.appendChild(side)
}


// menu page 


export function menuFoods(father) {
  const containerContent = comps.el("div", "container_foods", undefined);

  const foods = ["Caesar Clássica ao Grelhado", "Penne Al Fungi com Suprema de Frango", "Ancho Grelhado com Fritas Rústicas", "Filet Mignon ao Alecrim com Batatas ao Murro", "Asado de Tira Premium à Moda da Casa"];

  const foodsDescriptions = ["Cama de folhas jovens de alface romana perfeitamente selecionadas, envolvidas em um cremoso molho Caesar artesanal. Acompanha lascas generosas de queijo Grana Padano, croutons dourados ao toque de ervas finas e finas tiras de peito de frango grelhado na brasa, finalizado com flor de sal.",
   "Massa penne al dente envolta em um aveludado molho Alfredo à base de creme de leite fresco, parmigiano e um sutil toque de noz-moscada. Servido com tenros cubos de frango salteados e finalizado com folhas frescas de manjericão e brotos sazonais.",
   "Corte nobre de bife Ancho grelhado ao ponto do chef, mantendo a suculência e o marmoreio impecáveis. Guarnecido com batatas cortadas à mão e fritas até a crocância perfeita, tomates-cereja confitados em azeite de oliva extra virgem e folhas aromáticas de manjericão.",
   "Medalhão de Filet Mignon selado em alta temperatura, servido sobre um espelho de demi-glace artesanal. Acompanha batatas douradas ao forno com toque de alecrim fresco e especiarias, criando uma harmonia perfeita entre rusticidade e elegância.",
   "Corte clássico da alta cutelaria, assado lentamente para preservar a maciez extrema da carne e realçar seu sabor marcante. Servido em berço de ferro fundido com mini batatas rústicas caramelizadas, cebolas tostadas na brasa e ramos de alecrim fresco."
  ]

  const prices = ["R$ 89", "R$ 96", "R$ 114", "R$ 157", "R$ 142"];

  const imagesMenu = [comida2, comida4, comida5, comida1, comida3]

  const sectionsFoods = imagesMenu.map((el, index) => {
    const section = comps.el("section", "section_food", undefined)
    
    const containerImage = comps.el("div", "foods_container_images");

    const img = comps.img(`${el}`, "Foto ilustrativa do prato", "pratos ani_menu", undefined);

    const containerTexts = comps.el("div", "foods_container_texts", undefined);

    const title = comps.p(foods[index], "food_title ani_menu", undefined);

    const containerDescription = comps.el("div", undefined, undefined)

    const description = comps.p(foodsDescriptions[index], "ani_menu", undefined);

    const price = comps.p(prices[index], "text_price ani_menu", undefined);

    containerImage.appendChild(img);

    containerDescription.appendChild(description);

    containerTexts.append(title, containerDescription, price);

    section.append(containerImage, containerTexts);

    return section;

  });

  containerContent.append(...sectionsFoods);

  father.appendChild(containerContent)
}


export function contactSection(father) {
  const section = comps.el("section", "container_contact", "containerContact");

  const title = comps.p("Contato", "title_contact", undefined);

  const contact = comps.el("div", undefined, undefined);

  const titleInfo = ["CNPJ","Telefone", "WhattsApp", "Instagram"];

  const info = ["123-456-789/1234-56", "(55) 12345-6789", "Restaurant: (55) 12345-6789", "@RestaurantOfficial"];

  const elem = titleInfo.map((el, index) => {
    const content = comps.el("div", "content_contact");

    const title = comps.p(el, undefined, undefined);

    const description = comps.p(info[index], undefined, undefined);

    content.append(title, description);

    return content;
  })

  contact.append(...elem);

  section.append(title, contact);

  father.appendChild(section)

}