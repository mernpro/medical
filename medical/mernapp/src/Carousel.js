import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div class="carousel-caption" style={{zIndex:"10"}}>
                    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success text-black bg-success" type="submit">Search</button>
    </form>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://th.bing.com/th/id/OIP.rTsKV26Tcj4GB60_v7aYmwHaE7?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100"  alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.FKykvAQukm51q0p2CUHL9AHaEc?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src=""

                            className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
