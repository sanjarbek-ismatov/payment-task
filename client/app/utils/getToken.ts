export function getToken(){
    return localStorage.getItem("x-token") ?? sessionStorage.getItem("x-token")
}