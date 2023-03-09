import appSettings from "../../../appSettings";

const url = `${appSettings.baseUrl}/contact`

const headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Authorization", sessionStorage.getItem("@token"))

/*
@function createContact
*/
export const createContact = async (data) => {
    
    let newContact = new Array();
    newContact = {
        "nome": data.nome, 
        "email": data.email,
        "telefones": [{
            "tipo": "celular",
            "numero": data.telefone
        }]
    }

    const options = {
        headers,
        body: JSON.stringify(newContact),
        method: "POST",
    }


    const response = await fetch(url, options)
    return await response.json()
}

/*
    @function searchContact
*/
export const searchContact = async () => {
    const options = {
        headers,
        method: "GET",
    }

    const response = await fetch(url, options)
    return await response.json()
}