export const MainCard = () => {
    return (
        <>
            <div id="main-card" className="d-none d-md-flex px-4" style={{ minWidth: "320px", flex: "1" }}>
                <div className="card p-3 h-auto border-dark border border-4 rounded-5 dropShadowCustom">
                    <div className="card-body text-center" style={{ height: "50vh" }}>
                        <img src="" className="card-img-top d-none" alt="no_img" />
                        <h2 className="card-title fw-bold">¡Navega por el Tec II!</h2>
                        <h6 className="card-subtitle mb-2 text-muted d-none">Subtitulo</h6>
                        <p className="card-text" style={{ textJustify: "distribute-all-lines", textAlign: "justify" }}>
                            Muévete libremente por el plantel y alrededores del plantel. Si tienes duda de
                            algun edificio puedes interactuar con él para que muestre más información.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}