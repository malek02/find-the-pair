import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';







export const setCard = () => dispatch => {

    const getImage = (x, data) => {
        let imagedata = _.shuffle(data);
        imagedata = imagedata.slice(0, x);
        imagedata = [...imagedata, ...imagedata]
        imagedata = _.shuffle(imagedata)
        imagedata = imagedata.map((image, index) => {
            let cards = { image, id: uuidv4(), somecard: 0, activeimg: true }
            return cards
        })

        return imagedata
    }
    dispatch({


        type: 'SET_CURRENT_CARD',
        getImage

    });
    setTimeout(()=>dispatch(showAllimage()),2000)

}
export const rightPair = () => dispatch => {

    dispatch({
        type: "RIGHT_PAIR_CARD"
        
    })

}
export const selectCard = (imageid) => dispatch => {

    dispatch({
        type: "SELECT_CARD",
        payload: imageid
    })
   

}
export const changeBoardSize = (nubSize) => dispatch => {
    dispatch({
        type: "CHANGE_BOARD_SIZE",
        payload: nubSize
    });
    dispatch(setCard())
}
export const restarImage = () => dispatch => {

    dispatch({
        type: "RESTART_IMAGES",
    });

    dispatch(setCard())

}

export const hideAllimg = () => dispatch => {
    dispatch({
        type: "HIDDE_ALL_IMAGES",

    });
}
export const showAllimage = () => dispatch => {
    dispatch({
        type: "SHOW_ALL_IMAGES",

    });
}