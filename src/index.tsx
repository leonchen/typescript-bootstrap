import * as utils from './utils';
import * as React from 'react';
import * as ReactDOM from "react-dom";

interface Props {
}

class App extends React.Component<Props, {}> {
  render() {
    return <div>hello typescript+react</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("main")
);

