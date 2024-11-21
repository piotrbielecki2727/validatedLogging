import { GET_USERS } from './constants';
import apiClient from '../../axios/axiosConfig';
import { User } from '../../types';

export const getUsers = async (
  abortController: AbortController
): Promise<User[]> => {
  try {
    const response = await apiClient.get(GET_USERS, {
      signal: abortController.signal,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
