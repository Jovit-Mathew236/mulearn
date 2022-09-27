import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<div className="navbar navbar-expand-lg navbar-light ">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img
							className="mulearn-logo"
							src="//assets/navbar/µLearn.png"
							alt="Mulearn"
						/>
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						class="navbar-styles collapse navbar-collapse"
						id="navbarNavDropdown"
					>
						<div class="navbar-dropdowns">
							<ul class="navbar-nav">
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="/#"
										target="_blank"
										rel="noopener noreferrer"
										id="navbarDropdownMenuLink"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										About
									</a>
									<ul
										class="dropdown-menu"
										aria-labelledby="navbarDropdownMenuLink"
									>
										<li>
											<a class="dropdown-item" href="/team">
												Our Team
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="/company-partners">
												Company Partners
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="/community-partners">
												Community Partners
											</a>
										</li>
									</ul>
								</li>

								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="/#"
										id="navbarDropdownMenuLink"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Program
									</a>
									<ul
										class="dropdown-menu"
										aria-labelledby="navbarDropdownMenuLink"
									>
										<li>
											<a class="dropdown-item" href="https://yip.mulearn.org">
												YIP
											</a>
										</li>

										<li>
											<a class="dropdown-item" href="/artofteaching">
												Art of teaching
											</a>
										</li>

										<li>
											<a
												class="dropdown-item"
												href="https://foundation.mulearn.org"
											>
												Foundation Program
											</a>
										</li>
									</ul>
								</li>

								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="/#"
										id="navbarDropdownMenuLink"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Events
									</a>
									<ul
										class="dropdown-menu"
										aria-labelledby="navbarDropdownMenuLink"
									>
										<li>
											<a class="dropdown-item" href="/calendar">
												Global Calendar
											</a>
										</li>

										<li>
											<a class="dropdown-item" href="/announcements">
												µ-Announcements
											</a>
										</li>

										<li>
											<a class="dropdown-item" href="/isr">
												Inspiration Station
											</a>
										</li>
									</ul>
								</li>

								<li class="nav-item dropdown">
									<a class="nav-link" href="/careers">
										Careers
									</a>
								</li>

								<li class="nav-item dropdown">
									<a class="nav-link" href="https://learn.mulearn.org/">
										Interest Groups
									</a>
								</li>
							</ul>
						</div>

						<div className="nav-barbtn">
							<a
								href="https://discord.com/invite/Jt7sv3chZP"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="join-discord">Join Discord Server</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
