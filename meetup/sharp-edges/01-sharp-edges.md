# Sharp Edges
* Documentation
* (Some) Order dependence
* Using NPM Libraries

!SLIDE

# Lack of documentation and examples
## Hour or so to find a short blog post on recent solutions

!SLIDE

# Open source Projects using Google Closure Typically call it from Java instead of the command line options

!SLIDE

# Order Dependence (Sometimes) :(
## `js` flag depends on order unless `dependency_mode` is used
## Compiler determines order which can only be viewed with `output_manifest`

!SLIDE

# Modules depend on order files are processed by number of files processed
## A single change to can lead to lots of manual math with one off errors

    @@@bash
    --module main:3
    --module select_items:4:main
    --module holiday_items:2:select_items
    --module checkout:4:main

!SLIDE

# Google Closure came out around 9 years ago
## Only recently has is started to understand Module patterns

!SLIDE

# Combinatorial Explosion
* `process_js_modules`
* `module_resolution`
* `package_json_entry_names`

!SLIDE

# Externs
## JavaScript library dynamic naming

!SLIDE

# Google Closure assumes static names

    @@@javascript
    // orange library
    var obj = {};
    var flags = ['foo', 'bar', 'baz'];
    flasg.map(() => obj[i] = true; )
    exports = {flags: obj};

!SLIDE

# Tell Google Closure names library will use

    @@@javascript
    orange = {};
    /** @boolean */
    orange.foo;

    /** @boolean */
    orange.bar;

    /** @boolean */
    orange.baz;

`--externs orange.js`

!SLIDE

# Adding metadata (e.g. types ) to externs enables optimizations

!SLIDE

# String object access will not get renamed

    @@@javascript
    obj = {};
    obj.foo = 1;
    console.log(obj['foo']);

becomes

    @@@javascript
    a = {};
    a.b = 1;
    console.log(a['foo']);

