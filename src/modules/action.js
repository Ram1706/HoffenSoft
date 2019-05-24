const Types = {
    SEARCH_IMAGE:"Search_Image"
};


const serachImageDetails = images =>({
    type:Types.SEARCH_IMAGE,
    payload:images
});


export  default {Types,serachImageDetails};