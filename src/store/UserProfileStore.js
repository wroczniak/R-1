/**
 * Created by wojtek on 24.05.16.
 */

import Actions from './../action/Actions';
import Reflux from 'reflux';


var UserProfileStore = Reflux.createStore({

    init: function() {
        this.listenTo(Actions.updateProfile, this.changeProfile);
        this.userProfile = {firstName: '', lastName: ''};
    },

    changeProfile: function(firstName, lastName) {
        this.userProfile.firstName = firstName;
        this.userProfile.lastName = lastName;


        this.trigger(this.userProfile);
    }

});

export default UserProfileStore;


