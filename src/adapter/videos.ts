import { api, apiKey } from './api';

export const fetchAllVideos = async () => {
  try {
    const resp = await api(`/videos?api_key=${apiKey}&page=3`);
    const { data } = resp;
    return data;
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data.message);
    }
  }
};

export const getVideoById = async (id: string) => {
  try {
    const resp = await api(`/videos/${id}?api_key=${apiKey}`);
    const { data } = resp;
    return data;
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
    }
  }
};
