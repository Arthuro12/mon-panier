import axios, { type AxiosResponse } from 'axios'
import { EntityNotFoundError } from '@/errors/EntityNotFoundError'


export const ApiClient = {
  postRequest: async <T, U>(uri: string, data: T): Promise<U> => {
    try {
      return (await axios.post<T, AxiosResponse<U>>(`${import.meta.env.VITE_API_URL}${uri}`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })).data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`ApiClient Error HTTP ${error.status} : ${(JSON.stringify(error.response?.data, null, 2) || JSON.stringify(error.message, null, 2))}`);
      }
      throw new Error("unexpected error : " + JSON.stringify(error));
    }
  },
  getRequest: async <T>(uri: string): Promise<T> => {
    try {
      return (await axios.get<T, AxiosResponse<T>>(`${import.meta.env.VITE_API_URL}${uri}`, {
        headers: {
          Accept: 'application/json'
        }
      })).data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.status === 404) {
          throw new EntityNotFoundError(error.response?.data || error.message);
        }
        throw new Error(`ApiClient Error HTTP ${error.status} : ${(JSON.stringify(JSON.parse(error.response?.data)) || error.message)}`);
      }
      throw new Error("unexpected error : " + JSON.stringify(error));
    }
  },
  putRequest: async <T, U>(uri: string, data: T): Promise<U> => {
    return (await axios.put<T, AxiosResponse<U>>(`${import.meta.env.VITE_API_URL}${uri}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })).data;
  },
  deleteRequest: async <T>(uri: string): Promise<T> => {
    return (await axios.delete<T, AxiosResponse<T>>(`${import.meta.env.VITE_API_URL}${uri}`, {
      headers: {
        Accept: 'application/json',
      }
    })).data;
  },
  uploadFile: async (uri: string, formData: FormData): Promise<void> => {
    await axios.post(`${import.meta.env.VITE_API_URL}${uri}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  },
  patchRequest: async <T, U>(uri: string, data: T): Promise<U> => {
    return (await axios.patch<T, AxiosResponse<U>>(`${import.meta.env.VITE_API_URL}${uri}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })).data;
  }
}
