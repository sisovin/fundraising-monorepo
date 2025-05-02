export type Donation = {
  id: number;
  amount: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ImpactStory = {
  id: number;
  title: string;
  content: string;
};
