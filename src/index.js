
import routes from "./routes"
import header from "./components/layout/header"
import footer from "./components/layout/footer"
import sliderHomePage from "./components/page-component/sliderPageHome"
window.addEventListener("DOMContentLoaded",routes)

const showHeader = async () => {
    document.querySelector("#header").innerHTML = await header.render();
    await header.start();
    await header.afterRender();
}
showHeader()


document.querySelector("#footer").innerHTML = footer.render();

//header js
