export const OwnAd = ({removeAd, Id_Anuncio, Nombre, Descripcion}) => {
    return (
        <>
            <div className="card overflow-hidden border-dark border border d-flex rp-card"
                style={{width:"45%", height:"50%"}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold pb-2">{Nombre}</h5>
                    <div className="card-subtitle mb-2 fs-7 text-body-secondary ">
                        {Descripcion}
                    </div>
                </div>
                <button onClick={() => removeAd(Id_Anuncio)}>Borrar</button>
            </div>
        </>
    )
}