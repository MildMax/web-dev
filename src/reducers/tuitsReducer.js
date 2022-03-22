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
                topic: "Web Development",
                postedBy: {
                    // placed username in quotes per assignment spec
                    "username": "ReactJS"
                },
                liked: false,
                verified: false,
                handle: "ReactJS",
                time: "2h",
                tuit: action.tuit,
                // placed avatar-image in quotes to prevent variable naming error
                avatarImage: "/images/doom-guy-alt.png",
                attachments: {
                    image: "/images/doom_banner_alt.jpg"
                },
                stats: {
                    replies: 111,
                    retuits: 222,
                    likes: 333
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
