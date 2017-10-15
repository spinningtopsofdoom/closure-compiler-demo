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

# Code Splitting
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

    @@@bash
    main              checkout
    calculateTotal

<br />

## `calculateTotal` should be in the `checkout` module

    @@@bash
    main              checkout
                      calculateTotal


!SLIDE

# Cross Module Code Motion
## Compiler finds move code from from where it's defined to where it is used

