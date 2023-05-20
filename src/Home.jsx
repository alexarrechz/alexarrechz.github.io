import { MainCard } from "./MainCard"
import { Map } from "./Map"

export const Home = () => {
    return (
        <>
            <section className="bg-light border-dark border-bottom border-5 ">
                <div className="bg-primary d-flex justify-content-center align-items-center " style={{ height: "88vh" }}>
                    <div className="container py-3 px-3 mx-0 mx-auto align-middle" style={{ height: "88vh", width: "100%" }}>
                        <div className="d-flex flex-row align-items-center p-2 mx-auto dropShadowCustom bg-primary justify-content-center
                    border-dark border border-4 rounded-4 ">
                            <Map />
                            <MainCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}