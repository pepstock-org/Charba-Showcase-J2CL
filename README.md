# Charba Showcase J2CL

This repository contains the source code of the **Charba** showcase site, based on J2CL, located [here](http://www.pepstock.org/Charba-Showcase-J2CL/Charba_Showcase_J2CL.html).

There are more than 160 samples about all **Charba** capabilities.

## Build (points of attention)

To build the project, waiting for **Charba** 3.1 (fully J2CL compliant), not published yet into MVN repository, the **Charba** jar is provided into `lib` folder and you must add it to Maven local repository, as following:

```
mvn install:install-file -Dfile=./lib/charba-3.1.beta.jar -DgroupId=org.pepstock -DartifactId=charba -Dversion=3.1.beta -Dpackaging=jar
```

Then you can execute `mvn clean` and `mvn install` to build the **Charba** showcase. 

The showcase is deployed into `war` folder.

**PAY ATTENTION** then during the `mvn install` you will get some warnings (you can ignore them) like the following:

```
[unusable-by-js] Type of parameter 'element' in 'boolean ArrayEnumList.add(E element)' is not usable by but exposed to JavaScript.
```

About above warning, you can see there is an open issue [#83](https://github.com/google/j2cl/issues/83) into [google/j2cl](https://github.com/google/j2cl) project. 