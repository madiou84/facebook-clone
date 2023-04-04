import { StoryItemProps } from "./props";
import StoryItem from "./StoryItem";

export default function StoryForm({ story, className }: StoryItemProps) {
  return <StoryItem className={className} story={story} />;
}
