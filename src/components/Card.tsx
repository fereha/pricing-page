import Button from "./Button";
import Badge from "./Badge";

type CardProps = {
    title: string;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
};

function Card({
    title,
    price,
    description,
    features,
    popular = false,
}: CardProps) {
    return (
        <article className={`pricing-card ${popular ? "popular" : ""}`}>
            {popular && <Badge text="Most Popular" />}

            <h2>{title}</h2>

            <p className="description">{description}</p>

            <div className="price">
                <span>${price}</span>
                <small>/month</small>
            </div>

            <ul>
                {features.map((feature: string) => (
                    <li key={feature}>✓ {feature}</li>
                ))}
            </ul>

            <Button
                text={`Choose ${title}`}
                variant={popular ? "primary" : "secondary"}
            />
        </article>
    );
}

export default Card;