import React from "react";

import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

describe("Test over <GifItem />", () => {
	const id = "id";
	const height = "100";
	const width = "100";
	const imgSrc =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEXgCB3///v6z7zrbFPoXUbkOi7ymX7mTDrtfGH86Nz2tZ3vim//9OziKCXiLSfhFx/wknf3vqj71sblQzT5yrXpYkrnTzz5xbD73MzrblXnVED3vaf97eP/+PL84tTug2jlPzHzpIn1rpXzn4T1sJfseF3zoofvjnPaihFaAAAErklEQVR4nO2a7ZaqIBhGxczK0kprcuxrbKYz93+HR5mxeBEEyrU6rvPsn4jIVsCXD88DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjfeBu/ugY9EK/8BWOH3fTVFXmSIme/7JNX10XLMiaosgQHdsPnJklE4GkZSVpJTymu4WW98f3N+ut7JDfSD58wUdRh5Kv4FHMwkZmijOQk5ojqpDG5ifGKBSTJF0vYro/0htnlTbw+oVcDRSX+MBVidc0inyTHMXAVCXKmwC+cRDZKESa0dLNISu8t3UTiL3UVqoKWDiIHdRlCVrOI1Cw2TiKxr/NgbNeYmEXG6hLY3EFkK92bOons9R7VGGgtMlIXwC4OImPpi/guItcuD8autiIrTQFCVzQ3rRO9N3IQWc66RRaJpchaV4CLiNRbpw4i790ejIWWItoXch+2zCKTRauGtiI7k8jJTiTWFnDPaxYhDfTw5iCylLqXgthKJFDfXHF2EfFWtwqdfh5iKSJVUEVgJTLX3l86iXjbHVc5XDLPRUQeNNPpVW5sUyuRSCuycROp4rpzuJreQsrHRPL6Byj9WL6tRJRBjlRhSxHKYyI8Ipb+r6GNSFdfu71cC5HdQmT0sMi8nc1OpKuv3cJoCxEaLr1AZNohcn2ByPRRkbJD5Da3GoJIRwTN1n2KpPW0k44svYqQ0OJEw5VTnyIK+hShT4toAHlsJjUDEKGh51wK6bPhiNBFg0L6E42GI0LDmjihuZuFpwGIkN6dy5OTaDAi9AtE8nQxHYwI7RNneQLfzHZfLDI3i3yTi0Ur7kyGIkID/6Xc1prs/74IWcXJ6xTa288DEaELD191Eu3t5UBECnKNv37a23f9iaS7Crpe3p/ImVzj8yja22f9ifAogab1J3Ih17JxBf1IbDkMEWlXQ8FkECIWi3zvPGMSiBSegpeKZEaP3wVkC/oS4XGqtK5tFDFsTNREniUPi0ixxKKaA8VSk7+aRNS7oIS0VeO+ReT1qONuLe8FqtZ+L/MfeFPU7IKK3DdJzlGa+9G5reAiQmvDRfS7ATcSlfAvfOTR7IK2C6kaQPO1U2VXf0JE3uxqo9wfEUXMMQRr2uL1vthyeO9ZpDRVoTSJ6HZBCbwtvYmLRgfV6YknRKRfcJuJSSS0EeGvg87s9/2KdOwHcHLPJKLbBSXUYWNBf5yLj35FDLuhW6MInXp8hg0zOSOdR4p7cg4iijG02QDvHD2bTHqRWE5ooHtYy3Z3VP3unxFJOobPY/P59SI0oFnf60R3FTN5Fa9/ES/QB323MVIvQusrHAKjQcN7e7+076bVYXJ/lF6EtqDtvU50AaIy/CBL9uygOkL3nIg3UR5bWIyEHFoROuqJ5xBJk63DRuosnLbpTcSLy/ZHicTjgFqRpSx2h4widdiYiWHESXn28lmRqiGEJFiZhfRUo1aEXliL95TiFR42Fvdn5OSk4Y1pKFLvR8Qk5adaCUlqHaxNrp97P83TfXnNWtdCJXNvPBUhtcvIJT5tz/Y/X/4YtZ4wNIIw2kXh4DUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADI/AXBR0hJXIB2hgAAAABJRU5ErkJggg==";
	const title = "title";

	test("<GifItem /> must match with snapshot", () => {
		const { container } = render(
			<GifItem
				id={id}
				height={height}
				imgSrc={imgSrc}
				width={width}
				title={title}
			/>
		);
		// screen.debug();

		expect(container).toMatchSnapshot();
	});

	test("should show image with the url and alt indicated", () => {
		render(
			<GifItem
				height={height}
				id={id}
				title={title}
				width={width}
				imgSrc={imgSrc}
			/>
		);

		// screen.debug();

		expect(
			screen.getByTestId("img", { exact: true }).hasAttribute("alt")
		).toBeTruthy();

		expect(
			screen.getByTestId("img", { exact: true }).hasAttribute("src")
		).toBeTruthy();
	});
});
