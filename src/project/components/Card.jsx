// Enkel, återanvändbar blog card-komponent
export default function Card({
    date = "August 17, 2025",
    title = "Safe and Secure: The Importance of Choosing the Right Storage",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem...",
    link = "#"
}) {
    return (
        <div className="card">
            <img className="card_img" src="/src/project/interface/assets/Card_Img.svg" alt="" />

            <div className="date">
                <img src="/src/project/interface/ui/Calendar.svg" alt="" />
                <p className="body-text-4">
                    {date}
                </p>
            </div>

            <h4>{title}</h4>

            <p className="body-text">
                {text}
            </p>

            <a className="read_more body-text" href={link}>
                Read more →
            </a>
        </div>
    );
}
