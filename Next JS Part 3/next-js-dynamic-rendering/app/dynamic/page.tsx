import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('../client/page'), {})

export default function Dynamic() {
    return (
        <div>
            <h1>HI Aku merupakan component Dynamic</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente itaque quibusdam libero veritatis doloribus repellendus iusto tenetur ratione rem perspiciatis architecto, labore voluptatum a asperiores voluptas! Et, nihil autem.</p>
            <DynamicComponent/>
        </div>
    )
}