# Fundamental Tension in Modern JavaScript Web Application

<br />

## Rich Complex Feature rich applications

<br />

## Startup application as quickly as possible

!SLIDE

# Web applications have several unique constraints
* Need to be downloaded before they can start
* `100` kb of JavaScript >> `100` kb of an image
* Loading JavaScript is a blocking operation
* Wide range of devices with limited bandwidth, power, cpu speed

!SLIDE

# The above problems lead to slow sites which costs money
* Users expect quick start time (~3) seconds even from mobile devices

!SLIDE

# Several fronts the problem can be attacked
## We'll be focusing on minimizing the JavaScript needed to transfer over the wire

!SLIDE

# Bytes of JavaScript sent will be our metric

!SLIDE

# This sounds like a job for a compiler!
## Input: Large JavaScript Application
## Output: Minimal JavaScript Application with same functionality

!SLIDE

# Code Minimization
* Variable Renaming
* Dead Code Elimination
* Tree Shaking

!SLIDE

# Variable Renaming
## Shorten variable names

    @@@javascript
    var a_very_long_variable_name = 1;

<br />

    @@@javascript
    var ba = 1;

!SLIDE

# Dead Code Elimination
## Remove Unused code

    @@@javascript
    let x = 1;
    if (true) {
      x = 1000;
    }
    console.log("foo")

<br />

    @@@javascript
    console.log("foo")

!SLIDE

# Tree Shaking
## Traverses Code Dependencies

    @@@javascript
    /* log.js module */
	export const logWithMsg = (msg, arg) => console.log(msg, arg);
	export const log = (arg) => console.log(arg);

	/* math.js module */
	export const min = (a, b) => Math.min(a, b);
	export const max = (a, b) => Math.max(a, b);
	export const exp = (x) => x * x;
	export const sum = (xs) => xs.reduce((a, b) => a + b, 0);

	/* entry.js entry point */
	import * as math from './math';
	import * as logger from './log';

	const nums = [0, 1, 2, 3, 4, 5];
	const msg = 'Result:';

	if (false) {
	  logger.log('nothing');
	} else {
	  logger.logWithMsg(msg, math.sum(nums));
	}

From [Closure Compiler Handbook](https://github.com/roman01la/closure-compiler-handboo://github.com/roman01la/closure-compiler-handbook)

!SLIDE

# Tree Shaking Output

	@@@javascript
	// Even though the entire modules namespace was imported,
	// tree-shaking didn't include dependency code that is not used here.
	// Also a dead code within `if (false) { ... }` was removed.
	var c = function(a) {
	  return a.reduce(function(a, b) {
		return a + b;
	  }, 0);
	}([0,1,2,3,4,5]);

	console.log("Result:",c);

!SLIDE

# All of these works on the whole application
## Often only a portion of the application is needed

!SLIDE

# Ecommerce site could have a main page, item selection page, and checkout page
## The application can be split into modules (bundles)

!SLIDE

# Splitting application to modules allows for

* Loading only necessary parts of the application (e.g. `main` and `item_selection`)
* Use HTTP v2 to load modules in parallel

!SLIDE

# Naive module splitting has a problem

<br />

## Moudle `main` has a function `calculateTotal` that is only used in `checkout`

<br />

## `calculateTotal` should be in the `checkout` module

!SLIDE

# Developers will need to manually track how functionality gets split
## Nothing can be done for libraries (e.g. if `calculateTotal` was in the `Stripe` JavaScript library)

!SLIDE

# Cross Module Code Motion
## Compiler finds where code is used in modules and moves definitions to modules

