import axiosInstance from '../../../helpers/axios';

export default (history) => {
    axiosInstance(history)
        .get("Customers/getList")
        .then((res) => console.log('res.data', res.data))
        .catch((err) => console.log('err', err));
};