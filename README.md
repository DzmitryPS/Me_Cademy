[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Javascript](https://aleen42.github.io/badges/src/javascript.svg)
![React](https://aleen42.github.io/badges/src/react.svg)
![React-Router](https://aleen42.github.io/badges/src/router.svg)
![NodeJs](https://github.com/aleen42/badges/raw/master/src/node.svg)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="./public/images/mecademy Logo Kopie reexported.png" alt="Logo" width="auto" height="150">
  <h1 align="center">Project 2 : "Norris Inc. E-commerce webapp"</h1>

  <p align="center">
    <i>
    A single page app...
    </i>
    <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="">Contact</a>   
</p>
</br>

# Table of Contents


</br>

# :thought_balloon: About the project
## :seedling: Some history
### Who are we?
We are ... and [Carlos](https://www.linkedin.com/in/carlosaore/), four students of [Wild Code School](https://www.wildcodeschool.com/). At the moment these lines are being written, we are attending a ["Web developer"](https://www.wildcodeschool.com/en-GB/trainings/web-developer-full-time) Bootcamp that is 5 months long and is teaching us all the technical know-how and knowledge to develop interactive websites using HTML, CSS, JavaScript, so we can take a React and Node JS development project to completion.

### Why did we create this?
...

### LinkedIn profiles
- ...
- [Carlos Orellana](https://www.linkedin.com/in/carlosaore/)

## [:top:](#table-of-contents)

## :lock: Constraints
- ...
- ...

## :rugby_football: Agile
...


## [:top:](#table-of-contents)

## :money_with_wings: Objectives
- ...
- ...

## [:top:](#table-of-contents)


## :wrench: Tools
We used Jira as our main tool to assist in the project management and Confluence to store and access all the documentation being produced and Slack together with Google Meet as our platform for communication.

Figma...

## [:top:](#table-of-contents)

# :microscope: About the code
The main frameworks and technologies used to build our Project are the following:

- React (with *Hooks* and *Context*)
- React Router
- Styled Components


## [:top:](#table-of-contents)

## :page_with_curl: `theme.js` and `textData.js`
To make our project scalable and maintainable, we opted to keep everything related to the style and text inside two files.

All texts and related information is stored inside a file called `textData.js`. This file contains the text strings that are injected into the code so that they are shown to the final user when the page is loaded.

`theme.js`, contains everything related to the style (colors, sizes, fonts, etc.).

We decided to take this approach to be able to maintain and update the project in a simpler, easier, and faster way. For most changes that we may need to do in the future, we only need access and edit these two files instead of looking through the huge react architecture to find the correct positioning of the one line of code that needs to be changed.

It took a bit of time to structure these files, but we believe it was worth it and it was a great learning opportunity.

### Use case example

1. The following object can be found inside [`textData.js`](.\src\data\textData.js) starting on line 63, and contains the value `Details` for the key `details`: 

    ```javascript
    single: {
        continue: "Continue Shopping",
        add: "Add to cart",
        details: "Details",
        },
    ```
    In the same manner, you can find another object in [`theme.js`](.\src\data\theme.js) starting on line 3 with a key  `primary` and value `"#33A0FF"`:

    ```javascript
    colors: {
        primary: "#33A0FF",
        secondary: "#33A0FF40",
        light: "#FFFFFF",
        dark: "#000000",
        dark2: "#0000007A",
        grey: "#F0F0F0",
        red: "#FF0000",
    },
    ```
2. We import both files in the [`SingleShopCard.js`](.\src\components\pages\shop\remote-shop\SingleShopCard.js) component on line 3 and 4:
    ```javascript
    import { textData } from "../../../../data/textData";
    import { theme } from "../../../../data/theme";
    ```
3. Still on `SingleShopCard.js`, starting on line 46, we call on a `Button` component that is set up to receive props for the text to be displayed and its color, amongst other things.
    ```javascript
    <Button
            id={id}
            action={(e) => onClick(e)}
            size="S"
            color="primary"
            text={textData.shop.single.details}
        />
    ```
4. You can clearly see how the props `color="primary"` and `text={textData.shop.single.details}` come from `textData.js` and `theme.js`
5. Now, if we ever want to change the color or the text displayed in this button, we only need to do a small change in a couple of lines of code. The change will be reflected in all instances of that button.

## [:top:](#table-of-contents)

## NPM Packages
...

## [:top:](#table-of-contents)

# :link: Other information

## :nail_care: Atomic design, Styled Components
...
Because of this approach, everything is designed and coded for scalability, maintainability, and changeability.

## [:top:](#table-of-contents)

## :dizzy: Git and GitHub Guidelines
**In our project, we decided to follow these guidelines for Git and GitHub.**

- Small and frequent commits, to be able to find any problem facilitate the handling of any problem that may arise.
- Commits with a significant name about the feature it’s implementing.
- Branches with a significant name about the feature that is being worked on.
- Pull requests done often (with working branches of course), to make sure that everyone in the team is working on the same version.
- Pull requests have to be reviewed and approved by at least one person before being merged into the main branch.

## [:top:](#table-of-contents)

# :cop: License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).

## [:top:](#table-of-contents)
