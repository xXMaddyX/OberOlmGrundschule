const NeusUndAktuellesHTML = `
<div>
    <nav id="section-nav">
        <button id="open-site-nav"></button>
        <div id="nav-section-list">
            <section-nav-component class="section-nav-element"
                button-name="Termine" nav-target="termin"
            ></section-nav-component>
            <section-nav-component class="section-nav-element"
                button-name="Unterrichtszeiten" nav-target="unterricht"
            ></section-nav-component>
            <section-nav-component class="section-nav-element"
                button-name="Elternbriefe" nav-target="elternbriefe"
            ></section-nav-component>
            <section-nav-component class="section-nav-element"
                button-name="Schulbuchlisten" nav-target="schulbuchlisten"
            ></section-nav-component>
        </div>
    </nav>
    <section name="termin">
        
     </iframe>
    </section>
    <div class="spacer"></div>
    <section name="unterricht">
        <div class="unterricht wrapper">
            <div id="unterrichts-wrapper-main-grid">
                <div><h2>Unsere neuen Unterrichtszeiten ab Schuljahr 2024/25</h2></div>
                <div class="unterrichts-grid-elem pause">
                    <p>Ankommen</p>
                    <p>7:50-8:00 Uhr</p>
                    <p>10 min</p>
                </div>
                <div class="unterrichts-grid-elem">
                    <p>1. Stunde</p>
                    <p>8:00-8:45 Uhr</p>
                    <p>45 min</p>
                </div>
                <div class="unterrichts-grid-elem pause">
                    <p>Wechselpause</p>
                    <p>8:45-8:50 Uhr</p>
                    <p>5 min</p>
                </div>
                <div class="unterrichts-grid-elem-two-line">
                    <div class="unterrichts-sub-grid">
                        <div class="unterrichts-grid-sub-elem">
                            <p>2. Stunde</p>
                            <p>8:50-9:35 (falls bis 12:00)</p>
                            <p>45 min</p>
                        </div>
                        <div class="unterrichts-grid-sub-elem">
                            <p></p>
                            <p>8:50-9:40 (falls bis 13:05)</p>
                            <p>50 min</p>
                        </div>
                    </div>
                </div>
                <div class="unterrichts-grid-elem-two-line pause">
                    <div class="unterrichts-grid-sub-elem">
                        <p>Frühstückspause</p>
                        <p>9:35-9:55 (falls bis 12:00)</p>
                        <p>20 min</p>
                    </div>
                    <div class="unterrichts-grid-sub-elem">
                        <p></p>
                        <p>9:40-9:55 (falls bis 13:05)</p>
                        <p>15 min</p>
                    </div>
                </div>
                <div class="unterrichts-grid-elem pause">
                    <p>Hofpause</p>
                    <p>9:55-10:15</p>
                    <p>20 min</p>
                </div>
                <div class="unterrichts-grid-elem">
                    <p>3. Stunde</p>
                    <p>10:15-11:05</p>
                    <p>50 min</p>
                </div>
                <div class="unterrichts-grid-elem pause">
                    <p>Wechselpause</p>
                    <p>11:05-11:10</p>
                    <p>5 min</p>
                </div>
                <div class="unterrichts-grid-elem">
                    <p>4. Stunde</p>
                    <p>11:10-12:00</p>
                    <p>50 min</p>
                </div>
                <div class="unterrichts-grid-elem pause">
                    <p>Hofpause</p>
                    <p>12:00-12:15</p>
                    <p>15 min</p>
                </div>
                <div class="unterrichts-grid-elem">
                    <p>5. Stunde</p>
                    <p>12:15-13:05</p>
                    <p>50 min</p>
                </div>
                <div id="unterrichts-wrapper-main-grid-last">
                    <p>Donnerstag AG:</p>
                    <p>Pause: 11:50-12:05</p>
                    <p>AG-Stunde: 12:05-13:05</p>
                </div>
            </div>
        </div>
    </section>
    <div class="spacer"></div>
    <section name="elternbriefe">
        <div class="elternbriefe wrapper">
            <h3>Noch einmal zum nachlesen</h3>
            <h1>Elternbriefe</h1>
            <div id="elternbriefe-grid">
                <div id="elternbrief-grid-elem-first" class="elternbrief-grid-elem">
                    <p>Zur Ansicht die Datei anklicken</p>
                </div>
                <div class="elternbrief-grid-elem">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/briefe/nov25.pdf" target="_blank">Elternbrief November</a>
                </div>
                <div class="elternbrief-grid-elem elternbrief-grid-elem-cont">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/briefe/okt25.pdf" target="_blank">Elternbrief Oktober</a>
                </div>
                <div class="elternbrief-grid-elem">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/briefe/1sj25.pdf" target="_blank">Elternbrief Anfang neues Schuljahr</a>
                </div>
                <div class="elternbrief-grid-elem elternbrief-grid-elem-cont">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/briefe/ende25.pdf" target="_blank">Elternbrief Ende Schuljahr 24/25</a>
                </div>
            </div>
        </div>
    </section>
    <div class="spacer"></div>
    <section name="schulbuchlisten">
        <div class="schulbuchlisten wrapper">
            <h3>Alles da?</h3>
            <h1>Schulbuch- & Materiallisten</h1>
            <div id="schulbuchlisten-grid">
                <div id="schulbuchlisten-grid-elem-first" class="schulbuchlisten-grid-elem">
                    <p>Zur Ansicht die Datei anklicken</p>
                </div>
                <div class="schulbuchlisten-grid-elem">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/files/1sj.pdf" target="_blank">Materialliste Klasse 1</a>
                </div>
                <div class="schulbuchlisten-grid-elem schulbuchlisten-grid-elem-cont">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/files/2sj.pdf" target="_blank">Materialliste Klasse 2</a>
                </div>
                <div class="schulbuchlisten-grid-elem">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/files/3sj.pdf" target="_blank">Materialliste Klasse 3</a>
                </div>
                <div class="schulbuchlisten-grid-elem schulbuchlisten-grid-elem-cont">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/files/4sj.pdf" target="_blank">Materialliste Klasse 3</a>
                </div>
                <div class="schulbuchlisten-grid-elem">
                    <img class="download-img" src="images/download.webp" alt="">
                    <a href="https://www.gs-ober-olm.de/files/SBA.pdf" target="_blank">Schulbuchliste</a>
                </div>
            </div>
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
        /*text-shadow: var(--text-shadow-white);*/
    }
    .spacer {
        display: none;
    }
    section{
        scroll-margin-top: 300px;
    }
    .download-img {
        width: 25px;
        height: 25px;
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

    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 1.8rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1.3rem;
    }


    .pause {
        background-color: rgb(200, 200, 200);
        border-radius: 20px;
    }

    #unterrichts-wrapper-main-grid {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(12, 1fr);
        align-items: center;
        text-align: center;
    }

    
    .unterrichts-grid-elem {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        justify-self: center;
        align-self: center;
        justify-content: center;
        align-items: center;
    }

    .unterrichts-sub-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        text-align: center;
    }

    .unterrichts-grid-sub-elem {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 2fr;
        justify-content: center;
        align-items: center;
    }

    .unterrichts-grid-elem-two-line {
        justify-content: center;
        align-items: center;
    }

    #unterrichts-wrapper-main-grid-last {
        background-color: #d4edda;
        border-radius: 20px;
        padding: 5px;
    }

    .elternbriefe {
        background-image: url("images/elternbriefe-img.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #elternbriefe-grid {
        display: grid;
        width: 100%;
        row-gap: 5px;
        background-color: aliceblue;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
    }
    .elternbrief-grid-elem {
        display: flex;
        padding: 5px;
        gap: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .elternbrief-grid-elem-cont {
        background-color: #d4edda;
    }

    #elternbrief-grid-elem-first {
        background-color: #52fa79;
    }

    #schulbuchlisten-grid {
        display: grid;
        width: 100%;
        row-gap: 5px;
        background-color: aliceblue;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
    }
    .schulbuchlisten-grid-elem {
        display: flex;
        padding: 5px;
        gap: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .schulbuchlisten-grid-elem-cont {
        background-color: #d4edda;
    }

    #schulbuchlisten-grid-elem-first {
        background-color: #52fa79;
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
        h1 {
            font-size: 2.5rem;
        }
        h2 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1.0rem;
        }
        #open-site-nav {
            margin-top: 20px;
            width: 80px;
            height: 80px;
        }
        .spacer {
            display: flex;
            flex-direction: column;
            height: 2px;
            margin-bottom: 25px;
            margin-top: 25px;
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
        .pause {
            border-radius: 5px;
        }
        #unterrichts-wrapper-main-grid-last {
            border-radius: 5px;
        }
    }
    
</style>
`;
export default NeusUndAktuellesHTML;