const genClock = function*() {
	while (true) {
		console.log('Tick!');
		yield;
		console.log('Tock!');
		yield;
	}
};

const clock = genClock();

clock.next();
clock.next();
clock.next();
clock.next();
clock.next();