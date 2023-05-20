export const deleteAd = async (id, token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/ads/specific?id="+id, requestOptions)
        .then(response => response.json())
}