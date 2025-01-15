export interface Writer {
    id: number;
    name: string;
    imageUrl: string;
    latestPost: {
      id: number;
      title: string;
    };
  }
