import { api, apiKey } from './api';

export const fetchAllVideos = async () => {
  try {
    const resp = await api(`/videos?api_key=${apiKey}`);
    const { data } = resp;
    return data;
  } catch (error: any) {
    if (error.response) {
      alert(error.response.data);
    }
  }
};
