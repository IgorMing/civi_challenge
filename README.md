# CIVI Challenge

I've built this challenge with my own boilerplate, that I created, and keep ready to use on npm as you can see on [this repository link](https://www.npmjs.com/package/react-native-template-ts-boilerplate).

I decided to create that boilerplate, to avoid spending time adding some really necessary configs into a JavaScript project. _(E.g.: eslint, prettier, absolute import, and others)_

## Server

- create a service using any language

  - I decided to move on using [Deno](https://deno.land/) _(w/ TypeScript)_, because I was curious to its use, and that's not mature yet for production use. _(I thought an interview test might be a good place to put it in practice)_

- create the `GET /messages` endpoint
  - besides the endpoint cited above, I also create the nested route `GET /message/:id`, and a `PATCH /messages/:id`, for add read messages on the backend side

> **PS:** I left the `id` field as string, because at this way I was able to use dynamic `uuid` values as ids

## Mobile

- as I said right above, I used my created boilerplate for that.
  - a React Native Project w/ TypeScript as well
- display a list of messages correctly ordered (desc), and show a friendly date field

  - I've done the both tasks above using the date utility library [date-fns](https://date-fns.org/). Its use is looking simpler than momentjs, that's the reason I decided by using it

- navigate to a new screen and show the message details

  - for the navigation I used [react-navigation](https://reactnavigation.org/). That's the easier way to add routes to your RN application.

- mark the message as `read` after clicking on it

  - I did it and reloaded the list based in the screen focus hooks, provided by the react navigation library. It worked pretty good.

- apply a refresh control into the scroll view
  - I've done that, and, that's the way to receive a new message from the backend _(I've done a ugly workaround to make that work, my apologies)_

I kept the UI simple, with neutral/smooth colors.

Well, let's get started!

## Getting started

> Make sure you have [Deno](https://deno.land/#installation) installed.

first, clone the repo

```shell
$ git clone git@github.com:IgorMing/civi_challenge.git
```

let's prepare our server, and keep it running

```shell
$ cd server
$ deno run --allow-read --allow-net src/app.ts
```

> both annotations are required for running this, because deno asks for any necessary permission that your app needs to consume

now, we can go back to our root folder, and launch the mobile app

```shell
$ cd app
$ yarn
$ npx pod-install
$ yarn ios
```

That's basically it. I hope you like it! I've done as fast as I could.

Looking forward for your response.
