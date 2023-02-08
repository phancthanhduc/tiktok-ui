import * as httpRequest from '~/utils/httpRequest';
export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get(`https://tiktok.fullstack.edu.vn/api/users/suggested`, {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
