export const fetchUpdate = async (username, givenName, familyName, phone, token) => {
    let myHeaders = new Headers();
    myHeaders.append("username", username);
    myHeaders.append("given_name", givenName);
    myHeaders.append("family_name", familyName);
    myHeaders.append("phone", phone);
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/user/modify", requestOptions)
        .then(response => response.json())
}