source "https://rubygems.org"

gem "jekyll"
gem 'jekyll-seo-tag'
gem "jekyll-paginate"
gem "jekyll-sitemap"

group :test do
  gem "rake"
  gem 'html-proofer'
end
