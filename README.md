# [showcase](https://vllur.github.io/showcase/) [![Build Status](https://travis-ci.org/vllur/showcase.svg?branch=master)](https://travis-ci.org/vllur/showcase)

Simple portfolio-showcase Jekyll theme, with Google Analytics and Seo optimization.

### Dependencies:
  - [normalize.css (8.0.0)](https://github.com/necolas/normalize.css/)
  - [particle.js](https://github.com/VincentGarreau/particles.js/)
  - [Fontello](http://fontello.com/)
  - Google Analytics

See [Gemfile](./Gemfile) and [_config.yml](./_config.yml) for list of all gems & Jekyll plugins.

###
To use Google Analytics, simply provide your Analytics ID in ```_config.yml``` - eg.: ```google_analytics: "GA-11111111"```.

To make best use of Seo plugin, provide your social links in ```_config.yml```, eg:
```
author:
  name: "John Smith"

twitter:
  username: johny
```
or
```
social:
  name: Ben Balter
  links:
    - https://twitter.com/BenBalter
    - https://www.facebook.com/ben.balter
```

You can read more about usage of the Seo plugin [here](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md).

### Font license info:
#### Font Awesome
   Copyright (C) 2016 by Dave Gandy

   Author:    Dave Gandy
   License:   SIL ()
   Homepage:  http://fortawesome.github.com/Font-Awesome/
