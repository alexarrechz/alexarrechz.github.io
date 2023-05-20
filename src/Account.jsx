import { useEffect, useRef, useState } from "react"
import { fetchProfile } from "./helpers/fetchProfile";

export const Account = () => {
    const [profileData, setProfileData]= useState(
        {
            Name : 'Nombre',
            Apellido : 'Apellido',
            Carrera : 'Carrera',
            Id_usuario : 'Matricula',
            num_Celular : 'Teléfono'
        }
    );
    const inputPhone = useRef(null);
    useEffect(() => {
        console.log("Pidiendo datos de perfil");
        const getProfile = async () => {
            const { result } = await fetchProfile(localStorage.getItem("id"));
            console.log(result);
            setProfileData(result);
        }
        getProfile();
    }, []);

    useEffect(() => {
        inputPhone.current.value = profileData.num_Celular;
    },[profileData])

    return (
        <>
            <div className="card-body p-4 anuncio-principal h-auto">
                <h2 className="text-dark fw-bold mb-3">Cuenta</h2>
                <form>
                    <ul className="list-group list-group-flush mb-2">
                        <li className="list-group-item"> <label className="form-label fs-6 me-1">{profileData.Nombre}</label>
                        </li>
                        <li className="list-group-item"> <label className="form-label fs-6 me-1">{profileData.Apellido}</label>
                        </li>
                        <li className="list-group-item"> <label className="form-label fs-6 me-1">Carrera</label>
                        </li>
                        <li className="list-group-item"> <label className="form-label fs-6 me-1">{profileData.Id_usuario}</label>
                        </li>
                    </ul>

                    <fieldset>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input ref={inputPhone} type="text" id="disabledTextInput" className="form-control" placeholder="Teléfono" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Contraseña"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirmar contraseña</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Contraseña"/>
                        </div>
                        <div className="dropShadowCustom btn btn-success mt-4 mb-2 rounded-5 border-dark border border-4 "
                            style={{minWidth: "250px"}}>Guardar
                        </div>
                    </fieldset>
                </form>


            </div>
        </>
    )
}