export const apiAuthUrl = {
    login: {
        endpoint: 'auth/login',
        method: 'POST'
    },
    signup: {
        endpoint: 'auth/signup',
        method: 'POST'         
    },
}

export const apiAboutUrl = {
    aboutAllData : {
        endpoint: 'about/all',
        method: 'GET'
    },
    aboutShowData : {
        endpoint: 'about',
        method: 'GET'
    },
    createAbout : {
        endpoint: 'about/create',
        method: 'POST'
    },
    deleteAbout : {
        endpoint: 'about/delete',
        method: 'DELETE'
    },
    updateAbout: {
        endpoint: 'about/update',
        method: 'PUT'
    }
}