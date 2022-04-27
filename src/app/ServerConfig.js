const serverConfig = {
    proxyUrl : "https://stormy-taiga-19632.herokuapp.com",
    getHeaders : function(accessToken) {
        return {
            "authorization" : `Bearer ${accessToken}`,
            "accept" : "application/json"
        }
    }
}

export default serverConfig