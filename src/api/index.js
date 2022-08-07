import axios from 'axios';

export const getListData = (hitParams) => {
    return axios.get(
        `https://randomuser.me/api`,
        {
            params: {
                ...hitParams,
                results: 10
            }
        }
    )
}