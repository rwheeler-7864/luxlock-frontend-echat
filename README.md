# LuxLock Chat

## Project Introduction
### Technologies Used
- [Angular 4.0](https://angular.io/)
- [Bootstrap 3.0](http://getbootstrap.com/)

### Prerequsites
- NPM ~> 3.10
- Node ~> 6.10.0
- [Angular CLI](https://github.com/angular/angular-cli)
- NVM (optional if you are using Node Version Manager)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build
- Local/Dev Build: `ng build`
- Production Build: `ng build -prod`

## Running unit tests
- `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
`ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Folder Structure

    .
    |
    |-- e2e                             # Integration Tests
    |-- src                             # Business Logic
    |    |-- app                        # App Folder
    |    |    |-- app.module.ts         # Main / Parent Module, Includes Basic Imports
    |    |    |-- app.component.ts      # Main / Parent Component
    |    |    └-- app.component.html    # Main / Parent HTMl / Header Footer
    |    |-- assets                     # Contains SCSS / Images / JS / Compiled CSS
    |    |-- enviorments                # Configration files according to ENV
    |    |-- index.html                 # Entry point of application / All 3rd party assets loads here
    |    └-- main.ts                    # Entry point of applicantion / Bootrtraping the app
    └-- package.json                    # List installed package & contains custom commands
