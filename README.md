# Charba Showcase J2CL

<p align="left">
  <a href="https://github.com/pepstock-org/Charba-Showcase/actions/workflows/build.yaml"><img alt="Build" src="https://github.com/pepstock-org/Charba-Showcase-J2CL/workflows/Build/badge.svg?branch=master"></a>
  <a href="https://pepstock-org.github.io/Charba-Showcase-J2CL/"><img alt="J2CL showcase" src="https://img.shields.io/badge/Showcase-J2CL-F27173.svg"></a>
</p>


This repository contains the source code of the **Charba** showcase site, built by [J2CL](https://github.com/google/j2cl) and leveraging on [Elemental2](https://github.com/google/elemental2), located [here](https://pepstock-org.github.io/Charba-Showcase-J2CL/).

There are more than 250 samples about all **Charba** capabilities. 

## Building

You can execute `mvn clean` and `mvn install` to build the **Charba** showcase. 

The project is also providing the **Charba** jar is provided in `lib` folder, needed if you want to build a master when the new version of **Charba** jar is not published in [MVN repository](https://mvnrepository.com/artifact/org.pepstock/charba) yet.

You can add it to Maven local repository, as following:

```
mvn install:install-file -Dfile=./lib/charba-6.5.jar -DgroupId=org.pepstock -DartifactId=charba -Dversion=6.5 -Dpackaging=jar
```

## Running

The showcase is deployed into `war` folder.

To run locally the showcase, open `war/index.html` file with the browser.
