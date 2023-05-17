

export function createHeader(): void {

    const header = document.querySelector("header")
    const navBar = document.createElement("nav");
    const container = document.createElement("div");
    const heading = document.createElement("h1");
    const toggleButton = document.createElement("button");
    const iconSpan = document.createElement("span");
    const collapseNavbar = document.createElement("div");
    const scrollBoxNav = document.createElement("div");
    const scrollBoxInnerNav = document.createElement("div");
    const sidebarListNav = document.createElement("ul");

    navBar.classList.add("navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "main-navbar");
    header?.appendChild(navBar);

    container.classList.add("container-fluid");
    navBar.appendChild(container);

    heading.classList.add("m-auto");
    heading.innerText = "Rick & Morty";
    container.appendChild(heading);

    toggleButton.classList.add("navbar-toggler");
    toggleButton.type = "button";
    toggleButton.setAttribute("data-bs-toggle", "collapse");
    toggleButton.setAttribute("data-bs-target", "#navbar-colapse");
    toggleButton.setAttribute("aria-controls", "#navbar-colapse");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "Toggle navigation");
    container.appendChild(toggleButton);

    iconSpan.classList.add("navbar-toggler-icon");
    toggleButton.appendChild(iconSpan);

    collapseNavbar.classList.add("collapse", "navbar-collapse");
    collapseNavbar.id = "navbar-colapse";
    container.appendChild(collapseNavbar);

    scrollBoxNav.classList.add("scrollbox");
    scrollBoxNav.id = "scroll-box-nav";
    collapseNavbar.appendChild(scrollBoxNav);

    scrollBoxInnerNav.classList.add("scrollbox-inner");
    scrollBoxInnerNav.id = "side-menu-nav";
    scrollBoxNav.appendChild(scrollBoxInnerNav);

    sidebarListNav.classList.add("sidebar-list");
    sidebarListNav.id = "sidebar-list-nav";
    scrollBoxInnerNav.appendChild(sidebarListNav);

}


export function createSidebar() {
    const main = document.querySelector("main");
    const sidebar = document.createElement("nav");
    const sidebarHeader = document.createElement("div");
    const heading = document.createElement("h2");
    const scrollBox = document.createElement("div");
    const scrollBoxInner = document.createElement("div");
    const sidebarList = document.createElement("ul");
    const sidebarFooter = document.createElement("div");

    sidebar.classList.add("sidebar");
    main?.appendChild(sidebar);

    sidebarHeader.classList.add("sidebar-header");
    sidebar.appendChild(sidebarHeader);

    heading.innerText = "EPISODES";
    sidebarHeader.appendChild(heading);

    scrollBox.classList.add("scrollbox");
    scrollBox.id = "scroll-box";
    sidebar.appendChild(scrollBox);

    scrollBoxInner.classList.add("scrollbox-inner");
    scrollBoxInner.id = "side-menu";
    scrollBox.appendChild(scrollBoxInner);

    sidebarList.classList.add("sidebar-list");
    sidebarList.id = "sidebar-list";
    scrollBoxInner.appendChild(sidebarList);

    sidebarFooter.classList.add("sidebar-footer");
    sidebarFooter.id = "sidebar-footer";
    sidebar.appendChild(sidebarFooter);

}


export function createMainContainer() {
    const main = document.querySelector("main");
    const mainWrapper = document.createElement("div");
    const mainContainer = document.createElement("div");

    mainWrapper.classList.add("main-wrapper");
    mainWrapper.id = "main-wrapper";
    main?.appendChild(mainWrapper);

    mainContainer.classList.add("container", "main-content");
    mainContainer.id = "main-content";
    mainWrapper.appendChild(mainContainer);

}