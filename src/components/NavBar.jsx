import {navLinks} from "../constants"
function NavBar() {
    return (
       <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({label})=>(
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center dap-3 mr-5">
                    <button>
                        <img src="/search.svg" alt="search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
       </header>
    )
}

export default NavBar

