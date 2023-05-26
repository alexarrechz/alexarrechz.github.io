export const MainCard = () => {
    return (
        <>
            <div id="main-card" className="px-4 py-3" style={{minWidth: "320px", flex: "1", width: "100%"}}>
                <div id="main-card_div"
                    className="card p-3 h-auto border-dark border border-4 rounded-5 dropShadowCustom w-100">
                    <div id="main-card_body" className="card-body text-center">
                        <img id="main-card_img" src="" className="card-img-top d-none" alt="no_img" />
                        <h2 id="main-card_name" className="card-title fw-bold">¡Navega por el Tec II!</h2>
                        <p id="main-card_parrafo" className="card-text"
                            style={{textJustify : "distribute-all-lines", textAlign : "justify"}}>
                            Muévete libremente por el plantel y al rededores del plantel. Si tienes duda de
                            algun edificio puedes interactuar con él para que muestre más información.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}