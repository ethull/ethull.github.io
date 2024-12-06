## ethull

> personal website / blog

### Framework
- jekyll ssg
- bulma css framework
- heavily modified jekyll-bulma theme

### Setup ruby

Since we are using github actions, instead of default github pages jekyll build.
We can now use ruby 3 rather than ruby 2.7 .
Its easier to use a ruby version manger to manage the ruby version.
Examples include: rbenv, rvm, chruby, asdf ...

#### ubuntu
```sh
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' >> ~/.profile
source ~/.profile
rbenv install 2.7.0
cd {proj_dir}
rbenv local 2.7.0
```

#### macos
Note macos has default ruby 2 installation, that we want to avoid.
```sh
#brew install rbenv ruby-build rbenv-default-gems rbenv-gemset
brew install rbenv ruby-build
echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.zprofile
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
rbenv install 3.2.2
rbenv global 3.2.2
cd {proj_dir}
rbenv local 3.2.2
bundle install
```

### Setup css files
```
npm install
ln -s node_modules/@fortawesome/fontawesome-free/webfonts/ assets/webfonts
```

### Run the site locally

- with command

`bundle exec jekyll serve --livereload --config _config.yml,_dev_config.yml`

- or run with script

`scripts/deploy.sh serve`
