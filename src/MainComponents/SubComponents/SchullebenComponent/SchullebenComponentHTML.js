const SchullebenComponentHTML = `
<div>
    <nav id="section-nav">
        <button id="open-site-nav"></button>
        <div id="nav-section-list">
            <section-nav-component class="section-nav-element"
                button-name="AGS an unserer Schule" nav-target="AGS"
            ></section-nav-component>
            <section-nav-component class="section-nav-element"
                button-name="Schulbibliothek" nav-target="schulbibliothek"
            ></section-nav-component>
            <section-nav-component class="section-nav-element"
                button-name="Kooperationen" nav-target="kooperationen"
            ></section-nav-component>
        </div>
    </nav>
    <section name="AGS">
        <div class="AGS wrapper">
            <h1>AGS an unserer Schule</h1>
        </div>
    </section>
    <section name="schulbibliothek">
        <div class="schulbibliothek wrapper">
            <div class="schulbibliothek-heading">
                <img src="images/schulbuecherei-300x205.webp" alt="">
                <h1>Schulbibliothek</h1>
            </div>
            <p>
                Die Bücherei ist in den Fuchsbau umgezogen. Dort haben die Kinder und die Bücher nun viel mehr Platz als zuvor. 
                Ein gemütliches Lesepodest und viele bunte Eulenkissen laden zum Verweilen und Schmökern ein. 
                Eine lange Kuschelwurst und handgenähte Kissen laden zum Schmökern und Träumen ein.
            </p>
            <span class="spacer-elem"></span>
            <p>
                Jede unserer Klassen darf einmal pro Woche die Bücherei besuchen um sich Bücher für zu Hause oder die Lesezeit in der Schule auszuleihen. 
            </p>
        </div>
    </section>
    <section name="kooperationen">
        <div class="kooperationen wrapper">
            <h1>Kooperationen</h1>
            <p>Unsere Schule arbeitet eng mit ortsansässigen Vereinen sowie Kindergärten und weiterführenden Schulen zusammen.</p>

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
        text-shadow: var(--text-shadow-white);
    }
    section{
        scroll-margin-top: 300px;
    }
    img {
        height: 250px;
    }
    h1 {
        font-size: 3.5rem;
    }
    p {
        font-size: 1.2rem;
    }
    .spacer-elem {
        width: 95%;
        height: 1px;
        background-color: black;
        align-self: center;
        justify-self: center;
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
        background-color: var(--box-background-color);
    }

    .AGS {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        gap: 25px;

        & h1 {
            margin-top: 50px;
        }

        & p {
            width: 80%;
            align-self: center;
        }
    }

    .ags-element-container {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .ags-element-img-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-self: center;
        & img {
            border-radius: 20px;
            box-shadow: 2px 2px 5px black;
        }
    }

    .schulbibliothek {
        gap: 50px;
        & p {
            width: 80%;
            justify-self: center;
            align-self: center;
        }
    }
    
    .schulbibliothek-heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        gap: 100px;
        margin-top: 25px;
        margin-bottom: 25px;
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
        .ags-element-img-container {
            flex-direction: column;
        }
        h1 {
            font-size: 2.5rem;
            text-align: center;
        }
        .schulbibliothek-heading {
            display: flex;
            flex-direction: column-reverse;
            margin-top: 5px;
            margin-bottom: 5px;
            gap: 25px;
        }
        .AGS p {
            width: 90%;
        }
        .schulbibliothek p {
            width: 90%;
            justify-self: center;
            align-self: center;
        }
        .spacer-elem {
            width: 90%;
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
        
    }
    
</style>
`;
export default SchullebenComponentHTML;