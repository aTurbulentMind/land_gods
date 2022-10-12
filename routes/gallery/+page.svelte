<body>
	<h1>Gallery</h1>

	<div class="gallery">
		<picture>
			<img src="img/two.jpg" alt="" />
		</picture>

		<picture> <img src="img/three.jpg" alt="" /> </picture>

		<picture>
			<img src="img/four.jpg" alt="" />
			<!--	<p>a bunch of nice words</p>-->
		</picture>

		<picture> <img src="img/five.jpg" alt="" /> </picture>

		<picture> <img src="img/six.jpg" alt="" /> </picture>

		<picture> <img src="img/seven.jpg" alt="" /> </picture>
	</div>
</body>

<style lang="scss">
	@import '../src/lib/basecamp';

	body {
		.gallery {
			display: grid;
			grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 35px;
			align-items: center;
			margin: 0 $marg;
			margin-bottom: 10%;

			@media (min-width: 620px) {
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				gap: $pad_xxl;
			}

			@media (min-width: 1280px) {
				grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
				gap: $pad_xxl;
			}
		}
	}
</style>
