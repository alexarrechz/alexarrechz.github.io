import { useRef } from "react"
import { fetchComplete } from "./helpers/fetchComplete"
import { fetchUpdate } from "./helpers/fetchUpdate";

export const Complete = ({setLoged, setMustComplete}) => {
    const inputName = useRef(null);
    const inputFamily = useRef(null);
    const inputPhone = useRef(null);
    const inputMajor = useRef(null);
    const inputPass = useRef(null);
    const inputConfirmPass = useRef(null);

    const completeRegister = async () => {
        const name = inputName.current.value.trim();
        const family = inputFamily.current.value.trim();
        const phone = inputPhone.current.value.trim();
        const pass = inputPass.current.value.trim();
        const confirmPass = inputConfirmPass.current.value.trim();

        if (name.length == 0)
            return console.log("Nombre vacío");
        if (family.length == 0)
            return console.log("Apellido vacío");
        if (phone.length == 0)
            return console.log("Número vacío");
        if (pass.length == 0)
            return console.log("Contraseña vacía");
        if (confirmPass.length == 0)
            return console.log("Confirmar contraseña vacía");

        if (pass != confirmPass)
            return console.log("Las contraseñas no coinciden");

        let pass_valid = false;

        // Verificar la longitud mínima de caracteres
        if (pass.length >= 8) {
            // Verificar al menos un número
            if (/\d/.test(pass)) {
                // Verificar al menos una letra minúscula
                if (/[a-z]/.test(pass)) {
                    // Verificar al menos una letra mayúscula
                    if (/[A-Z]/.test(pass)) {
                        // Verificar al menos un carácter especial o espacio
                        if (/[^A-Za-z0-9\s]/.test(pass) || (pass[0] !== ' ' && pass[pass.length - 1] !== ' ')) {
                            // La contraseña cumple todos los requisitos
                            pass_valid = true;
                        }
                    }
                }
            }
        }

        console.log("Listo :)");

        const {message, result} = await fetchComplete(sessionStorage.getItem("Session"), sessionStorage.getItem("username"), name, family, pass, phone);
        console.log(result);
        if(message == "Loged in"){
            localStorage.setItem("access", result.AccessToken);
            localStorage.setItem("id", result.IdToken);
            localStorage.setItem("refresh", result.RefreshToken);
            const response = await fetchUpdate(sessionStorage.getItem("username"), name, family, phone, localStorage.getItem("id"));
            console.log(response);
            setLoged(true);
            return setMustComplete(false);
        }
    }
    return (
        <>
            <section className="bg-light border-dark border-bottom border-5" style={{ height: '100vh' }}>
                <div className="bg-success d-flex justify-content-center align-items-center border-dark border-bottom border-4" style={{ height: '50vh' }}>
                    <div className="bg-yellow py-4 rounded-5 border-dark border border-4 flex-column d-flex justify-content-center align-items-center dropShadowCustom" style={{ width: '50%', minWidth: '300px', marginTop: '50vh' }}>
                        <div className="d-flex justify-content-center pt-4" style={{ width: '80%' }}>
                            <img src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" style={{ height: '3rem' }} />
                        </div>
                        <h1 className="text-center fs-4 text-dark fw-bold" style={{ width: '80%' }}>Inicio de sesión</h1>
                        <div className="d-flex flex-wrap justify-content-center m-2">
                            <div className="text-center p-2 justify-content-center d-flex flex-wrap" style={{ width: '90%' }}>
                                <div className="mx-2 input-group mt-4 dropShadowCustom rounded-4 border-dark border border-4 login2">
                                    <div className="input-group-text">
                                        <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" style={{ height: '1rem' }} />
                                    </div>
                                    <input ref={inputName} className="form-control" type="text" placeholder="Nombre" />
                                </div>
                                <div className="mx-2 dropShadowCustom input-group mt-4 rounded-4 border-dark border border-4 login2">
                                    <div className="input-group-text">
                                        <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" style={{ height: '1rem' }} />
                                    </div>
                                    <input ref={inputFamily} className="form-control" type="text" placeholder="Apellido" />
                                </div>
                                <div className="mx-2 dropShadowCustom input-group mt-4 rounded-4 border-dark border border-4 login2">
                                    <div className="input-group-text">
                                        <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" style={{ height: '1rem' }} />
                                    </div>
                                    <input ref={inputPhone} className="form-control" type="number" placeholder="Teléfono" />
                                </div>
                                <div className="mx-2 dropShadowCustom input-group mt-4 rounded-4 border-dark border border-4 login2">
                                    <div className="input-group-text">
                                        <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" style={{ height: '1rem' }} />
                                    </div>
                                    <input ref={inputPass} className="form-control" type="text" placeholder="Contraseña" />
                                </div>
                                <div className="mx-2 dropShadowCustom input-group mt-4 rounded-4 border-dark border border-4 login2">
                                    <div className="input-group-text">
                                        <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" style={{ height: '1rem' }} />
                                    </div>
                                    <input ref={inputConfirmPass} className="form-control" type="text" placeholder="Repite la Contraseña" />
                                </div>
                            </div>
                            <div onClick={completeRegister} className="dropShadowCustom btn btn-success w-50 mt-4 mb-2 rounded-5 border-dark border border-4" style={{ width: '16vw' }}>Terminar registro</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}