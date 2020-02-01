const initState = {
    projects: [
        { id: '1', title: 'help me find a peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all stars', content: 'blah blah' },
        { id: '3', title: 'egg hunt with yoshi', content: 'blah blah' },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created proj CREATE_PROJECT', action.project)
            break;
        default:
            console.log('other')

    }
    return state;
}

export default projectReducer;