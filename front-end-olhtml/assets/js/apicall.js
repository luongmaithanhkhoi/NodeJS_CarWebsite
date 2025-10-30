
			document.addEventListener("DOMContentLoaded", function() {
				// Gọi API khi trang đã được load
				fetch('http://localhost:3000/data/allcars')
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok ' + response.statusText);
						}
						return response.json();
					})
					.then(data => {
						const container = document.querySelector(".featured-cars-content .row");

						data.forEach(car => {
							const carHTML = `
								<div class="col-lg-3 col-md-4 col-sm-6">
									<div class="single-featured-cars">
										<div class="featured-img-box">
											<div class="featured-cars-img">
												<img src="assets/images/carimg/${car.image}" alt="${car.name}"> 
											</div>
											<div class="featured-model-info">
												<p>
													model: ${car.year}
													<span class="featured-mi-span">3100 mi</span> 
													<span class="featured-hp-span">240HP</span>
													automatic
												</p>
											</div>
										</div>
										<div class="featured-cars-txt">
											<h2 id="${car._id}"><a href="#">${car.name}</a></h2> 
											<h3>${car.price}$</h3> 
											<p>${car.description}</p>
										</div>
									</div>
								</div>`;
							
							container.insertAdjacentHTML("beforeend", carHTML);
						});
					})
					.catch(error => {
						console.error('Có lỗi xảy ra khi gọi API:', error);
					});
	});
		
    function displayCars(cars) {
        const container = document.querySelector(".featured-cars-content .row");
    
        container.innerHTML = '';
    
        cars.forEach(car => {
            const carHTML = `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-featured-cars">
                        <div class="featured-img-box">
                            <div class="featured-cars-img">
                                <img src="assets/images/carimg/${car.image}" alt="${car.name}"> 
                            </div>
                            <div class="featured-model-info">
                                <p>
                                    model: ${car.year}
                                    <span class="featured-mi-span">3100 mi</span> 
                                    <span class="featured-hp-span">240HP</span>
                                    automatic
                                </p>
                            </div>
                        </div>
                        <div class="featured-cars-txt">
                            <h2 id="${car._id}"><a href="#">${car.name}</a></h2> 
                            <h3>${car.price}$</h3> 
                            <p>${car.description}</p>
                        </div>
                    </div>
                </div>`;
            
            // Chèn HTML của xe vào container
            container.insertAdjacentHTML("beforeend", carHTML);
        });
    }
    document.querySelector(".model-search-btn").addEventListener("click", function() {
        const year = document.querySelector("select[name='year']").value;
        const style = document.querySelector("select[name='style']").value;
        const brand = document.querySelector("select[name='brand']").value;
        const color = document.querySelector("select[name='color']").value;
    
        // Tạo query string chỉ với các tiêu chí có giá trị
        const query = new URLSearchParams();
    
        if (year !== 'default') query.append('year', year);
        if (style !== 'default') query.append('style', style);
        if (brand !== 'default') query.append('brand', brand);
        if (color !== 'default') query.append('color', color);
    
        // Gọi API với query string đã tạo
        fetch(`http://localhost:3000/data/cars?${query.toString()}`)
            .then(response => response.json())
            .then(filteredCars => {
                displayCars(filteredCars); 

                document.querySelector(".featured-cars-content").scrollIntoView({
                    behavior: "smooth" 
                });
            })
            .catch(error => console.error('Error:', error));
    });
    
        