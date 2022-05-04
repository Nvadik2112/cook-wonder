export class GuideModel {
  title?: string;
  guideContent: {
    _id: string;
    title: string;
    content: string;
    iconUrl: string;
  }[];
  carousel: {
    _id: string;
    imageUrl: string;
  }[];
  products: {
    _id: string;
    title: string;
    imageUrl: string;
  }[];
}
