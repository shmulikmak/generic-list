import { ListItem } from "./generalTypes";

export interface Photo extends ListItem {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
