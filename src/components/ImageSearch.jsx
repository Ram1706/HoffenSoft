import React from 'react';
import {connect} from 'react-redux';
import ACTIONS from '../modules/action';
import axios from "axios";
import SearchResults from './SearchResults';



class ImageSearch extends React.PureComponent{

    constructor(props)
    {
        super(props);
        this.state={
            searchImage:""
        };
    }

    searchImage(e)
    {
        e.preventDefault();
        axios.get(`https://api.unsplash.com/search/photos/?query=${this.state.searchImage}&client_id=df28ff85ddfd5c66e129d901cd2f025463d4911ed156aff171d16e2cf588c07d`)
      .then(res => {
        let images = res.data;
        this.props.addImageToStore(images);
        this.setState({
            showSearchDetails:true
        });
      })

    }

    handleOnchange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    displaysearchPage()
    {
        return(
            <div>
               <SearchResults imagevalues={this.props.images}/>
            </div>
        );
    }

    displaySearchButtonPage()
    {
        return(
            <div>
              <input name="searchImage" value={this.state.searchImage} onChange={(e)=>this.handleOnchange(e)}></input>
            <button onClick={(e)=>this.searchImage(e)} >Search</button>
            </div>
        );
    }




render()
{

    return(

        <div>
            <form>
            { this.displaySearchButtonPage() }
            </form>
            {this.state.showSearchDetails && this.displaysearchPage()}
        </div>
    )
}  
}

const mapStateToProps = state =>
{
    return {
        images:state.images
    }
};

const mapDispatchToProps = dispatch =>({
    addImageToStore: images =>dispatch(ACTIONS.serachImageDetails(images))
});


export default connect(mapStateToProps,mapDispatchToProps) (ImageSearch);
