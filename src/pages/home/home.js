import { Link } from "react-router-dom";

export default function Home () {
    return (
        <div>
            <h1>This is HomePage</h1>
            <Link to="/product">Product</Link>
            <br></br>
            <Link to="/create">CreateProduct</Link>
        </div>
    )
}