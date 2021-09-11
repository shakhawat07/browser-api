const getCookie = name => {
    const cookie = document.cookie;
    const allCookie =

        document.cookie
    document.cookie.split('; ').map(c => console.log(c.split('=')))
    document.cookie.split('; ').find(c => c.includes('_ga'))
    document.cookie.split('; ').find(c => c.includes('_ga')).split('=')
    document.cookie.split('; ').find(c => c.includes('_ga')).split('=')[1]
}