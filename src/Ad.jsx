export const Ad = ({ loadFullAd, Id_Anuncio, Nombre, Descripcion, Vendedor }) => {
    return (
        <>
            <div onClick={() => loadFullAd(Id_Anuncio)} className="card m-2 overflow-hidden border-dark border border d-flex rp-card">
                <div className="card-body d-flex flex-column">
                    <h2 className="card-title fw-bold pb-2">{Nombre}</h2>
                    <h5 className="card-subtitle mb-2 text-body-secondary ">{Descripcion}</h5>
                    <h5 className="card-title fw-bold mt-auto">{Vendedor}</h5>
                </div>
            </div>
        </>
    );
}