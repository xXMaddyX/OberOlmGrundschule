const KinderHTML = `
<div>
    <nav id="section-nav">
        <button id="open-site-nav"></button>
        <div id="nav-section-list">
            <section-nav-component class="section-nav-element"
                button-name="Pix Kurs" nav-target="pix"
            ></section-nav-component>
        </div>
    </nav>
    <section name="pix">
        <div class="pix wrapper">
            <div class="pix-heading">
                <img src="images/pix-img/pix-image.webp" alt="">
                <h1>PIX-Kurs</h1>
            </div>
            <p>
                Unsere Schüler nehmen im zweiten Halbjahr der vierten Klasse fast vollzählig an dem durch die VHS durchgeführten Computerbasiskurs teil.<br>
                Die Aktion wird nahezu komplett durch unseren Förderverein finanziert und findet in den Räumen der alten Schule in Ober-Olm statt.<br>
                Über mehrere Tage werden die Kinder fit gemacht, am Computer kleine Präsentationen vorzubereiten, sich im Internet zu orientieren und Texte zu verarbeiten.<br>
                Eine prima Vorbereitung auf die weiterführende Schule.
            </p>
            <p class="pix-bold-first">
                Hi Kinder!<br>
                Auf diesen Seiten findet ihr viele Links, die in unserem PIX-Kurs und auch darüber hinaus eine Hilfe für euch sein können.
            </p>

            <p class="pix-bold">
               Los geht's: 
            </p>
            <p>
                Lasst euch im Internet nicht verführen - sonst könnte sowas passieren: (YouTube-Videos)
            </p>
            <a href="https://www.youtube.com/watch?v=QHkMd6OC6EI" target="_blank">&#10162; https://www.youtube.com/watch?v=QHkMd6OC6EI</a>
            <a href="https://www.youtube.com/watch?v=QHkMd6OC6EI" target="_blank">&#10162; https://www.youtube.com/watch?v=QHkMd6OC6EI</a>

            <p class="pix-bold">
                Sicherheit im Netz (z.B. Passwörter):
            </p>
            <a href="https://www.youtube.com/watch?v=tW1-CmggG9s" target="_blank">&#10162; https://www.youtube.com/watch?v=tW1-CmggG9s</a>
            <a href="https://www.youtube.com/watch?v=tW1-CmggG9s" target="_blank">&#10162; https://www.youtube.com/watch?v=tW1-CmggG9s</a>
            <br>
            <p>WhatsApp, Facebook, Twitter und Co. / Smartphones und Apps</p>

            <p class="pix-bold">
                Was geschieht in sozialen Netzwerken?
            </p>
            <p>
                Manche von euch nutzen vielleicht schon die Angebote in „Sozialen Netzwerken“, z.B. WhatsApp.<br>
                Aber ACHTUNG! Diese Internet-„Angebote“ bergen große Gefahren. Vermeide es, im Internet persönliche Angaben wie Hobbys, Interessen,<br>
                eigene Fotos usw. zu veröffentlichen.Finde unter den folgenden Links heraus, ab welchem Alter du z. B.
            </p>
            <p>Facebook</p>
            <p>WhatsApp</p>
            <p>
                etc. benutzen darfst.
            </p>
            <br>
            <p>
                <span style="font-weight: 600;">Bevor</span> du Mitglied in sozialen Netzwerken wirst, informiere dich sehr genau über (Cyber-)<span style="font-weight: 600;">Mobbing, Chats, Handynutzung und deren Gefahren, Smartphones, Apps, Phishing und Spam, etc.</span> sowie die Sicherheitsregeln:
            </p>
            <a href="https://www.schau-hin.info/soziale-netzwerke/" target="_blank">&#10162; Website von "Schau hin!" </a>
            <a href="https://www.klicksafe.de/smartphone" target="_blank">&#10162; Website von "Klicksafe"</a>
            <a href="https://www.handysektor.de/artikel/10-goldene-regeln-fuer-den-gruppenchat-in-whatsapp" target="_blank">&#10162; 10 goldene Regeln für den Gruppenchat</a>

            <p class="pix-bold">
                Apps für Kinder und Jugendliche im Internet:
            </p>
            <a href="https://www.youtube.com/watch?v=bZ_0N4-2U0c">&#10162; Wie man Apps installiert (YouTube-Video)</a>
            <a href="https://www.klicksafe.de/interaktive-medien">&#10162; Bei Cybermobbing nutze die Klicksafe-App</a>
            <p>Frage immer erst deine Eltern, bevor du Apps installierst!</p>
            <a href="https://die-cybermights.de/proto/dksb_s1/index.html">&#10162; In diesem Computerspiel geht es um Handys, Passwörter, Trojaner, etc</a>

            <p class="pix-bold">Informationen für Eltern:</p>
            <a href="">&#10162; Aufwachsen mit Medien (BMFSFJ)</a>
            <a href="">&#10162; Einen "Mediennutzungsvertrag" mit Kind erstellen</a>
            <a href="">&#10162; Wegweiser zur Bildung" (Bildungsserver RP)</a>
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
    .spacer {
        display: none;
    }
    h1 {
        font-size: var(--h1-font-size);
    }
    p {
        font-size: var(--main-p-size);
    }
    section {
        scroll-margin-top: 400px;
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
        backdrop-filter: blur(30px);
        background-color: var(--box-background-color);
    }
    
    .pix {
        display: flex;
        flex-direction: column;
        & p {
            padding-left: 10px;
            padding-right: 10px;
            text-align: start;
        }
        & a {
            font-size: 1.3rem;
            padding-left: 10px;
            padding-right: 10px;
            text-align: start;
        }
        & .pix-bold-first {
            margin-top: 25px;
            font-weight: 600;
        }
        & .pix-bold {
            padding: 5px;
            margin-top: 25px;
            font-weight: 600;
            background-color: rgb(100, 255, 100, 0.6);
        }
        & .pix-heading {
            display: flex;
            flex-direction: row;
            gap: 50px;
            align-items: center;
            margin-bottom: 25px;
            & img {
                border-radius: 20px;
                box-shadow: 2px 2px 5px black;
                width: 45%;
            }
        }
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
        h1 {
            font-size: 2.5rem;
        }
    }

    @media (width < 800px) {
        #open-site-nav {
            margin-top: 20px;
            width: 80px;
            height: 80px;
        }
        .spacer {
            display: flex;
            flex-direction: column;
            height: 2px;
            background-color: gray;
            align-self: center;
            justify-self: center;
            width: 85%;
        }
        .wrapper {
            width: 100%;
            border: none;
            box-shadow: none;
            border-radius: 0px;
            padding-bottom: 100px;
            padding-top: 100px;
            background-color: none;
            mask-image: linear-gradient(0deg,rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 2%, rgb(0, 0, 0) 98%, rgba(0, 0, 0, 0) 100%);
        }
        .pix {
            & a {
                font-size: 1.3rem;
            }
            & .pix-bold-first {
                margin-top: 50px;
            }
            & .pix-bold {
                margin-top: 50px;
            }
            & .pix-heading {
                flex-direction: column;
                & img {
                    width: 100%;
                }
            }
        }
    }
</style>
`;
export default KinderHTML;