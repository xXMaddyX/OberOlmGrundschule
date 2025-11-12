const KulturschuleHTMLComponent = `
<div id="main-container">
    <nav>
        <ul id="nav-list">
            <li class="nav-list-item"></li>
            <li class="nav-list-item"></li>
            <li class="nav-list-item"></li>
            <li class="nav-list-item"></li>
        </ul>
    </nav>
    <section name="top">
        <div id="heading-wrapper">
            <h1>„KULTURSCHULE“</h1>
            <h2>an der Grundschule Ober-Olm</h2>
            <h1>was heißt das eigentlich?</h1>
            <a id="heading-pdf-link" href="https://www.gs-ober-olm.de/files/praes.pdf" target="_blank">Hier die Infos</a>
        </div>
        <div id="heading-film-wrapper">
            <h3>UNSER SCHULFILM</h3>
            <h1>Flügel Verleihen (2024)</h1>
            <p>Hier ist der Film, der euch etwas darüber erzählt,<br>wie wir das Konzept der Kulturschule in Ober-Olm lebendig machen. Schaut mal rein!</p>
            <video width="50%" height="240" controls>
                <source src="http://gs-ober-olm.de/files/gsoo.mp4" type="video/mp4">
            </video>
        </div>
    </section>
    <section>

    </section>
</div>
<style>
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        text-shadow: 
        1px 1px 2px rgb(255, 255, 255), 
        -1px -1px 2px rgb(255, 255, 255), 
        1px -1px 2px rgb(255, 255, 255),
        -1px 1px 2px rgb(255, 255, 255);
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
        box-shadow: 2px 2px 10px black;
        border: 1px solid gray;
        border-radius: 50px;
        margin-bottom: 100px;
        width: 50%;
        background-color: rgba(94, 255, 0, 0.158);
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
        border: 1px solid black;
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
        box-shadow: 2px 2px 10px black;
        border: 1px solid gray;
        border-radius: 50px;
        margin-bottom: 100px;
        background-image: url("https://www.piepssoft.de/ober-olmer-grundschule/images/videoBack.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 50%;
        background-color: rgba(94, 255, 0, 0.158);
    }

    #heading-film-wrapper video {
        width: 100%;
        height: 500px;
        border-radius: 50px;
    }

    @media (width < 1650px) {
        #heading-wrapper {
            width: 80%;
        }
        #heading-film-wrapper {
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
    }

    @media (width < 800px) {
        #heading-wrapper {
            width: 95%;
        }
        #heading-wrapper h1 {
            font-size: 2.5rem;
        }
        #heading-film-wrapper{
            width: 95%;
        }
    }
</style>
`

export default KulturschuleHTMLComponent;