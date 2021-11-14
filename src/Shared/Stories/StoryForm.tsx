import StoryItem from './StoryItem';

export default function StoryForm({ story, className }: any) {
    return (
        <div className={className}>
            <StoryItem
                story={story}
            />
        </div>
    )
}