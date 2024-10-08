export interface INew {
  description: string;
  date: string;
  image: string;
}

export interface IGallery {
  color?: string;
  content?: React.ComponentType;
  img?: string;
}
export interface IElement {
  color: string;
  icon: React.ComponentType;
  text: string;
}
export interface IRegion {
  name: string,
  responsible_for: {
    image: string,
    fullname: string,
    profession: string
  }
}