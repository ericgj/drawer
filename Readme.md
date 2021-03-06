
# drawer

  Drawer UI component

## Installation

  Install with [component(1)](http://component.io):

    $ component install ericgj/drawer

<a name="example"></a>
## Example

```js
var Drawer = require('drawer');
var drawer = Drawer();
drawer.close();   // init state
drawer(sidebar);  // first render

toggleButton.addEventListener('click', drawer.toggle);
openButton.addEventListener('click', drawer.open);
closeButton.addEventListener('click', drawer.close);

```

<a name="api"></a>
## API

  <a name="api_constructor">#</a><br/>
  var Drawer = require('drawer')<br/>
  var drawer = <b>Drawer()</b>

  Construct a new drawer _render function_.

  <a name="api_render">#</a>
  <b>drawer</b>(<i>el</i>)

  Apply the drawer to the given element. The given element should be your 
  'sidebar' container.

  <a name="api_toggle">#</a>
  drawer.<b>toggle</b>()

  Toggle the drawer open or closed.

  <a name="api_open">#</a>
  drawer.<b>open</b>()

  Programmatically open the drawer (if not already opened).

  <a name="api_close">#</a>
  drawer.<b>close</b>()

  Programmatically close the drawer (if not already closed).

  <a name="api_parent">#</a>
  drawer.<b>parent</b>(<i>el</i>)

  Set the parent element (i.e., the element that will get left-padded over when
  the drawer is opened.) If not specified, it is the parent node of the rendered
  element in the DOM. Generally, this should be set before rendering.

<a name="api_events"></a>
### Events

  <a name="api_events_toggle">#</a>
  drawer.on('<b>toggle</b>', <i>handler</i>)

  Fired on any drawer state change. Handler is called with the new state
  (`true` if open, `false` if closed).

  <a name="api_events_open">#</a>
  drawer.on('<b>open</b>', <i>handler</i>)

  Fired after the drawer has been opened.

  <a name="api_events_close">#</a>
  drawer.on('<b>close</b>', <i>handler</i>)

  Fired after the drawer has been closed.

  <a name="api_events_before">#</a><br/>
  drawer.on('<b>toggling</b>', <i>handler</i>)<br/>
  drawer.on('<b>opening</b>', <i>handler</i>)<br/>
  drawer.on('<b>closing</b>', <i>handler</i>)

  Fired before drawer toggle, open, and close, respectively.


## License

  The MIT License (MIT)

  Copyright (c) 2014 Eric Gjertsen <ericgj72@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
