import * as actionLabels from '../../actionLabels';

export const getCurrentChannelRequest = () => ({
    type: actionLabels.GET_CURRENT_CHANNEL_REQUEST,
});

export const getCurrentChannelRequestSuccess = (payload) => ({
    type: actionLabels.GET_CURRENT_CHANNEL_REQUEST_SUCCESS,
    payload
});
