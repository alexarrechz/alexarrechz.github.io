export const fetchProfile = async (token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/user", requestOptions)
        .then(response => response.json())
}