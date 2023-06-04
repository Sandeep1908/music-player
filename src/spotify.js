import axios from 'axios'

const authEndpoint='https://accounts.spotify.com/authorize?';
const clientId='4dc17e289d674cf7ac784b7933608554';
const redirectUrl='http://localhost:3000';
const scopes=["user-library-read","playlist-read-private"];

export const loginEndpoint=`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

const apiClient=axios.create({
    baseURL:"https://api.spotify.com/v1/",
})

export const setClientToken=(token)=>{
    apiClient.interceptors.request.use(async function (config){
        config.headers['Authorization']="Bearer "+ token;
        return config;
    })
};

export default apiClient;