function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = () => {
    let symbol = minutes < 30 ? "☕️" : "🍱";
    let divisor = minutes < 30 ? 5 : 10;
    let count = Math.ceil(minutes / divisor);
    return symbol.repeat(count) + ` ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{renderReadTime()}</p>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
