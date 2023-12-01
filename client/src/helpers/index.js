const validateToken = (token) => {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const currentTime = Math.floor(Date.now() / 1000);
        if(decodedToken.exp > currentTime){
            return true
        }
        return false
}

export { validateToken };