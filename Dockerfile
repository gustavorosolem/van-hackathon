FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY conf/ /usr/share/nginx/html
COPY conf.d/default.conf /etc/nginx/conf.d/
