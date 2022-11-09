import "./style.css";

const Article = ({ title, body, extraButtons }) => (
    <article className="article">
        <h2 className="article__header">
            {title}
            {extraButtons}
        </h2>

        {body}
    </article>
);

export default Article;