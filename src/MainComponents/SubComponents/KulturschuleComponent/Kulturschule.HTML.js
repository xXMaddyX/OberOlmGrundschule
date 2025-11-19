const KulturschuleHTMLComponent = `
<div id="main-container">
    <nav id="section-nav">
        <button id="open-site-nav"></button>
        <div id="nav-section-list">
            <section-nav-component class="section-nav-element"
                button-name="Kultur" nav-target="top"
            ></section-nav-component>
            <section-nav-component class="section-nav-element"
                button-name="Profil" nav-target="schulprofil"
            ></section-nav-component>
        </div>
    </nav>
    <section name="top">
        <div id="heading-wrapper">
            <h1>„KULTURSCHULE“</h1>
            <h2>an der Grundschule Ober-Olm</h2>
            <h1>was heißt das eigentlich?</h1>
            <a id="heading-pdf-link" href="https://www.gs-ober-olm.de/files/praes.pdf" target="_blank">Mehr erfahren...</a>
        </div>
        <div id="heading-film-wrapper">
            <h2>UNSER SCHULFILM</h2>
            <h1>Flügel Verleihen (2024)</h1>
            <p>Hier ist der Film, der euch etwas darüber erzählt,<br>wie wir das Konzept der Kulturschule in Ober-Olm lebendig machen. Schaut mal rein!</p>
            <video width="50%" height="240" controls>
                <source src="http://gs-ober-olm.de/files/gsoo.mp4" type="video/mp4">
            </video>
        </div>
    </section>
    <section name="schulprofil">
        <div id="schulprofil-wrapper">
            <h1>Die Grundschule Ober-Olm ist Kulturschule, was heißt das eigentlich?</h1>
            <div id="schulprofil-content">
                <div class="schulprofil-element">
                    <h2>Wir sind eine „lernende Schule“</h2>
                    <p>Die Schulkultur ist lernend und alle Beteiligten können sich wirksam daran beteiligen. Die an der Schule Mitarbeitenden sehen sich in einem Prozess, der in dieser lernenden Schule nie beendet ist, da sich das System Schule ständig weiterentwickelt und immer wieder selbst neu generiert. </p>
                </div>
                <div class="schulprofil-element">
                    <h2>Fachunterricht in professioneller Hand:</h2>
                    <p>Der künstlerische Fachunterricht liegt bei uns in der Hand von dafür ausgebildeten Fachlehrerinnen. Ziel ist, dass die 'Bildung in den Künsten' auf einem hohen Niveau stattfinden und somit intensiver wirken kann. Dies gilt natürlich auch für Künstler/-innen, die in den schulischen Alltag integriert werden: auch diese müssen qualitativ hochwertig im künstlerischen und pädagogischen Bereich arbeiten. Selbstverständlich sollte auch das Vermeiden von Unterrichtsausfall im künstlerischen Unterricht sein.</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Künstlerische Lernmethoden in nicht-musischen Fächern:</h2>
                    <p>Auch in nicht- künstlerischen Fächern finden sich Zugänge durch kulturell-ästhetische Lehr- und Lernpraxis. Dieser Bereich beschreibt neben der 'Bildung in den Künsten' die 'Bildung durch die Künste'. Kunst kann in diesem Unterricht „ein pädagogisches Mittel“ sein, den Schülern Inhalte auf eine bestimmte Weise zu vermitteln.</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Bildungspartnerschaften:</h2>
                    <p>Kulturschulen knüpfen tragfähige Bildungspartnerschaften mit Kulturpartner/-innen. Hierzu gehören der gemeinsam gestaltete Unterricht aber auch langfristig geleitete Arbeitsgemeinschaften durch externe Kooperationspartner/-innen (Musikvereine in Ober-Olm, langfristige Künstlerkooperationen,…)</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Rhythmisierung</h2>
                    <p>Der Schulalltag ist rhythmisiert und der 45-Minuten-Takt ist aufgelöst, um Schüler/-innen und Lehrer/-innen mehr Zeit für die Unterrichtsentwicklung zu geben. Auch aufwändigere Projekte und Inhalte lassen sich so realisieren.</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Raumausstattung</h2>
                    <p>An der Schule ist Raum für kulturelle Praxis. Künstlerische Arbeit braucht nicht nur Zeit, sondern auch Raum. Wir arbeiten in gut und ästhetisch ansprechend ausgestatteten Fach- und Klassenräumen, mit hochwertigen Materialien und speziell ausgestatteten Räumen für den Kunst-, Musik- und Theaterunterricht, einem Werkraum, einer Küche und mit vielen inhaltlich noch nicht belegten Flächen in der Schule und im Außengelände.</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Außerschulische Lern- und Kulturorte</h2>
                    <p>Neben der Schule finden kulturelle Begegnungen auch an neuen Lernorten außerhalb der Schule statt. Nicht nur in der Schule, sondern auch außerhalb sollen Schüler die Möglichkeit haben, Kultur zu erleben. Wir nutzen vielfach Konzert-, Ausstellungs- oder Theaterbesuche, aber auch Eigenpräsentationen, die das Leben der Kommune bereichern wie Konzerte der Schule für die Gemeinde oder Ausstellungen der Schüler/-innen im öffentlichen Raum.</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Schule als Ort der kulturellen Begegnung</h2>
                    <p>Die Schule wird selbst zum Kulturort für Ober-Olm oder die Verbandsgemeinde und wirkt somit über sich selbst hinaus. Die Schule selbst öffnet sich als Begegnungsort und somit Teil der Gemeinde ihre Pforten öffnen nutzt Gelegenheit, sich einem breiten Publikum zu stellen.</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Künstlerische Fortbildung des Personals</h2>
                    <p>Die Lehrerinnen an der Grundschule Ober-Olm bilden sich fort und sammeln selbst künstlerische Erfahrungen. Auch Kolleginnen „ohne künstlerisches Fach“ erhalten die Gelegenheit, mal an einem Kunstprojekt mitzumachen und Prinzipien des ästhetischen Lernens in ihrem Fachunterricht anzuwenden. Die gegenseitige Anerkennung und nicht zuletzt der kollegiale Austausch werden durch gemeinsame Fortbildungen verbessert. Spannend ist auch der Austausch mit anderen kulturell profilierten Schulen.</p>
                </div>
                <div class="schulprofil-element">
                    <h2>Schulhaus- und Raumgestaltung</h2>
                    <p>Eine Kulturschule ist eine „schöne“ Schule. Eine Schule, in deren Räumen sich alle Beteiligten wohlfühlen können, ist eine gute Basis, um miteinander zu lernen. Unser Schulgebäude ist ästhetisch ansprechend gestaltet. Da unsere Schüler*innen ihre Schule mitgestalten dürfen, werden sie in ernst genommen und zu Kreativität angeregt. Die Räume sind Teil der Kultur der Schule. Auch sie verändern sich ständig und entwickeln sich stets weiter. </p>
                </div>
                <img id="container-image" src="owl-hero.webp" alt="" loading="lazy">
            </div>
        </div>
    </section>
    <section>

    </section>
    <template id="nav-element-template">
        <button id="nav-element-button"></button>
    </template>
</div>
<style>
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        text-shadow: var(--text-shadow-white);
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
        opacity: 0;
        height: 0px;
        visibility: hidden;
        margin-bottom: 50px;
    }

    #nav-section-list.active {
        display: flex;
        visibility: visible;
        flex-direction: row;
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            height: 0px;
        } to {
            opacity: 1;
            height: 100px;
        }
    }

    #main-container {
        display: block;
    }

    #heading-wrapper {
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

    #heading-wrapper h1 {
        font-size: 3.5rem;
    }

    #heading-wrapper h2 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #heading-wrapper a {
        all: unset;
        cursor: pointer;
        justify-self: center;
        align-self: center;
        margin-top: 10px;
        font-size: 1.5rem;
        padding: 10px;
        border: 1px solid var(--basic-border-color);
        border-radius: 20px;
        width: 50%;
        transition: all 1.0s;
    }
    #heading-wrapper a:hover {
        background-color: rgba(94, 255, 0, 0.700);
    }

    #heading-film-wrapper {
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
        background-image: url("https://www.piepssoft.de/ober-olmer-grundschule/images/videoBack.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 50%;
        gap: 20px;
        background-color: var(--box-background-color);
    }

    #heading-film-wrapper video {
        width: 100%;
        height: 500px;
        border-radius: 50px;
    }

    #heading-film-wrapper h1 {
        font-size: 3.5rem;
    }

    #heading-film-wrapper p {
        font-size: 1.5rem;
    }

    #schulprofil-wrapper {
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

    #schulprofil-wrapper h1 {
        font-size: 3.5rem;
    }

    #schulprofil-content {
        text-align: start;
        width: 90%;
        align-self: center;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        gap: 30px;
    }

    #container-image {
        width: 50%;
    }

    @media (width < 1650px) {
        #heading-wrapper {
            width: 80%;
        }
        #heading-film-wrapper {
            width: 80%;
        }
        #schulprofil-wrapper {
            width: 80%;
        }
    }

    @media (width < 1150px) {
        #heading-wrapper {
            width: 80%;
        }
        #heading-film-wrapper {
            width: 80%;
        }
        #schulprofil-wrapper {
            width: 80%;
        }
        #container-image {
            width: 70%;
        }
    }

    @media (width < 800px) {
        #heading-wrapper {
            width: 95%;
        }
        #schulprofil-wrapper {
            width: 95%;
        }

        #schulprofil-wrapper h1 {
            font-size: 2.5rem;
        }
        #heading-wrapper h1 {
            font-size: 2.5rem;
        }
        #heading-film-wrapper{
            width: 95%;
        }
        #heading-film-wrapper video {
            height: 350px;
        }
        #heading-film-wrapper h1 {
            font-size: 2.5rem;
        }

        #heading-film-wrapper p {
            font-size: 1.3rem;
        }
        #container-image {
            width: 95%;
            justify-self: center;
            align-self: center;
        }
        #open-site-nav {
            margin-top: 20px;
            width: 80px;
            height: 80px;
        }
    }
</style>
`

export default KulturschuleHTMLComponent;