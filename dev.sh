#JEKYLL_ENV=production bundle exec jekyll serve --livereload 
if [ $1 == "s" ]; then
    bundle exec jekyll serve --livereload --config _config.yml,_dev_config.yml
elif [ $1 == "b" ]; then
    bundle exec jekyll build --config _config.yml,_dev_config.yml
elif [ $1 == "ps" ]; then
    bundle exec jekyll serve --livereload
elif [ $1 == "pb" ]; then
    bundle exec jekyll build
fi
