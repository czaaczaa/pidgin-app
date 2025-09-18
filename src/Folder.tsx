type Folder = {
  id: string; //id for each folder
  name: string; //folder title
  subfolders: Folder[]; //array of subfolders inside this folder
  parentId: string | null;
};



export type { Folder };


