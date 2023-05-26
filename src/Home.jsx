import { MainCard } from "./MainCard"
import { Map } from "./Map"

export const Home = () => {
    return (
        <>
            <section className="bg-light border-dark border-bottom border-5 section1">
                <div className="bg-primary d-flex justify-content-center align-items-center " style={{ height: "100%" }}>
                    <div className="container py-3 px-3 mx-0 mx-auto align-middle">
                        <div id="map_main_wrapper_content"
                            className="d-flex flex-sm-row flex-wrap flex-column-reverse align-items-center p-2 mx-auto dropShadowCustom bg-primary justify-content-center border-dark border border-4 rounded-4 ">
                            <Map />
                            <MainCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}