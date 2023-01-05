import backend from "../../config";
import {login} from "../../routes";

export default async function handeler(req, res) {

    if (req.method == "POST") {
        const data = await JSON.stringify(req.body);
        const responce = await fetch(`${backend}${login}`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const jwt = await responce.json()
        return res.status(200).send(jwt);
    }

}