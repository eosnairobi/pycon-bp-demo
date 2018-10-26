## Getting Started

step 1

```
$ mkdir blockproducers
$ cd blockproducers
$ virtualenv flask
New python executable in flask/bin/python
Installing setuptools............................done.
Installing pip...................done.
$ flask/bin/pip install flask
$ flask/bin/pip install requests
```

step 2

```
#!flask/bin/python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
```

step 3

```
$ chmod a+x app.py
$ ./app.py
 * Running on http://127.0.0.1:5000/
 * Restarting with reloader
```

step 4

```
import requests

url = "http://mainnet.eosnairobi.io/v1/chain/get_producers"
data = '{"limit": "21","json":"true"}'

response = requests.post(url, data)


print(response.text)
```

step 5

```
@app.route('/producers', methods=['GET'])
def get_producers():
    response = requests.post(url, data)
    return response.text
```

step 6

```
create-react-app client
```

step 7

```
yarn add semantic-ui-css semantic-ui-react
```

step 8 (index js)

```
import "semantic-ui-css/semantic.min.css";
```

step 9 (App.js)

```
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Producers from "./container/producers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Producers />
      </div>
    );
  }
}

export default App;
```

step 10 (producers.js)

```
import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class Producers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producers: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/producers")
      .then(response => response.json())
      .then(producers => {
        let bp = producers.rows;
        this.setState({ producers: bp });
      });
  }

  render() {
    if (this.state.producers) {
      console.log(this.state.producers);
      var ListItems = this.state.producers.map(producers => (
        <Card description={producers.owner} />
      ));
    }
    return <div>{ListItems}</div>;
  }
}

export default Producers;
```

## References

All things eos
https://developers.eos.io/eosio-nodeos/reference

Flask tutorial https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
