import ButtonLink from "./buttonLink";

const Header = () => {
    return (
        <header className="bg-blue-900">
            <nav className="p-1">
                <ul className="flex flex-arrow lg:gap-24  justify-center m-10">
                    <li><ButtonLink to='/'>Case Sesitive</ButtonLink></li>
                    <li><ButtonLink to='/caseinsensitive'>Case Insesitive</ButtonLink></li>
                    <li><ButtonLink to='/testes'>Testes</ButtonLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;