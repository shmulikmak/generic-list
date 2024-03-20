import { ListItem } from "./generalTypes";

export interface Photo extends ListItem {
  title: string;
  url: string;
  thumbnailUrl: string;
}
