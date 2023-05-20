import { useEffect, useRef, useState } from "react"
import { OwnAd } from "./OwnAd"
import { postImage } from "./helpers/postImage";
import { fetchAd } from "./helpers/fetchAd";
import { fetchOwnAds } from "./helpers/fetchOwnAds";
import { deleteAd } from "./helpers/deleteAd";

export const OwnAds = () => {
    const [ownAds, setOwnAds] = useState([]);

    const inputTitle = useRef(null);
    const inputDescription = useRef(null);
    const inputSchedule = useRef(null);
    const inputContact = useRef(null);
    const inputImg = useRef(null);

    const removeAd = async (id) => {
        const response = await deleteAd(id, localStorage.getItem("id"));
        console.log(response);
        getOwnAds();
    }
    const getOwnAds = async () => {
        const {result} = await fetchOwnAds(localStorage.getItem("id"))
        console.log(result);
        setOwnAds(result);
    };

    const submitAd = () => {
        const title = inputTitle.current.value.trim();
        const description = inputDescription.current.value.trim();
        const schedule = inputSchedule.current.value.trim();
        const contact  = inputContact.current.value.trim();
        const file = inputImg.current.files;

        if(title.length < 0 ) return console.log("Título vacío");
        if(description.length < 0 ) return console.log("Descripción vacía");
        if(schedule.length < 0 ) return console.log("Horario vacío");
        if(contact.length < 0 ) return console.log("Contacto vacío");
        if( !file || file.length < 0 ) return console.log("No hay imagen");

        const reader = new FileReader();
        reader.onloadend = async () => {
            const { result } = await postImage(reader.result, localStorage.getItem("id"));
            console.log("#1",result);

            const response = await fetchAd(title, description, schedule, contact, result, localStorage.getItem("id"));
            console.log("#2",response);

            getOwnAds();
        };
        reader.readAsDataURL(file[0]);

    }
    
    useEffect(() => {
        getOwnAds();
    }, []);

    return (
        <>
            <div className="border border-dark rounded-5 p-3  anuncio-principal h-auto">
                <h4 className="text-dark fw-bold mb-3 mt-2 text-center">Tus anuncios</h4>
                <fieldset>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                        <input ref={inputTitle} type="text" className="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Descripción</span>
                        <input ref={inputDescription} type="text" className="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Horario</span>
                        <input ref={inputSchedule} type="text" className="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Contacto</span>
                        <input ref={inputContact} type="text" className="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className=" mb-3">
                        <label className="form-label">Agregar Imágen</label>
                        <input ref={inputImg} type="file" className="form-control" id="inputGroupFile02" />
                    </div>

                    <div className="d-flex justify-content-center row">
                        <div onClick={submitAd} className="dropShadowCustom btn btn-success mt-2  mb-5 rounded-5 border-dark border border-4 "
                            style={{ width: "250px" }}>Agregar anuncio</div>
                        <div className="border border-dark border-3 p-1 rounded-3 d-flex flex-wrap"
                            style={{ width: "95%", height: "250px", overflowY: "scroll" }}>
                                {ownAds.map((ad, i) => {
                                    return <OwnAd key={"Ad"+i} removeAd={removeAd} {...ad}/>
                                })}
                        </div>
                    </div>

                </fieldset >

            </div >
        </>
    )
}