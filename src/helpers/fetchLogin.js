export const fetchLogin = async (username, password) => {
    let myHeaders = new Headers();
    myHeaders.append("username", username);
    myHeaders.append("password", password);
    console.log(username, password);
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/auth/login", requestOptions)
        .then(response => response.json())
}