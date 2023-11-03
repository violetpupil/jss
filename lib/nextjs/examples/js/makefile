run:
	docker run -dp 8082:80 \
	-v D:\jss\lib\nextjs\examples\js\out:/usr/share/nginx/html:ro \
	-v D:\jss\lib\nextjs\examples\js\nginx.conf:/etc/nginx/nginx.conf:ro \
	--name nginx \
	nginx