import { useRef, useEffect } from "react"
import navegaLogo from '../mapa/Logo.svg'
export const Navbar = ({ setSection }) => {
    const btnMapa = useRef(null);
    const btnAnuncios = useRef(null);
    const btnCuenta = useRef(null);

    const unselectedClasses = ['btn-outline-dark', 'bg-primary'];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const selectMenu = (id) => {
        scrollToTop();
        setSection(id);
        if (id == 0) {
            btnMapa.current.classList.remove(...unselectedClasses);
            btnMapa.current.classList.add('btn-dark');
            btnAnuncios.current.classList.remove('btn-dark');
            btnAnuncios.current.classList.add(...unselectedClasses);
            btnCuenta.current.classList.remove('btn-dark');
            btnCuenta.current.classList.add(...unselectedClasses);
        }
        if (id == 1) {
            btnMapa.current.classList.remove('btn-dark');
            btnMapa.current.classList.add(...unselectedClasses);
            btnAnuncios.current.classList.remove(...unselectedClasses);
            btnAnuncios.current.classList.add('btn-dark');
            btnCuenta.current.classList.remove('btn-dark');
            btnCuenta.current.classList.add(...unselectedClasses);
        }
        if (id == 2) {
            btnMapa.current.classList.remove('btn-dark');
            btnMapa.current.classList.add(...unselectedClasses);
            btnAnuncios.current.classList.remove('btn-dark');
            btnAnuncios.current.classList.add(...unselectedClasses);
            btnCuenta.current.classList.remove(...unselectedClasses);
            btnCuenta.current.classList.add('btn-dark');
        }

    }
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-primary px-5 py-1 border-dark border-bottom border-4">

                <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                    <img src={navegaLogo} alt="" width="45" className="d-inline-block pb-1" />
                    <h1 className="mb-1 ms-2 fs-2 fw-bolder">NavegaTec</h1>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="row d-md-flex  navbar-nav ms-auto ">
                        <li className="nav-item col p-2 dropShadowCustom">
                            <button ref={btnMapa} onClick={() => selectMenu(0)} className="border-dark border border-4 custom-border-radius btn btn-dark fw-bold py-1"
                                type="button" style={{ width: "130px" }}>Mapa</button>
                        </li>
                        <li className="nav-item col p-2 dropShadowCustom">
                            <button ref={btnAnuncios} onClick={() => selectMenu(1)}
                                className="border-dark bg-primary border border-4 custom-border-radius btn  btn-outline-dark fw-bold py-1"
                                type="button" style={{ width: "130px" }}>Anuncios</button>
                        </li>
                        <li className="nav-item col p-2 dropShadowCustom">
                            <button ref={btnCuenta} onClick={() => selectMenu(2)} className="border-dark bg-primary border border-4 custom-border-radius btn  btn-outline-dark fw-bold py-1"
                                type="button" style={{ width: "130px" }}>Cuenta</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>)
}