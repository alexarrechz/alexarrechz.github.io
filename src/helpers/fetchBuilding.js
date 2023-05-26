export const fetchBuilding = async (id) => {
    return await fetch("https://bly1ze680i.execute-api.us-east-2.amazonaws.com/dev/buliding?id="+id)
        .then(response => response.json())
}