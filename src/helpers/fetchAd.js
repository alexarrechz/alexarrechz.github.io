export const fetchAd = async (title, description, schedule, contact, image, token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        title,
        description,
        contact,
        schedule,
        image
    });

    console.log(raw);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/ads", requestOptions)
        .then(response => response.json())
}