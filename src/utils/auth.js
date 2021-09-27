
export const isAuth = () => {
    const token = getToken(); 
    if(!token) return false; 
    return true; 
}

export const getToken = () => {
    return localStorage.getItem("lunsjytoken"); 
}

export const setToken = (token) => {
    localStorage.setItem("lunsjytoken", token); 
}