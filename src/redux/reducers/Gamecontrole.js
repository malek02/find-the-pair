
import data from "../../data"


const INITIAL_STATE = {
    ListCards: [],
    boardSize: 10,
    loadingsize: true,
    tries: 0,
    score: 0,
    testimage: [],
}

const gameControle = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'SET_CURRENT_CARD':

            return {
                ...state, ListCards: action.getImage(state.boardSize, data)
            }
        case "CHANGE_BOARD_SIZE":
            return {
                ...state,
                boardSize: action.payload,
                loadingsize: true,tries: 0, score: 0, testimage: []
            };
        case "RESTART_IMAGES":
            return {
                ...state,
                 tries: 0, score: 0, testimage: []
            }
        case "SHOW_ALL_IMAGES":
            const show = state.ListCards.map(img => {
                const hideimages = img;
                hideimages.activeimg = false;
                return hideimages
            })
            return {
                ...state, ListCards: show

            }
        case "HIDDE_ALL_IMAGES":
            const hideimages = state.ListCards.map(img => {
                
                return {...img,activeimg:false}
            })
            return {
                ...state,
                ListCards: hideimages, tries: state.tries + 1,testimage: []
            }

        case "SELECT_CARD":
            const activedCard = state.ListCards.find(image =>
                image.id == action.payload);
            


            if (state.testimage.length >= 2 || activedCard.activeimg) {
                return state
            }

            const newListCards = state.ListCards.map(card => {
                const newcard = card
                if (card.id == action.payload) {
                    newcard.activeimg = true
                }
                return newcard
            })


            return {
                ...state,
                testimage: [...state.testimage, activedCard], ListCards: newListCards
            }
        case "RIGHT_PAIR_CARD":
            
            const testCards = state.ListCards.map(card => {
                
               const check= state.testimage.includes(card)

              
                if (check) {
                   
                   return {...card,somecard:1}

                } else return card
            })


    
    
 
            return {
                ...state,
                
                tries: state.tries + 1,
                score: state.score+1,
                testimage: [],
                ListCards: testCards
            }
        default:
            return state;
    }
};

export default gameControle
