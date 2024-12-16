# Instructions

Execute the script below to run unit tests and start the application. The application is only tested on the latest version of Chrome and Edge.

```sh
# Clone repository 
git clone https://github.com/limking24/sin-validator.git

# Install packages
cd sin-validator/
npm install

# Run unit tests
npm run test

# Run development server
npm run dev
```

# How To Use the SIN Validator

You can use the numpad on the UI to enter, modify, or clear the SIN number. In addition, you can use the 0-9, backspace, or delete keys on your keyboard to do the same thing.

# Explanations For My Choices

## Vite + React + TypeScript

I use Vite to create this React + TypeScript project because it is extremely easy to set everything up. All I need to do is to execute `npm create vite@latest` in the console and it asks me to enter the project name and choose which UI framework and language to use (see below).

```console
npm create vite@latest
√ Project name: ... sin-validator
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in C:\Users\Fai\github\sin-validator...

Done. Now run:

  cd sin-validator
  npm install
  npm run dev

```

## UI Components

I break the UI down into smaller components, so that the code is cleaner and reusable. The `App` component uses the `Input` and `Numpad` components, and `Numpad` uses `Button`. It looks like this:

```
App
├── Input
└── Numpad
    └── Button
```

Since it is a simple project, I want to keep things simple and stupid. That's why I have not created another component called `SinValidator`. Instead, I put the logic in `App`. For the same reason, I have not used environment variables and CSS variables, which would further increase the reusability of each component.

## Unit Tests

There is a few unit tests to ensure the functions related to SIN validation are correct. There are here because it's easier to do a re-test if I make some changes to those functions. It helps improve efficency as much as quality.


# Improvements To Make If Project Grew

## Project Structure

I would change the project structure if it got complex, or if some code could be shared by different project. It might look something like this:

```
sin-validator/
├── sin-validator-app
├── core
├── common
└── ui-components
```

## CSS Variables & Environment Variables

I would use CSS & environment variables in UI components instead of hard coding the values. This makes the component more reusable and maintainable.

## Internationalization Framework

If the application needed to support multiple languages, I would use framework such as `react-i18next` and avoid hard coding language text in UI components.