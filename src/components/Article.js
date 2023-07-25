export default function Article({title,date,preview,minutes}){
// Calculate minutes to read
const minutesToRead = Math.ceil(preview.split(' ').length / 200); // Assuming 200 words per minute

// Function to generate emojis for minutes to read
const generateEmojis = (emoji, count) => {
  let emojis = '';
  for (let i = 0; i < count; i++) {
    emojis += emoji;
  }
  return emojis;
};

// Generate emojis based on reading time
const emojis = minutesToRead < 30 ? generateEmojis('☕️', Math.ceil(minutesToRead / 5)) : generateEmojis('🍱', Math.ceil(minutesToRead / 10));

    return (
        <article>
            <h3>{title}</h3>
            <small>{date || "January 1, 1970"}</small>
            <p>{emojis} {minutesToRead} min read</p>
            <p>{preview}</p>
        </article>
    );
}