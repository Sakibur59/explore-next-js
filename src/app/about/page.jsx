import Image from "next/image";


const AboutPage= () => {
    return (
        <div>
            <Image src="/sunlit-blooming-flower-stockcake.webp" width="500" height='300' alt="flower pic"></Image>
            <Image src="/flower.jpg" width="500" height='300' alt="flower pic"></Image>
            <h1>This is about</h1>
        </div>
    );
};

export default AboutPage;