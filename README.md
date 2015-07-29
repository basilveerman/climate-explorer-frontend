# climate-explorer-frontend

docker build -t pcic/climate-explorer-frontend .
docker run -d -p 127.0.0.1:<port>:5000 --name=ce -v <absolute_path_to_code_directory>:/app pcic/climate-explorer-frontend