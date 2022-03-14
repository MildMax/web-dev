const active = "home"

const activeReducer = (state = active, action) => {
    switch (action.type) {
        case 'update-active':
            return (action.active);
        default:
            return(state);
    }

};

export default activeReducer;
