function Delivery() {
    return (
    <div>
        <div className="about-app">
            <h2>/ DOPRAVA A PLATBA</h2>
            <h3 className="doprava">Možnosti dopravy</h3>
            <h2>cz Česká republika</h2>
        </div>
        <div className="about-app">
        <table>
            <tr>
                <td><img className="doprava-icon" src="https://cdn.myshoptet.com/usr/www.coffeespot.cz/user/documents/footer/doprava-zasilkovna.svg" alt="logocompany"/></td>
                <td><b>Zásilkovna ČR</b> — doručení na <a href="https://www.zasilkovna.cz/pobocky" target="_blank" rel="noreferrer">výdejní místo</a>. 
                    <br/>
                    Objednávky do 4 kg. Maximální rozměr zásilky 100 cm.</td>
                <td>Nad 1000 Kč ZDARMA</td>
                <td><b>59 Kč</b></td>
            </tr>
            <tr>
                <td><img className="doprava-icon" src="https://cdn.myshoptet.com/usr/www.coffeespot.cz/user/documents/footer/doprava-balikovna.svg" alt="logocompany"/></td>
                <td><b>Balíkovna</b> — doručení na výdejní místo</td>
                <td>Nad 1000 Kč ZDARMA</td>
                <td><b>59 Kč</b></td>
            </tr>
            <tr>
                <td><img className="doprava-icon" src="https://cdn.myshoptet.com/usr/www.coffeespot.cz/user/documents/footer/doprava-cp.svg" alt="logocompany" /></td>
                <td><b>Česká pošta</b> — balík do ruky</td>
                <td>Nad 1000 Kč ZDARMA</td>
                <td><b>89 Kč</b></td>
            </tr>
            <tr>
                <td><img className="doprava-icon" src="https://cdn.myshoptet.com/usr/www.coffeespot.cz/user/documents/footer/doprava-gls.svg" alt="logocompany"/></td>
                <td><b>GLS Česká republika</b> — doručení kurýrem na adresu</td>
                <td>Nad 1000 Kč ZDARMA</td>
                <td><b>89 Kč</b></td>
            </tr>
            <tr>
                <td><img className="doprava-icon" src="https://cdn.myshoptet.com/usr/www.coffeespot.cz/user/documents/footer/osobni-odber.svg" alt="logocompany"/></td>
                <td><b>Osobní odběr</b> — Po — Pá: 7:30 - 18:00 Přímo u nás v 
                    pražírně v <a href="https://www.google.cz/maps/place/Coffeespot+-+Czech+coffee+roaster/@49.1156206,17.4695212,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x471311581c588737:0x74a5055385b69667!2sCoffeespot+-+Czech+coffee+roaster!8m2!3d49.1156171!4d17.4717099!16s%2Fg%2F1td4hvt0!3m5!1s0x471311581c588737:0x74a5055385b69667!8m2!3d49.1156171!4d17.4717099!16s%2Fg%2F1td4hvt0" 
                    target="_blank" rel="noreferrer">Babicích 647</a>. Až bude objednávka připravena k vyzvednutí, přijde vám e-mail.</td>
                <td>ZDARMA</td>
                <td><b>ZDARMA</b></td>
            </tr>
        </table>
        </div>

        <div className="about-app">
            <h2>🇸🇰  Slovensko a EU</h2>
            <table>
            <tr>
                <td><img className="doprava-icon" src="https://cdn.myshoptet.com/usr/www.coffeespot.cz/user/documents/footer/doprava-zasilkovna.svg" alt="logocompany"/></td>
                <td><b>Zásilkovna SK</b> — doručení na <a href="https://www.zasilkovna.cz/pobocky" target="_blank" rel="noreferrer">výdejní místo</a>. 
                    <br/>
                    Objednávky do 4 kg. Maximální rozměr zásilky 100 cm.</td>
                <td>Do 700 Kč 
                    <br/>
                    <b>4.9€</b></td>
                <td>Nad 700 Kč 
                <br/>
                <b>2.49€</b></td>
            </tr>
            <tr>
                <td><img className="doprava-icon" src="https://cdn.myshoptet.com/usr/www.coffeespot.cz/user/documents/footer/doprava-gls.svg" alt="logocompany"/></td>
                <td><b>GLS Slovensko a EU</b> —  doručení kurýrem na Slovensko a do států EU </td>
                <td></td>
                <td><b>9.9€</b></td>
            </tr>
            </table>
        </div>
        
        <div className="about-app">
            <h3 className="doprava">Možnosti platby</h3>
            <ol>
                <li>
                    <b>Platební kartou online</b> — platba je připsána ihned, výhoda okamžité expedice: ZDARMA
                </li>
                <li>
                    <b>Platba převodem</b> platba předem na bankovní účet: ZDARMA
                </li>
                <li>
                    <b>Dobírka</b> latba při převzetí  <b>+ 19Kč</b>
                </li>
            </ol>
        </div>

        <div className="App">
            <h2>Děkujeme, že vám chutná!</h2>
        </div>

    </div>
        
    )
}

export default Delivery;