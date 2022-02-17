import { db } from "../../firebase"
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"

// Actions
const LOAD = "dictionary/LOAD"
const CREATE= "dictionary/CREATE"
// const UPDATE = "dictionary/UPDATE"
// const DELETE = "dictionary/DELETE"

// Initial
const initialState = {
    is_loaded: false,
    list:[]
}

// Action Creators -> dispatch로 호출되는 부분
export function loadWord(word_list) {
    return { type: LOAD, word_list };
}
export function createWord(word) {
    return {type: CREATE, word}
}
// export const updateDictionary = (dictionary) => {
//     return {type: UPDATE, dictionary}
// };
// export const deleteDictionary = (dictionary) => {
//     return {type: DELETE, dictionary}
// };


// middlewares
export const loadWordsFB = () => {
    return async function(dispatch) {
        const word_data = await getDocs(collection(db, "wordbook"));
        
        let word_list = [];

        word_data.forEach((b) => {
            word_list.push({id: b.id, ...b.data()});
        });

        dispatch(loadWord(word_list));
    }
}

export const addWordsFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "wordbook"), word);
        const _word = await getDoc(docRef);
        const word_data = {id: _word.id, ..._word.data()};

        dispatch(createWord(word_data));
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dictionary/LOAD": {
            return {list: action.word_list, is_loaded: true};
        }
        
        case "dictionary/CREATE": {
            const newstatelist = [...state.list, action.word];
            return {list: newstatelist, is_loaded: true};
        }

      default:
        return state;
    }
  }
