
function groceryAPIService($resource) {
    const api = {
        grocery: $resource('/api/groceryitems'),
    };

    return api;
}

export default groceryAPIService;
