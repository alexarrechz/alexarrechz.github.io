export const fetchComplete = async (session, username, given_name, family_name, password, phone) => {
    var myHeaders = new Headers();
    myHeaders.append("Session", session);
    myHeaders.append("username", username);
    myHeaders.append("given_name", given_name);
    myHeaders.append("family_name", family_name);
    myHeaders.append("password", password);
    
    console.log("Session:"+session);
    console.log("username:"+username);
    console.log("given_name:"+given_name);
    console.log("family_name:"+family_name);
    console.log("password:"+password);
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/auth/complete", requestOptions)
        .then(response => response.json())
}