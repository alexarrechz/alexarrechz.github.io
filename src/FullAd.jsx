export const FullAd = ({unLoadFullAd, Nombre, Contacto, Descripcion, Horario, Imagen, NombreUsuario, Id_Anuncio}) => {
    return (
        <>
            <div className="d-flex flex-column flex-wrap flex-md-row card p-3 h-auto border-dark border border-4 rounded-5 dropShadowCustom"
                style={{minWidth: "320px", flex: "1"}}>
                <div className="card-body p-4 anuncio-principal h-100">
                    <button onClick={unLoadFullAd}>Atrás</button>
                    <h2 className="card-title" id="venta_name">{Nombre}</h2>
                    <h5 className="card-title">Descripción</h5>
                    <p className="card-text" id="venta_descripción">
                        {Descripcion}
                    </p>
                    <br />
                    <h5>Horario</h5>
                    <p className="card-text" id="venta_horario">{Horario}</p>
                    <br/>
                        <h5>Contacto</h5>
                        <p className="card-text" id="venta_contacto">{Contacto}</p>
                        <h5>Vendedor</h5>
                        <p className="card-text" id="venta_contacto">{NombreUsuario}</p>
                </div>
                <div className="pe-3 text-center anuncio-principal h-auto">
                    <img src={Imagen}
                        className="m-3 rounded-1 card-img-top border border-dark " alt="no_img" />
                    <img src="http://www.trbimg.com/img-592d9aa4/turbine/ct-eat-this-2017-burritos-half-acre-tap-room-20170530"
                        className="m-3 rounded-1 card-img-top border border-dark " alt="no_img" />
                </div>
            </div>
        </>
    );
}