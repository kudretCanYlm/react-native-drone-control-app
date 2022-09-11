import {
    GET_ALL,
    GET_BY_ID
} from "../actions/PersonActions"
import { legacy_createStore as createStore, combineReducers } from "redux"
import soft from "../../media/images/soft.jpg";


const reso = [
    {
        id: 0,
        name: "Test Name",
        img: soft,
        subTitle: "Test title ",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        details: {
            age: 10,
            sex:"Test",
            school:"Test",
            dep:"Test",
            class:2
        }
    },
    {
        id: 1,
        name: "Test Name",
        img: soft,
        subTitle: "Test title ",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        details: {
            age: 10,
            sex:"Test",
            school:"Test",
            dep:"Test",
            class:2
        }
    },
    {
        id: 2,
        name: "Test Name",
        img: soft,
        subTitle: "Test title ",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        details: {
            age: 10,
            sex:"Test",
            school:"Test",
            dep:"Test",
            class:2
        }
    },
    {
        id: 3,
        name: "Test Name",
        img: soft,
        subTitle: "Test title ",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        details: {
            age: 10,
            sex:"Test",
            school:"Test",
            dep:"Test",
            class:2
        }
    },
    {
        id: 4,
        name: "Test Name",
        img: soft,
        subTitle: "Test title ",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        details: {
            age: 10,
            sex:"Test",
            school:"Test",
            dep:"Test",
            class:2
        }
    },
    
]


const reducerFn = (state = reso, action) => {

    switch (action.type) {
        case GET_ALL:
            return state;


        case GET_BY_ID:
            return state.filter(x => x.id == action.id)
            break;

        default:
            return state;
            break;
    }
}

const Stores = combineReducers({
    red1: reducerFn,
})

const PersonStore = createStore(reducerFn)

export default PersonStore;