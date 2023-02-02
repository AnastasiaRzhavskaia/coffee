import Carousel from "./Carousel";
import ImageOne from "./images/about.jpg";
import ImageTwo from "./images/about-1.jpg";
import ImageThree from "./images/about-2.jpg";
import ImageFour from "./images/coffeespot-na-miru.jpg";

function About() {
    return (
        <div>
        <div className="about-app">
            <h2>/ KÁVA NA MÍRU</h2>
            <h3>COFFEESPOT podle vás</h3>
            <p>Vy řeknete, my uděláme a oni si to pak vypijou.
                <br />
            <b>Zrnka s radostí zabalíme do vašeho loga, osobního vzkazu nebo obrázku.</b> 
            <br />
            Zkrátka se postaráme o to, aby byl dárek od vás jedinečný – stejně jako chuť našich káv.</p>
            <ul>
                <li>Firemní balíčky pro zaměstnance</li>
                <li>Osobní dárky ze srdce</li>
                <li>Dárky s logem pro partnery</li>
            </ul>

            <h2>Vychutnejte si, že:</h2>
            <ul>
                <li><b>poradíme</b>, když si nebudete vědět rady s výběrem,</li>
                <li>do balíčku přidáme i jakékoliv <b>dobroty z Čokoládovny JANEK</b>,</li>
                <li><b>všechno zařídíme</b> – grafický návrh, tisk i kompletaci,</li>
                <li><b>ebudete dlouho čekat</b>n, protože stíháme i dárky na poslední chvíli,</li>
                <li>objednávku <b>doručíme na požadované datum</b>,</li>
                <li><b>kávu upražíme až v den balení</b>, aby byla čerstvá</li>
                <li>tohle všechno pro vás uděláme už od 50 kusu.</li>
            </ul>
            
            <a href="/Contact"><button className="down">Mám zájem</button></a>
            

            <h2>Co už jsme podle vás nachystali?</h2>
            </div>
            <div className="App" style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
            <Carousel>
                <img src={ImageFour} alt="placeholder" />
                <img src={ImageOne} alt="placeholder" />
                <img src={ImageTwo} alt="placeholder" />
                <img src={ImageThree} alt="placeholder" />
            </Carousel>
            </div>

            <div className="App">
                <h2>Děkujeme, že vám chutná!</h2>
            </div>

            </div>
        
    )
}

export default About;