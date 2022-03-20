export class GuideModel {
  title?: string;
  guideContent: {
    title: string;
    content: string;
    iconUrl: string;
  }[];
  carousel: {
    imageUrl: string;
  }[];
  products: {
    title: string;
    imageUrl: string;
  }[];
}
