import * as actionLabels from '../../actionLabels';

export const getCurrentChannelRequest = () => ({
    type: actionLabels.GET_CURRENT_CHANNEL_REQUEST,
});

export const getCurrentChannelRequestSuccess = (payload) => ({
    type: actionLabels.GET_CURRENT_CHANNEL_REQUEST_SUCCESS,
    payload
});

export const getChannelListRequest = () => ({
    type: actionLabels.GET_CHANNEL_LIST_REQUEST,
});

export const getChannelListRequestSuccess = (payload) => ({
    type: actionLabels.GET_CHANNEL_LIST_REQUEST_SUCCESS,
    payload
});

export const changeChannelRequest = (payload) => ({
    type: actionLabels.CHANGE_CHANNEL_REQUEST,
    payload
});

export const changeChannelRequestSuccess = (payload) => ({
    type: actionLabels.CHANGE_CHANNEL_REQUEST_SUCCESS,
    payload
});

