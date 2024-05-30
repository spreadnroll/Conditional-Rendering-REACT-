import { Link, Outlet } from "react-router-dom";

export function Catalogue() {
    return (
        <div>
            <h2>All products:</h2>

            <ul>
                <li><Link to="/1">Product 1</Link></li>
                <li><Link to="/2">Product 2</Link></li>
                <li><Link to="/3">Product 3</Link></li>
                <li><Link to="/4">Product 4</Link></li>
            </ul>

            <hr />

            <Outlet />
        </div>
    )
}
