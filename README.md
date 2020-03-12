# Charba Showcase J2CL (still under construction)

This repository contains the source code of the **Charba** showcase site located [here](http://www.pepstock.org/Charba-Showcase-J2CL/Charba_Showcase_J2CL.html)but not yet available.

There are more than 160 samples about all **Charba** capabilities.

To build the project, waiting for **Charba** 3.1 (fully j2Cl compliant), not yet published into MVN repository, the **Charba** jar is provided into `lib` folder and you must add it to Maven local repositopry, as following:

```
mvn install:install-file -Dfile=./lib/charba-3.1.beta.jar -DgroupId=org.pepstock -DartifactId=charba -Dversion=3.1.beta -Dpackaging=jar
```

Then you can execute `mvn clean` and `mvn install` to build the showcase. 

The showcase is deploy int `war` folder.

**PAY ATTENTION** then during the `mvn install` you will get some warnings (you can ignore them) like the following:

```
[unusable-by-js] Type of parameter 'element' in 'boolean ArrayEnumList.add(E element)' is not usable by but exposed to JavaScript.
```

About above warrning, you can see there is an open issue [#83](https://github.com/google/j2cl/issues/83 )to [google/j2cl](https://github.com/google/j2cl) project. 