import tuits from './data/tuits.json';

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'delete-tuit':
            return state
                .filter(tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "liked": false,
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "tuit": action.tuit,
                "avatarIcon": "/images/react-logo.jpg",
                "mainImage": "/images/doom_banner_alt.jpg",
                "stats": {
                    "replies": 111,
                    "retuits": 222,
                    "likes": 333
                },
            };
            return ([
                    tuit,
                    ...state,
                ]
            );
        default:
            return tuits;
    }

};

export default tuitsReducer;
