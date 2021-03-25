import {useRecipes} from "../lib/client/useRecipes";

const Index = () => {
    const connection = useRecipes();
    if (connection) {
        return <div>
            <ul>
                {connection.recipes.map((value) => <li>{value.title}</li>)}
            </ul>
        </div>;
    } else {
        return <div>Loading...</div>
    }
};

export default Index;
