import { useEffect, useState } from "react";
import { Ad } from "./Ad";
import { Search } from "./Search";
import { FullAd } from "./FullAd";

export const Ads = () => {
    const [ads, setAds] = useState([]);
    const [focusAd, setFocusAd] = useState({});
    const [fullAd, setFullAd] = useState(false);
    const fetchAds = async () => {
        const { result } = await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/ads")
            .then(response => response.json())
        console.log(result);
        setAds(result);
    };
    useEffect(() => {
        fetchAds();
    }, [])
    
    const search = async (q) => {
        if(q.length == 0){
            return fetchAds();
        }
        console.log(q);
        const {result} = await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/ads/search?q="+q).then(response => response.json());
        console.log("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/ads/search?q="+q, result);
        if(result)
            setAds(result);
    }

    const loadFullAd = async (id) => {
        const { result } = await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/ads/specific?id="+id)
            .then(response => response.json())
        setFocusAd(result);
        setFullAd(true);
        window.scrollTo(0, 0);
    }
    const unLoadFullAd = () => {
        setFullAd(false);
    }
    return (
        <>
            <section className="bg-blue border-dark border-bottom border-5 " style={{ minHeight: "100vh" }}>
                {!fullAd && <Search search={search} fetchAds={fetchAds}/>}
                <div className="bg-blue d-flex justify-content-center border-dark  border-4 " style={{ height: "100%" }}>
                    <div className="container">
                        <div className="d-flex flex-wrap p-2 justify-content-center">
                            {!fullAd && ads.map((item, i) => {
                                return <Ad key={i} loadFullAd={loadFullAd} {...item} />
                            })}
                            {fullAd && <FullAd unLoadFullAd={unLoadFullAd} {...focusAd} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}