export default class MakeSubSiteNav{
    static Instance = new MakeSubSiteNav();
    createSiteNavigation(self) {
        const navElement = self.shadow.querySelector("section-nav-component");
        if (navElement) navElement.parentShadow = self.shadow;
        self.navListElements = self.shadow.querySelectorAll(".section-nav-element")
        
        self.navListElements.forEach(/**@type {HTMLButtonElement}*/(button) => {
            button.addEventListener("click", () => {
                let target = button.getAttribute("nav-target");
                let targetElement = self.shadow.querySelector(`section[name="${target}"]`);
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });

        /**@type {HTMLButtonElement} */
        self.toggleSiteNavButton = self.shadow.querySelector("#open-site-nav");
        self.siteNavList = self.shadow.querySelector("#nav-section-list");
        
        self.toggleSiteNavButton.addEventListener("click", () => {
            self.siteNavList.classList.toggle("active");
        });

        self.toggleSiteNavButton.addEventListener("blur", () => {
            self.siteNavList.classList.remove("active");
            self.toggleSiteButton.classList.remove("active");
        });

        /**@type {HTMLButtonElement} */
        self.toggleSiteButton = self.shadow.querySelector("#open-site-nav");
        self.toggleSiteButton.addEventListener("click", () => {
            self.toggleSiteButton.classList.toggle("active");
        });
    };
};