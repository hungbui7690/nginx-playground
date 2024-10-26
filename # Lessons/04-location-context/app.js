/*
  Location Context
  - Location contexts allow you to serve different HTML files for specific URLs.


\\\\\\\\\\\\\\\\\\\\\

    location [modifier] [URI] {
      ...
      ...
    }


\\\\\\\\\\\\\\\\\\\\\

  1. mysite/fruits/index.html
  2. mysite/vegetables/veggies.html
  2. nginx.conf -> location 
    -> /fruits -> root
    -> /foods -> alias
    -> /vegetables -> try_files


\\\\\\\\\\\\\\\\\\\\\

  Match all request
    location / {
        ...
    }

  Match exact URL
    location = /images { 
        ...
    }
    - URL https://domain.com/images/index.html or https://domain.com/images/ will not be matched.

  Starting with /image
    location /images/ {
        ...
        ...
    }
    - The following location block will match any request starting with /images/ but continue with searching for more specific block for the requested URI. Therefore the location block will be selected if NGINX does not find any more specific match.

  Regex - Case Sensitive
    location ^~ /images {
      ...
      ...
    }
    - The modifier ^~ in the following location block results in a case sensitive regular expression match. Therefore the URI /images or /images/logo.png will be matched but stops searching as soon as a match is found.

  Regex - Case Insensitive Match - image/css/js file types
    location ~* .(png|ico|gif|jpg|jpeg|css|js)$ {
        ...
        ...
    }
    - The modifier ~* in the next location block matches any request (case-insensitive) ending with png, ico, gif, jpg, jpeg, css or js. However, any requests to the /images/ folder will be served by the previous location block.

  Regex - Case Sensitive Match
    location ~ /images {
        ...
        ...
    }
    -> The modifier ~ in the following location block results in a case sensitive regular expression match but doesn’t stop searching for a better match.

  Regex - Case Insensitive Match
    location ~* /images {
        ...
        ...
    }
    -> The modifier ~* in the following location block results in a case insensitive regular expression match but the searching doesn’t stop here for a better match.



*/
