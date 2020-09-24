import { apiRequest } from '../core';
import { ApiNewsContent, ApiNewsMeta, NewsType } from './types';

export const apiNewsMeta = async ({ type }: { type: NewsType; }): Promise<ApiNewsMeta[]> => {
  return apiRequest(`news/meta/${type}.json`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  }).then(response => response.json());
};

export const apiNewsContent = async ({ id, lang }: { id: number; lang: string; }): Promise<ApiNewsContent> => {
  return apiRequest(`news/content/${id}/${lang}.md`, {
    headers: { "Content-Type": "application/text" },
    method: "GET",
  }).then(response => response.text());
};
