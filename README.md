## ethull

> personal website / blog

### Framework
- jekyll ssg
- bulma css framework
- heavily modified jekyll-bulma theme

### Setup ruby on ubuntu

We need to use ruby 2.7 for jeykll 3, and jekyll 3 for github pages support.
To install it I'm using the ruby version manager rbenv.
But you could use anouther such as: rvm, chruby, asdf ...

```sh
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' >> ~/.profile
source ~/.profile
rbenv install 2.7.0
cd {proj_dir}
rbenv local 2.7.0
```

### Run the site locally

- with command

`bundle exec jekyll serve --livereload --config _config.yml,_dev_config.yml`

- or run with script

`scripts/deploy.sh serve`
