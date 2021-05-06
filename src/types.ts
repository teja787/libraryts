export type IBook = {
  bookName: string;
  authorName: string;
  id?: number;
  availableCount: number;
  discription: string;
  rentedBookCount: number;
  //   rentInfo: IRentInfo[];
  rentInfo: Array<IRentInfo>;
};

type IRentInfo = {
  count: number;
  date: string;
};
