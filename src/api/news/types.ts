export const enum NewsType {
  announcements,
  updates,
  events,
  gmNotes,
  shop
}

export type ApiNewsMeta = {
  id: number;
  createdAt: number;
};

export type ApiNewsContent = string;
