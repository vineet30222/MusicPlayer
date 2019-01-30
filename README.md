# MusicPlayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Important Instruction
To use spotifyAPI go to `authorization_code` and run command `node app`. Navigate To `http://localhost:8888/` and login with you spotify id 
.After login copy `access_token` from address bar and paste it to the `access_token` variable in file `spotify.service.ts` which is located at `musicPlayer/src/app` directory and save it.  

## MPM
run `npm install ` command to download all the dependencies used in the project .

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
also run `nodemon server` to run the code for backend which will be hosted on port number `3000`
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
