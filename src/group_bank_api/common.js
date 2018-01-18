export async function json_request(url, author_id, signature, json_string) {
    fetch(url, {
        method: "POST",
        body: {
            author: author_id, 
            signature: signature, 
            json_string: json_string
        }
    }).then( (response) => {
        return response.text()
    }).then( (json_string) => {
        return JSON.parse(json_string);
    });
}