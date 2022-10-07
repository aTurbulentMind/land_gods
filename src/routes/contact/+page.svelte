<body>
	<h1>Contact</h1>

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

	@media (min-width: 750px) {
	}
</style>
