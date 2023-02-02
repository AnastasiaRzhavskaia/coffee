import Photo from "./images/coffeespot-foto.jpg";
import Logo from "./images/logo-white.png";
import Prazirna from "./images/prazirna1.jpg";

function Contact() {
    return (
        <div>
            <div className="about-app">
                <h2>/ KONTAKTY</h2>
            <div className="around">
            <div className="about-app">
                <h2>Fakturační údaje</h2>
                <p>Coffeespotcz s.r.o.
                    <br />
                    Babice 647
                    <br />
                    687 03
                </p>
                
                <p><b>IČ:</b> 00000001
                <br />
                <b>DIČ:</b> CZ00000001</p>
            </div>

            <div className="about-app">
                <h2>Kontaktujte nás</h2>
                <p>
                Jen co kávu upražíme, na e-mail vám odpovíme.
                <br />
                <b>E-mail:</b> kavaprazena@email.cz
                </p>
                <p>
                Na telefonu jsme vám k dispozici také, ale kvůli časové 
                <br />vytíženosti <b>preferujeme spíše e-mailový kontakt</b>. 
                <br />
                Děkujeme za pochopení.
                </p>
                <p><b>Tel:</b> +420 777 666 555 (<i>8:00 - 17:00 hod.</i>)</p>
            </div>
            
        </div>
        </div>
        <div className="center">
            <img className="kontakt-img" src={Photo} alt="ourteam" />
        </div>
    
    <div className="around">
        <div className="about-app">
        <h2>Naše prodejna a pražírna</h2>
        <h2>Chcete si kávu vyzvednout osobně?</h2>
        <p>Zastavte se u nás v pražírně. Můžete si tu vybrat
            a nakoupit z kompletní nabídky káv.</p>
        <p><b>Rádi vám osobně poradíme</b> s výběrem nebo připravíme 
            espresso, cappuccino či jiný nápoj z naší nabídky.</p>
        <p>Najdete nás v malebném kraji Moravského Slovácka v 
        obci Babice nedaleko Uherského Hradiště a Zlína. Těšíme se na vás! ♥️</p>
        </div>

        <div className="center-info">
            <img src={Logo} alt="logo"/>
            <p>Babice 647
            <br />
            68703 (Zlínský kraj)</p>
            <p><b>Otevírací doba</b>
            <br />
            Po - Pá: 7:30 - 18:00 hod.</p>
        </div>
        </div>

        <div className="center">
            <img className="kontakt-img" src={Prazirna} alt="ourteam" />
        </div>

        <div className="App">
            <h2>Děkujeme, že vám chutná!</h2>
        </div>

    </div>
    )
}

export default Contact;