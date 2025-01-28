import React from 'react'

export default function Contact() {
  return (
    <section className="py-5">
	<div className="container">
		<div className="row align-items-center gx-4">
			<div className="col-md-5">
				<div className="ms-md-2 ms-lg-5"><img className="img-fluid rounded-3" src="istockphoto-978897892-612x612.jpg"/>
                {/* <img src="img_avatar.png" alt="Avatar" style={{ width: '100%' }} /> */}
                </div>
			</div>
			<div className="col-md-6 offset-md-1">
				<div className="ms-md-2 ms-lg-5">
					<span className="text-muted">Our Story</span>
					<h2 className="display-5 fw-bold">About Us</h2>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
					<p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}
