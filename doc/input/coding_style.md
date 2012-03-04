Coding Style
============

General formatting
------------------

* Hard tabs are used for indentation
* Spaces are used for alignment (i.e. for the require statement)
* Open curly braces are never in their own line
* Parentheses are never surrounded by a space on either side, unless in they are used in
  expressions if the spaces increase the readability
* Every statement ends with a semicolon

Other
-----

* All `require()` statements are written in one `var` statement, i.e. exactly like this:
    
        var _ = require('underscore'),
            util = require('util'),
            fs = require('fs');
    
* `node-ffi` is required as `ffi`, not `FFI`.
