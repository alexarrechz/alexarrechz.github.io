export const postImage = async (image, token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        image
    });
    console.log(JSON.parse(raw));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/ads/image", requestOptions)
        .then(response => response.json())
}