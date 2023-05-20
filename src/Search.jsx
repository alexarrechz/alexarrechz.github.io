import { useRef } from "react"

export const Search = ( {fetchAds, search} ) => {
    const inputSearch = useRef(null);
    const onChange = () => {
        if(inputSearch.current.value.trim().length == 0)
            fetchAds();
    }
    return (
        <>
            <div className="d-flex pt-3 sticky-top justify-content-center justify-content-sm-start align-items-center my-form">

                <input ref={inputSearch} onChange={onChange} className="form-control dropShadowCustom me-2 border-dark border rounded-4 border-4 " type="search"
                    placeholder="Buscar" aria-label="Search" />
                <button onClick={() => search(inputSearch.current.value.trim())} className="btn btn-success dropShadowCustom border-dark border rounded-4 border-4 ">Buscar</button>
            </div><br />
        </>
    )
}