export type Card = {
  id: string;
  name: string;

  image_uris?: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  card_faces: Card[];
};
