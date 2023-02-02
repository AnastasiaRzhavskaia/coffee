import { useState } from "react";
import Buttons from "./Buttons";
import { data } from "./data";
import Shop from "./Shop";
import Welcome from "./Welcome";

function Home() {

    const [shop, setShop] = useState(data);

    const chosenCoffee=(searchTerm) => {
        const newShop = data.filter(element=>element.searchTerm===searchTerm);
        setShop(newShop);
    }
    return (<div>

        <div className="center">
            <Welcome />
        </div>
<section id='down'>
        <div className="center">
            <h1>/ Naše produkty</h1>
        </div>
        <div className="center">
            <Buttons filteredCoffee={chosenCoffee}/>
        </div>

        <div className="center">
            <Shop shopComponent={shop}/>
        </div> 
</section>
        </div>
    )
}

export default Home;