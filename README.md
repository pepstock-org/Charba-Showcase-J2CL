# Charba Showcase J2CL

[![Build](https://github.com/pepstock-org/Charba-Showcase-J2CL/workflows/Build/badge.svg?branch=master)](https://github.com/pepstock-org/Charba-Showcase/actions/workflows/build.yaml) [![ShowCase](https://img.shields.io/static/v1?message=ShowCase&color=informational)](https://pepstock-org.github.io/Charba-Showcase-J2CL/)

This repository contains the source code of the **Charba** showcase site, built by [J2CL](https://github.com/google/j2cl) and leveraging on [Elemental2](https://github.com/google/elemental2), located [here](https://pepstock-org.github.io/Charba-Showcase-J2CL/).

There are more than 180 samples about all **Charba** capabilities.

## Building

To build the project, the **Charba** jar is provided into `lib` folder and you must add it to Maven local repository, as following:

```
mvn install:install-file -Dfile=./lib/charba-4.0.jar -DgroupId=org.pepstock -DartifactId=charba -Dversion=4.0 -Dpackaging=jar
```

Then you can execute `mvn clean` and `mvn install` to build the **Charba** showcase. 

## Running

The showcase is deployed into `war` folder.

To run locally the showcase, open `war/index.html` file with the browser.
