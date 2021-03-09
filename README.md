[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Javascript](https://aleen42.github.io/badges/src/javascript.svg)
![React](https://aleen42.github.io/badges/src/react.svg)
![React-Router](https://aleen42.github.io/badges/src/router.svg)
![NodeJs](https://github.com/aleen42/badges/raw/master/src/node.svg)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="./public/images/mecademy Logo Kopie reexported.png" alt="Logo" width="auto" height="150">
  <h1 align="center">MeCademy Webapp</h1>

  <p align="center">
    <i>
    A single page app for MentorMe gGmbH, Berlin. MeCademy offers female academics an application program composed of coaching, moderated groups and special know-how to help them to position successfully on the job market.
    </i>
    <br />
    <br />
    <a href="https://mecademy.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/DzmitryPS/Me_Cademy#who-are-we">Contact</a>   
</p>
</br>

# Table of Contents


</br>

# :thought_balloon::computer::chart_with_upwards_trend::pencil2: About the project

### About MeCademy
MeCademy is an online academy that brings back female academics 
to a career within 2 months. Since MeCademy is certified by the German 
job center, female academics could get a voucher to join the 8 weeks 
program for free. 

On the MeCademy WebApp 
you can get information about MeCademy, the program and the coaches,
as well as read testimonials, register for the program via typeform and of course 
get into contact by mail or social media.


The program helps 
to find a dream job as well as an employer you’d really  love to work for,
to master the application period
and to position as expert


The 8 steps of the 8 weeks program:

Week 1: Get clear about your professional passion
Week 2: Draw a plan and define your dream job
Week 3: Create your CV that presents you at best
Week 4: Write a cover letter to distinct from others
Week 5: Learn the 3 most important facts and train your job interview
Week 6: Get hints for your negotiation and train your salary negotiation
Week 7&8: Position as expert with personal branding


### About us :desktop_computer::earth_asia::australia::ru::el_salvador::de::raised_hands:	
We are [Dzmitry](https://www.linkedin.com/in/dzmitryps/), [Viet](https://www.linkedin.com/in/viet-quoc-pham-2850581ba/), [Nadine](https://www.linkedin.com/in/nadinestrobel/) and [Carlos](https://www.linkedin.com/in/carlosaore/), four students of the [Wild Code School](https://www.wildcodeschool.com/) **remote** class from around the world who teamed up for this project.\
At the moment these lines are being written, we are attending a ["Web developer"](https://www.wildcodeschool.com/en-GB/trainings/web-developer-full-time) Bootcamp that is 5 months long and is teaching us all the technical know-how and knowledge to develop interactive websites using HTML, CSS, JavaScript, so we can take a React and Node JS development project to completion.

### Why did we create this?
This is the final project of our 5 months bootcamp at [Wild Code School](https://www.wildcodeschool.com/) 
as well as our first project with a real client. 
Thanks for the amazing collaboration Karin & Eliz!

### LinkedIn profiles
- [Dzmitry Piskun](https://www.linkedin.com/in/dzmitryps/)
- [Viet Quoc Pham](https://www.linkedin.com/in/viet-quoc-pham-2850581ba/)
- [Nadine Strobel](https://www.linkedin.com/in/nadinestrobel/)
- [Carlos Orellana](https://www.linkedin.com/in/carlosaore/)

## [:top:](#table-of-contents)

## :lock: Constraints
- Team of 4 students 
- 8 weeks until Demo Day 2021-03-12
- Follow the Agile Manifesto
- Build an React Application

## :rugby_football: Agile
We are very happy to have worked according to the Agile Manifesto and followed the 12 principles:\
:martial_arts_uniform: Customer Satisfaction\
:martial_arts_uniform: Welcome Change\
:martial_arts_uniform: Deliver Frequently\
:martial_arts_uniform: Working Together\
:martial_arts_uniform: Motivated Team\
:martial_arts_uniform: Face-to-Face\
:martial_arts_uniform: Working Software\
:martial_arts_uniform: Constant Pace\
:martial_arts_uniform: Good Design\
:martial_arts_uniform: Simplicity\
:martial_arts_uniform: Self Organization\
:martial_arts_uniform: Reflect and Adjust

## [:top:](#table-of-contents)

## :money_with_wings: Objectives
- Master the first project with a client
- Follow the Agile Manifesto
- Learn more about React
- Discover the advantages of Atomic Design

## [:top:](#table-of-contents)


## :wrench: Tools
We used **Jira** as our main tool to assist in the project management and **Confluence** to store and access all the documentation being produced and **Slack** together with Google Meet as our platform for communication.
Our Wirframes we built on **Figma**.

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

<!-- It took a bit of time to structure these files, but we believe it was worth it and it was a great learning opportunity.-->

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
- React Router
- Styled Components
- Typeform
- Prerender-spa-plugin
- Helmet
- Carousel component "React Slick"


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
