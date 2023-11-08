#JEKYLL_ENV=production bundle exec jekyll serve --livereload 
if [ $1 == "serve" ]; then
    bundle exec jekyll serve --livereload --config _config.yml,_dev_config.yml
elif [ $1 == "build" ]; then
    bundle exec jekyll build --config _config.yml,_dev_config.yml
elif [ $1 == "prod-server" ]; then
    bundle exec jekyll serve --livereload
elif [ $1 == "prod-build" ]; then
    bundle exec jekyll build
fi
