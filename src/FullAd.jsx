export const FullAd = ({ unLoadFullAd, Nombre, Contacto, Descripcion, Horario, Imagen, NombreUsuario, Id_Anuncio }) => {
    return (
        <>
            <div className="d-flex flex-column flex-wrap flex-md-row card p-3 h-auto border-dark border border-4 rounded-5 dropShadowCustom"
                style={{ minWidth: "320px", flex: "1" }}>
                <button type="button" onClick={unLoadFullAd} class="btn-back btn btn-dark position-absolute ms-4 top-0 mt-4">
                    {"<"} Volver
                </button>
                <div className="card-body p-4 anuncio-principal h-100 mt-4">
                    <h2 className="card-title" id="venta_name">{Nombre}</h2>
                    <h5 className="card-title">Descripción</h5>
                    <p className="card-text" id="venta_descripción">
                        {Descripcion}
                    </p>
                    <br />
                    <h5>Horario</h5>
                    <p className="card-text" id="venta_horario">{Horario}</p>
                    <br />
                    <h5>Contacto</h5>
                    <p className="card-text" id="venta_contacto">{Contacto}</p>
                    <h5>Vendedor</h5>
                    <p className="card-text" id="venta_contacto">{NombreUsuario}</p>
                </div>
                <div className="pe-3 text-center anuncio-principal h-auto">
                    <img src={Imagen}
                        className="m-3 rounded-1 card-img-top border border-dark " alt="no_img" />
                </div>
            </div>
        </>
    );
}