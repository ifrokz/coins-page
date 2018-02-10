const defaultState = {language: null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return action.language
        default: 
            return defaultState;
    };
};