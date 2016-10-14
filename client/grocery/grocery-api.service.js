
function groceryAPIService($resource) {
    const api = {
        grocery: $resource('/api/groceryitems/:id/'),
    };

    return api;
}

export default groceryAPIService;
