export default function About({image,about}) {

    const imgsrc = "https://via.placeholder.com/215" + image;
   
    return (
        <aside>
            <img src={imgsrc}  alt="blog logo"/>
            <p>{about}</p>
        </aside>
    );
}