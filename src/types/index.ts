export type SidbarProps = {
  srcXl?: string;
  src: string;
  title: string;
};

export type ConversationUserProps = {
  src: string;
  name: string;
  className: string;
};

export type UsersProps = {
  name: string;
  src: string;
};

export type PostsProps = {
  id: number;
  content: string;
  photos?: string[];
  videos?: string[];
  user: {
    name: string;
    imgProfil: string;
  };
};

export type CreateFormActionProps = {
  iconSize: string;
  iconPosition: string;
  text: string;
  icon: JSX.Element;
  backgroundUrl: string;
};

export type FormWhatWouldYouSayProps = {
  [key: string]: any;
  styleContainer: string;
};

export type ConversationModal = {
  isOpen: boolean;
  data: { name: string; src: string };
};

export type NavigationIconType = {
  isActive: boolean;
  notificationCount: number | null;
  icon: JSX.Element;
};
