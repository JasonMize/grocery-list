
function groceryAPIService($resource) {
    const api = {
        grocery: $resource('/api/groceryitems/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }),
    };

    return api;
}

export default groceryAPIService;
