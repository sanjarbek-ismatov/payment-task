const getServerUrl = () => {
    const env = process.env.NODE_ENV
    if (env === 'development') return "http://localhost:4000"
    return process.env.SERVER_URL
}
export default getServerUrl