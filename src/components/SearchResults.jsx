import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Button
} from "@material-ui/core";


class SearchResults extends React.PureComponent {
    constructor(props) {
        super(props);
        this.addSearchDetails = this.addSearchDetails.bind(this);
        this.modalPanelDisplay = this.modalPanelDisplay.bind(this);
        this.getImagesBasedOnIndex = this.getImagesBasedOnIndex.bind(this);
        this.state = {
            selectedImage: [],
            openmodal: false,
            displayingindex: "",
            allImages: []
        };
    }

    previous(e) {
        const currentindex = this.state.displayingindex;
        if (currentindex > 0) {
            this.getImagesBasedOnIndex(currentindex - 1);
            this.setState({
                displayingindex: currentindex - 1
            });
        }
    }

    next(e) {
        const currentindex = this.state.displayingindex;
        if (
            currentindex <
            this.props.imagevalues.searchImagedetails.results.length - 1
        ) {
            this.getImagesBasedOnIndex(currentindex + 1);
            this.setState({
                displayingindex: currentindex + 1
            });
        }
    }

    getImagesBasedOnIndex(indexValue) {
        const imagesbasedonIndex = this.state.allImages.filter(
            images => images.index === indexValue
        );
            this.setState({
            selectedImage: imagesbasedonIndex,
            openmodal: true,
            displayingindex: indexValue
        });
    }

    componentDidMount() {
        this.addSearchDetails();
    }

    addSearchDetails() {
        let imagesNew = [];
        this.props.imagevalues.searchImagedetails.results.map((result, index) =>
            imagesNew.push({ imageDetails: result, index: index })
        );
        this.setState({
            allImages: imagesNew
        });
    }

    openModal(e, result, index) {
        this.setState({
            openmodal: true,
            selectedImage: [{ imageDetails: result, index: index }],
            displayingindex: index
        });
    }

    handleClose(e) {
        this.setState({
            openmodal: false
        });
    }

    modalPanelDisplay() {
        return (
            <Dialog
                open={this.state.openmodal}
                onClose={e => this.handleClose(e)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                    <h1>Image Details:</h1>
                    <br/>
                    Name:{this.state.selectedImage[0].imageDetails.user.name}
                    <br></br>
                    Likes:{this.state.selectedImage[0].imageDetails.likes}
                </DialogTitle>
                <DialogContent >
                    <img style={{height:200,width:200}} src={this.state.selectedImage[0].imageDetails.urls.regular}  alt={this.state.selectedImage[0].imageDetails.alt_description}></img>
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={this.state.displayingindex <= 0}
                        onClick={e => this.previous(e)}
                        color="primary"
                    >
                        Previous
          </Button>
                    <Button
                        disabled={
                            this.state.displayingindex >= this.state.allImages.length - 1
                        }
                        onClick={e => this.next(e)}
                        color="primary"
                    >
                        Next
                        </Button>
                    <Button
                        onClick={e => this.handleClose(e)}
                        color="primary"
                    >Close</Button>

                </DialogActions>
            </Dialog>
        );
    }
    displayImagegallery() {
        return this.props.imagevalues.searchImagedetails.results.map(
            (result, index) => {
                return (
                    <div key={index} style={{ padding: 10 }} >
                        <img
                            style={{ height: 60, width: 70 }}
                            alt={result.alt_description}
                            src={result.urls.regular}
                            onClick={e => this.openModal(e, result, index)}
                        />
                    </div>
                );
            }
        );
    }

    render() {
        return (
            <div>
                {this.displayImagegallery()}
                {this.state.openmodal && this.modalPanelDisplay()}
            </div>
        );
    }
}

export default SearchResults;
