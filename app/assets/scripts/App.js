import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/sticky-header'
import ClientArea from './modules/Client_Area'

new ClientArea()
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-items"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
let modal

let mobileMenu = new MobileMenu();

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}

