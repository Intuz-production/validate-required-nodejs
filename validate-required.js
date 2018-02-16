// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
exports.validate = function(){
    return {
        /* Function to check whether required request params are exist in post or not */
        validateReqParam: function (post, reqparam) {
            var remain = [];
            var req = [];
            for (var i = 0; i < reqparam.length; i++) {
                if (typeof post[reqparam[i]] != 'undefined') {
                    if (post[reqparam[i]] == '') {
                        req.push(reqparam[i]);
                    }
                } else {
                    remain.push(reqparam[i]);
                }
            }            
            var respose = {'missing': remain, 'blank': req};
            return respose; // Returns an object of missing and blank params array
        },
        /* Function to load error message template for blank/missing request params for all APIs */
        loadErrorTemplate: function (elem) {
            var missing = elem.missing;
            var blank_str = '', missing_str = '';
            if (missing.length > 0) {
                missing_str = missing.join(',');
                missing_str += ' missing';
            }
            var blank = elem.blank;
            if (blank.length > 0) {
                blank_str = blank.join(',');
                blank_str += ' should not be blank';
            }
            var s = [missing_str, blank_str];
            var str = s.join(' \n');
            return str; // Returns a string of error message(s)
        }
   };
}