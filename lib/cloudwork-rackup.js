/*
*
* Copyright Neville Burnell
* All Rights Reserved
*
*/



/*
use Cloudwork::Core::BodyToJson

map '/cloudwork' do
  map '/' do
    run Cloudwork::Core::Http404
  end

  map '/core' do
    map '/' do
      run Cloudwork::Core::Http404
    end

    map '/version' do
      use Cloudwork::Core::Version
      run Cloudwork::Core::Http200
    end
  end
end

map '/' do
  run Cloudwork::Core::Http404
end
*/

var Jack = require("jack");
var Rack = require('cloudwork/core/rack');

var map = {
    '/': Rack.Http404,
    '/version': Rack.Version(Rack.Http200)
};

exports.app = Jack.ContentLength(Rack.BodyToJson((Jack.URLMap(map))));
