<h1>Introduction</h1>

INTUZ is presenting an interesting NodeJs component to validate your REST APIs. It helps to validate required and missing request parameters by just passing array of required parameters in the component function.

<br>
<h1>Features</h1>

- Pass array of required params for any REST API into component's function
- function will check and return with any missing params or if any param is passed as blank


<h1>Getting Started</h1>

> Include component file in your .js file

```
var validate_req  = require('validate-required'); // on the top of your file
```

> For any action, add below code to handle validation

```
app.post('/your-action', function(req, res, next) {
	var response = {};
	var required_params = ['user_id','name','email']; // request params	
	var elem = validate_req.validate().validateReqParam(post, required_params);
	var valid = (elem.missing.length == 0 && elem.blank.length == 0); // check if any missing or blank param

	if(!valid){
	    var str = validate_req.validate().loadErrorTemplate(elem);
	    response.status = 0;
	    response.message = messages.WRONG_MISSING_PARAM + str;
	    res.send(response);
	}
	else{
	    // your code goes here
	}
});
```

<h1>Bugs and Feedback</h1>

For bugs, questions and discussions please use the Github Issues.

<br>
<h1>License</h1>

Copyright (c) 2018 Intuz Solutions Pvt Ltd.
<br><br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br><br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<h1></h1>
<a href="http://www.intuz.com">
<img src="Screenshots/logo.jpg">
</a>