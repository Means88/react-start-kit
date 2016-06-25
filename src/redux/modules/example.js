const CLICK = 'redux/example/CLICK';

export function click() {
    return {
        type: CLICK
    }
}

const initState = {
    clicked: false
};

export default function reducer(state = initState, action = {} ) {
    switch (action.type) {
        case CLICK:
            return { ...state, clicked: true };
        default:
            return state;
    }
}