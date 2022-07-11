const url = {
    ACCOMODDATION: '/accommodations',
    CITIES: '/cities',
    CATEGORIES: '/categories',
    LOGIN: '/login',
    USER_INFO: '/api/getuser', // fazer requisição com get + token
    CREATE_ACCOMMODATION: '/accommodations/save',
    POST_NEW_USER: '/api/user/save',
    GET_RESERVATIONS_FROM_USER: '/api/user/reservations', // fazer requisição com get + token
    CREATE_NEW_RESERVE: '/api/reservation/save' // post com header + token
};

export default url;
