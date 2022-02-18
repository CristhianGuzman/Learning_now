
function Mis_cursos() {

    return (


        <>






            <div class="container-fluid">
                <div class="row flex-nowrap">

                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link px-0">
                                        <span class="ms-1 d-none d-sm-inline">Mis cursos</span>
                                    </a>
                                </li>
                                <li class='d-flex'>
                                    <i class="fa-solid fa-user-pen"></i>
                                    <a href="#" class="nav-link px-0 bg-success">
                                        <span class="ms-1 d-none d-sm-inline">Gestión usuarios</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>

                        <div class='col-7'>

                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">Navbar</a>
                                    <div class="collapse navbar-collapse">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="#">Nuevo curso</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Mis cursos</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <nav class="navbar navbar-light bg-light">
                                <div class="container-fluid">

                                    <form class="d-flex justify-content-end">
                                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </nav>

                            <table class="table table-hover">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Cedula</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Email</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>










    )
}


export default Mis_cursos