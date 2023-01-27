import React, {Component} from 'react';
import CsvUploader from './Components/CsvUploader';
import './App.scss';


class App extends Component{
  render() {
    return (
      <div className="App">
        <CsvUploader />
      </div>
    );
  }

}

export default App;
