import profileData from './data/profileData.json';

const profileReducer = (state = profileData, action) => {
    switch(action.type) {
        case "save-profile-data":
            return {
                ...state,
                name: action.name,
                bio: action.bio,
                location: action.location,
                website: action.website,
                dob: action.dob
            }
        default:
            return (state);
    }

};

export default profileReducer;