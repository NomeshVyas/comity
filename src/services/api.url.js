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

export const apiIndustryUrl = {
    industryAllData : {
        endpoint: 'industry/all',
        method: 'GET'
    },
    industryShowData : {
        endpoint: 'industry',
        method: 'GET'
    },
    createIndustry : {
        endpoint: 'industry/create',
        method: 'POST'
    },
    deleteIndustry : {
        endpoint: 'industry/delete',
        method: 'DELETE'
    },
    updateIndustry: {
        endpoint: 'industry/update',
        method: 'PUT'
    }
}