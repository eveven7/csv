import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import DataTable from './DataTable';
import '../App.scss';

class CsvUploader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            csvData: []
        }
    }

    componentDidMount() {
        console.log("Component did mount is called")
        const data = JSON.parse(localStorage.getItem("csvData"));
        if (data) {
            data.shift();
        } 
        this.setState({
            csvData: data
        })
    }

    handleFile = data => {
    // console.log(data);
        localStorage.setItem("csvData", JSON.stringify(data));
        const localStorageData = JSON.parse(localStorage.getItem("csvData"));
        this.setState({
            csvData: localStorageData
        })
        console.log("------localStorageData------", localStorageData[0]);
    };
            
    
    render() {
        const {
            csvData
        } = this.state;
        console.log("state data is",csvData);
        return (
            <div>
                
                <CSVReader
                    cssClass="react-csv-input"
                    onFileLoaded={this.handleFile}
                />
                <DataTable className="dataTable" data = {csvData} />
            </div>
        )
    }
}

export default CsvUploader;