export interface StoryItemProps {
  className?: string;
  story: {
    name: string;
    id: number | null;
    storyImage?: string;
    profileImg: string | null;
  };
}
