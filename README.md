# Charba Showcase J2CL

This repository contains the source code of the **Charba** showcase site, built by [J2CL](https://github.com/google/j2cl) and leveraging on [Elemental2](https://github.com/google/elemental2), located [here](http://www.pepstock.org/Charba-Showcase-J2CL/Charba_Showcase_J2CL.html).

There are more than 160 samples about all **Charba** capabilities.

## Building

To build the project, the **Charba** jar is provided into `lib` folder and you must add it to Maven local repository, as following:

```
mvn install:install-file -Dfile=./lib/charba-3.3.jar -DgroupId=org.pepstock -DartifactId=charba -Dversion=3.3 -Dpackaging=jar
```

Then you can execute `mvn clean` and `mvn install` to build the **Charba** showcase. 

The showcase is deployed into `war` folder.
