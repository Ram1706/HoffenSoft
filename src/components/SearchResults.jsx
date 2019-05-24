import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import ACTIONS from '../modules/action';
import axios from "axios";


class SearchResults extends React.PureComponent{

    constructor(props)
    {
        super(props);
        this.addSearchDetails=this.addSearchDetails.bind(this);
        this.state={
            images:[],
            selectedImage:"",
            Index:""
        }
    }

    previous(e)
    {

    }

    componentDidMount()
    {
        this.addSearchDetails();
    }




    addSearchDetails()
    {
        debugger;
        let imagesNew=[];
        this.props.imagevalues.searchImagedetails.results.map((result,index) =>
        imagesNew.push({"selectedimage":result.urls.regular,"index":index})
        ); 
        this.setState({
            images:imagesNew
        })
    }
    next(e){


    }



    

    render(){
        console.log("images"+JSON.stringify(this.props.imagevalues));
        return(
            <div>
                {this.props.imagevalues.searchImagedetails.results.map((result,index) =>
                    <li key={index}>
                    <button onClick={(e)=>this.previous(e)} >Previous</button>
                       <img src={result.urls.regular} />
                       <button onClick={(e)=>this.next(e)} >Next</button>
                    </li>)

                }
               
            </div>

        );
    }




}

export default SearchResults;


