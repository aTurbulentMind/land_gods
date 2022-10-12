<body>
	<h1>Contact:</h1>

	<div class="follow">
		<a href="https://twitter.com/LanternLightDev/">Twitter</a>
		<a href="https://www.instagram.com/lanternlightdevelopment/">Instagram</a>
		<a href="https://www.facebook.com/profile.php?id=100078803221612/">Facebook</a>
	</div>

	<container>
		<form action="https://formsubmit.co/joelkrivers@gmail.com" method="POST">
			<wrapper>
				<box>
					<input type="text" name="name" id="name" required />
					<label for="fname">First and Last Name</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="email" id="email" required />
					<input
						type="hidden"
						name="_next"
						value="https://www.lanternlightdevelopment.com/contact"
					/>
					<label for="email">Email</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="tel" id="tel" required />
					<label for="tel">Preffered communication</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="comp" id="comp" required />
					<label for="comp">Company/Entity Name</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<textarea id="mes" required />
					<label for="mes">Words here and stuff...</label>
				</box>
			</wrapper>

			<button type="submit">Submit</button>
		</form>
	</container>
</body>

<style lang="scss">
	@import '../src/lib/basecamp';

	* {
		box-sizing: border-box;
	}

	.follow {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: $textTwo;

		a {
			position: relative;
			padding: 10px 30px;
			margin: 6% 2%;
			color: $textMain;
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 2px;
			font-size: 3vw;
			overflow: hidden;
			transition: 0.3s;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
		}

		a:nth-child(1) {
			filter: hue-rotate(215deg);
		}

		a:nth-child(3) {
			filter: hue-rotate(270deg);
		}

		a:hover {
			background: #e42886;
			color: rgb(201, 201, 201);
			box-shadow: 0 0 50px #e42886;
			transition-delay: 0.2s;
		}

		a:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 10px;
			height: 10px;
			border-top: 2px solid rgb(17, 17, 1);
			border-left: 2px solid rgb(17, 17, 1);
			transition: 0.3s;
			transition-delay: 0.2s;
		}

		a:hover:before {
			width: 100%;
			height: 100%;
			border-top: 2px solid rgb(201, 201, 201);
			border-left: 2px solid rgb(201, 201, 201);
			transition-delay: 0;
		}

		a:after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 10px;
			height: 10px;
			border-bottom: 2px solid rgb(17, 17, 1);
			border-right: 2px solid rgb(17, 17, 1);
			transition: 0.3s;
			transition-delay: 0;
		}

		a:hover:after {
			width: 100%;
			height: 100%;
			border-bottom: 2px solid rgb(201, 201, 201);
			border-right: 2px solid rgb(201, 201, 201);
			transition-delay: 0.2s;
		}
	}

	@media (min-width: 750px) {
	}

	@media (min-width: 991px) {
		container {
			label {
				font-size: 1.5vw;
			}

			form {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
				width: 85%;
			}
		}
	}
</style>
