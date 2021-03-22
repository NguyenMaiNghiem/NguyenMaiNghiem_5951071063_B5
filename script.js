axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAF3iNGZCES3jZBDixdhibUUoCGabdzkmHSfGROWzOkj7J18Wbo3GWBoGl6R5B04nPdnjgFd7a4H098xZC2iFIJNRSnh6lomUgUhQ3KnDZCNpmROfP0C7yHAdtFzC8tSa1ScD4FZBXZABJw0UeZA5bEUgxFP3d04EiWgd0hVUNZCbEcZB1rrRXwCUZD')
        .then(response => {
            var output = "";
            output += " <span class='highlight'>Thông tin bài viết số 1</span> </br> Content: " +
            response.data.data[0].message + "<br>" +
            "<span class='highlight'>Thông tin bài viết số 2</span> </br> Content: " +
            response.data.data[1].message + "<br>" +
            "<span class='highlight'>Thông tin bài viết số 3</span> </br> Content: " +
            response.data.data[2].message;

            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error(error));