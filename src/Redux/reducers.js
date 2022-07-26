// console.log(document.cookie);

const getCookie = (cookies, key) => {
    const keyArr = cookies.split('; ');
    var i;
    for (i = 0; i < keyArr.length; i++) {
        let str = keyArr[i];
        if (str.includes(key)) {
            return str.slice(str.indexOf(key) + key.length + 1, str.length);
        }
    }
    return '';
};

// console.log(getCookie(document.cookie, 'userId'));

function getInitialState() {
    return {
        userId: getCookie(document.cookie, 'userId'),
        name: getCookie(document.cookie, 'name'),
        email: getCookie(document.cookie, 'email'),
        publicKey: getCookie(document.cookie, 'publicKey'),
        privateKey: getCookie(document.cookie, 'privateKey'),
    };
}

// var initialState = {
//     userId: null,
//     name: null,
//     email: null,
// };

function userReducer(state = getInitialState(), action) {
    switch (action.type) {
        case 'addUser':
            // Object.assign(state, action.payload);
            return {
                ...action,
                userId: action.payload.userId,
                name: action.payload.name,
                email: action.payload.email,
                privatekey: action.payload.privatekey,
                publicKey: action.payload.publicKey,
            };

        case 'deleteUser':
            // Object.assign(state, action.payload);
            return {
                ...action,
                userId: action.payload.userId,
                name: action.payload.name,
                email: action.payload.email,
                privatekey: action.payload.privatekey,
                publicKey: action.payload.publicKey,
            };

        default:
            return state;
    }
}

export default userReducer;
