const Environments = {
    development: {
        apiUrl: 'http://localhost:3000',
        loginPlus:"users/login",
        loginWebPage:"users/login"
    },
    production: {
        apiUrl: 'https://games.cba.org.bo/api/',
        loginPlus:"usuario/login",
        loginWebPage:"usuario/login",
        validTokenPlus:"users/valid/token/",
        validTokenWebPage:"users/valid/token/mobile"
    },
    keysLocalStorage:{
        auth: 'authToken',
        theme: 'theme',
    },
    modeApplication:{
        key:'modeApplicationLogin',
        admin:'Admin',
        student:'Student'
    }
};

export default Environments;