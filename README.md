# climate-explorer-frontend

## Running the Application

This docker image relies upon pcic/geospatial-python. Make sure you have an updated version of that image before building this one.

    docker pull pcic/geospatial-python
    docker build -t pcic/climate-explorer-frontend .
    docker run -d -p 127.0.0.1:<port>:5000 --name=ce -v <absolute_path_to_code_directory>:/app pcic/climate-explorer-frontend

## Contributing

HTML templates are in `src/templates`. Currently these are basic HTML but will also be rendered using the Jade templating engine

ReactJS components can be embeded in the HTML file (eg: `hello.html`) or `src/static/scripts/jsx/main.js`. The jsx needs to be compiled into js to run in the browser. Outside of the container, just run the default `gulp` task and any changes in `jsx/main.js` will be compiled into `js/main.js` automatically

Routing is handled using the Flask router. Routes are defined in `src/app.js`