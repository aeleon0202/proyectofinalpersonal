import { Link } from "react-router-dom"
import './Menu.css'

export function Menu(){

    return(<nav class="navbar navbar-expand-lg menu navbar-dark">
                <div class="container-fluid">
                <Link class="navbar-brand" to="/">LinkinPark</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="historia">Historia</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="integrantes">Integrantes</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="music">Music</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="albums">Albums</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="mercancia">Mercancia</Link>
                    </li>
                    
                    </ul>
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>)
}