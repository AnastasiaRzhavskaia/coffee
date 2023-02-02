function Buttons({filteredCoffee}) {
    return (
        <div className="center">
            <button className="change" onClick={()=>filteredCoffee('zrnkova')}>Zrnková káva</button>
            <button className="change" onClick={()=>filteredCoffee('filtrovana')}>Káva na filtr</button>
            <button className="change" onClick={()=>filteredCoffee('sada')}>Limitované edice</button>
            <button className="change" onClick={()=>filteredCoffee('decaf')}>Káva bez kofeinu</button>
        </div>
    )
}

export default Buttons;