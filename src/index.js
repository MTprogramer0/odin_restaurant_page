import datas from "../src/conf.js";
import { components, header, footer, intro, comps, sectionHours, sectionLocation, sideBar, menuFoods, contactSection } from "../src/conf.js"
import "./styles.css";

const body = document.querySelector("body")

const containerHtml = document.querySelector(".content");

// body

window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

header(containerHtml);

 intro(containerHtml);

sectionHours(containerHtml)

sectionLocation(containerHtml)

footer(containerHtml);

document.addEventListener("cPageHome", () => {
 containerHtml.innerHTML = "";

window.scrollTo(0, 0);

 header(containerHtml);

 intro(containerHtml);

sectionHours(containerHtml)

sectionLocation(containerHtml)

footer(containerHtml);

sideBar( containerHtml)


})

document.addEventListener("cPageMenu", () => {
  containerHtml.innerHTML = "";
  window.scrollTo(0, 0);
  header(containerHtml);
  menuFoods(containerHtml);
  footer(containerHtml);
  sideBar(containerHtml);
  activeObserver()
})

document.addEventListener("cPageContact", () => {
  containerHtml.innerHTML = "";
  window.scrollTo(0, 0);
  header(containerHtml);
  contactSection(containerHtml);
  footer(containerHtml);
  sideBar(containerHtml);
})
 
document.addEventListener("cSideBar", () => {
   const aside = document.querySelector("aside")

    if (aside) {
        aside.classList.toggle("active");
    } else {
        console.warn("O evento cSideBar foi chamado, mas a tag <aside> não está na tela.");
    }
})

// animations scroll

// -- animation header

const headerEl = document.querySelector(".headerTop");

window.addEventListener("scroll", () => { window.scrollY > 100 ? headerEl.classList.add("scroll_active") : headerEl.classList.remove("scroll_active")
})

// animation menu

function activeObserver() {
  const observerAni = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
            observerAni.unobserve(entry.target)
        }
    })
  }, {threshold: 0.1});

  document.querySelectorAll(".ani_menu").forEach(el => observerAni.observe(el));
}

