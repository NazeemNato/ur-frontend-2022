import Cookies from "js-cookie";

const getSecretToken = () => {
    const secret = Cookies.get("secret");
    return secret;
}

const setSecretToken = (secret) => {
    Cookies.set("secret", secret);
}

const removeSecretToken = () => {
    Cookies.remove("secret");
}

export const TokenService = {
    getSecretToken,
    setSecretToken,
    removeSecretToken
}