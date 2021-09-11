const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split(';');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
    // document.cookie;
    // document.cookie.split('; ').map(c => console.log(c.split('=')));
    // document.cookie.split('; ').find(c => c.includes('_ga'));
    // document.cookie.split('; ').find(c => c.includes('_ga')).split('=');
    // document.cookie.split('; ').find(c => c.includes('_ga')).split('=')[1];
}

// window.localStorage;
// window.sessionStorage;
// window.localStorage.getItem('as');
// window.localStorage.setItem('as' , '12');
// const nextIdJSON = window.localStorage.getItem('yt.innertube::nextId');
// const nextId = JSON.parse(nextIdJSON)
// nextId.assignUser = 'Sk';
// nextId.assignId = '001';
// nextId;
// const nextIdStringified = JSON.stringify(nextId);
// window.localStorage.setItem('yt.innertube::nextId' , nextIdStringified);

