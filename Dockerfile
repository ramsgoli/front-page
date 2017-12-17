# Need a custom image here so that we can incorporate an npm build too
# Alpine is super light
FROM alpine:3.5

# Download and install packages
RUN apk add -U nginx make nodejs curl

# Create directories
#   /working is the build directory
#   /static is the directory linked to nginx (serves static content)
RUN mkdir -p /var/www/ramsgoli.com/working && \
    mkdir -p /var/www/ramsgoli.com/static && \
    mkdir -p /var/www/ramsgoli.com/static/build && \
    mkdir -p /var/www/ramsgoli.com/static/images

# Install the required packages to build the frontend
WORKDIR /var/www/ramsgoli.com/working
COPY *.json /var/www/ramsgoli.com/working/
RUN /usr/bin/node --max_semi_space_size=8 \
                  --max_old_space_size=298 \
                  --max_executable_size=248 \
                  /usr/bin/npm install

# Copy the source files
COPY pages/ /var/www/ramsgoli.com/working/pages/
COPY src/ /var/www/ramsgoli.com/working/src/
COPY images/ /var/www/ramsgoli.com/working/images/
COPY .babelrc *.js Makefile /var/www/ramsgoli.com/working/

# build and copy files to server root
RUN make build && \
    cp -rv pages/* ../static/ && \
    cp -rv lib/build/* ../static/build/ && \
    cp -rv lib/images/* ../static/images/

# Copy the configuration file
RUN mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/
WORKDIR /var/www/ramsgoli.com/static

# Run the server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
