import { useRef } from "react";
import { fetchLogin } from "./helpers/fetchLogin";

export const Login = ({setLoged, setMustComplete}) => {
    const inputUser = useRef(null);
    const inputPass = useRef(null);

    const login = async () => {
        const user = inputUser.current.value.trim();
        const pass = inputPass.current.value.trim();
        if( user.length < 0 || pass.length < 0) return;
        const {message, result} = await fetchLogin(user, pass);
        console.log(message, result);
        if(message == "Loged in"){
            localStorage.setItem("access", result.AccessToken);
            localStorage.setItem("id", result.IdToken);
            localStorage.setItem("refresh", result.RefreshToken);
            setLoged(true);
            setMustComplete(false);
        }
        if(message == "NEW_PASSWORD_REQUIRED") {
            sessionStorage.setItem("username", user);
            sessionStorage.setItem("Session", result);
            setLoged(false);
            setMustComplete(true);
        }
    }

    return (
        <>
            <section className="bg-light border-dark border-bottom border-5" style={{ height: "100vh" }}>
                <div className="bg-success d-flex justify-content-center align-items-center border-dark border-bottom border-4" style={{ height: "50vh" }}>
                    <div className="bg-yellow py-4 rounded-5 border-dark border border-4 flex-column d-flex justify-content-center align-items-center dropShadowCustom" style={{ width: "25%", minWidth: "300px", marginTop: "50vh" }}>
                        <div className="d-flex justify-content-center pt-4" style={{ width: "80%" }}>
                            <img src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" style={{ height: "3rem" }} />
                        </div>
                        <h1 className="text-center fs-4 text-dark fw-bold" style={{ width: "80%" }}>Inicio de sesión</h1>

                        <div className="text-center" style={{ width: "80%" }}>
                            <div className="dropShadowCustom input-group mt-4 rounded-4 border-dark border border-4">
                                <div className="input-group-text">
                                    <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" style={{ height: "1rem" }} />
                                </div>
                                <input ref={inputUser} className="form-control" type="text" placeholder="Usuario" />
                            </div>
                            <div className="dropShadowCustom input-group mt-4 rounded-4 border-dark border border-4">
                                <div className="input-group-text">
                                    <img src="https://icones.pro/wp-content/uploads/2022/08/icone-de-cadenas-de-securite-gris.png" style={{ height: "1rem" }} />
                                </div>
                                <input ref={inputPass} className="form-control" type="password" placeholder="Contraseña" />
                            </div>
                            <div onClick={login} className="dropShadowCustom btn btn-success w-100 mt-4 mb-2 rounded-5 border-dark border border-4" style={{ width: "16vw" }}>Comenzar</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
