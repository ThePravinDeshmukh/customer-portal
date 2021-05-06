cd ..\src

docker container stop customerportal
docker container rm customerportal
docker rm customerportal

docker build -t customerportal .

START docker run -it --rm -p 5000:80 --name customerportal customerportal

START http://localhost:5000/ui/playground

pause..