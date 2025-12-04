const DemokratischComponentHTML = `
<div>
    <nav id="section-nav">
        <button id="open-site-nav"></button>
        <div id="nav-section-list"></div>
    </nav>
    <section name="main">
        <div class="main wrapper">
            <a class="wrapper-links" href="https://www.gs-ober-olm.de/files/demokratieerziehung.pdf" target="_blank">Modell der Demokratieerziehung<br>an unserer Schule</a>
            <a class="wrapper-links" href="https://www.gs-ober-olm.de/files/klassenrat.pdf" target="_blank">Klassenrat und Wochenwiese</a>
            <a class="wrapper-links" href="https://www.gs-ober-olm.de/files/sch%C3%BClerparlament.pdf" target="_blank">Schülerparlament</a>
        </div>
    </section>
</div>
<template id="nav-element-template">
        <button id="nav-element-button"></button>
</template>
<style>
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    #section-nav {
        display: flex;
        flex-direction: column;
        justify-self: center;
        justify-content: center;
        align-items: center;
        position: sticky;
    }

    #open-site-nav {
        all: unset;
        cursor: pointer;
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
        background-image: url("Schilder/ViereckSchild.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transition: all 1s;
    }
    #open-site-nav:hover {
        filter: drop-shadow(0px 0px 5px black);
    }

    #open-site-nav.active {
        transform: rotateZ(180deg);
    }
    
    #nav-section-list {
        display: flex;
        overflow: hidden;
        padding: 10px;
        flex-direction: column;
        max-height: 0;
        opacity: 0;
        transition: max-height 1.0s ease, opacity 0.5s ease;
        margin-bottom: 50px;
    }

    #nav-section-list.active {
        max-height: 1000px;
        opacity: 1;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-self: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        box-shadow: 2px 2px 10px var(--basic-border-color);
        border: 1px solid gray;
        border-radius: 50px;
        margin-bottom: 100px;
        width: 50%;
        gap: 20px;
        background-color: var(--box-background-color);
    }

    .wrapper-links {
        all: unset;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 15px;
        border: 1px solid black;
        border-radius: 20px;
        width: 50%;
        justify-self: center;
        align-self: center;
        box-shadow: 2px 2px 5px black;
        transition: all 1.0s;
    }

    .wrapper-links:hover {
        background-color: orange;
    }

    @media (width < 1650px) {
        .wrapper {
            width: 80%;
        }
    }

    @media (width < 1150px) {
        .wrapper {
            width: 80%;
        }
    }

    @media (width < 800px) {
        #open-site-nav {
            margin-top: 20px;
            width: 80px;
            height: 80px;
        }
        .wrapper {
            width: 95%;
        }
        .wrapper-links {
            width: 90%;
        }
    }
</style>
`;
export default DemokratischComponentHTML;