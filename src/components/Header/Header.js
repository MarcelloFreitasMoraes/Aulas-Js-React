import './style.css';


function Header() {
    return(
        <div className="container">
                <ul className="box">
                    <li onClick={() => window.location.href= "/quarto"}>Quarto</li>
                    <li onClick={() => window.location.href= "/banheiro"}>Banheiro</li>
                    <li onClick={() => window.location.href= "/escritorio"}>Escritorio</li>
                    <li onClick={() => window.location.href= "/sala"}>Sala</li>
                </ul>
        </div>
    )
}

export default Header