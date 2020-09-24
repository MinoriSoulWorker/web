const isDevelopment = process.env.NODE_ENV !== 'production';

export const apiUrl = isDevelopment ? 'http://localhost:5116' : 'https://minorisoulworker.github.io/web-api';

export const apiRequest = (url: string, opts: RequestInit = {}) => {
  return fetch(`${apiUrl}/${url}`, opts).then(response => {
    if (response.status !== 200) { throw response; }
    return response;
  });
};
