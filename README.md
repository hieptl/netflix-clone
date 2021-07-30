# Learn React by Building Netflix.

<img src="./md-images/learning-react-by-building-netflix.png" alt="learn-react-by-building-netflix"/>

> Click :star: if you like the project. Pull Request are highly appreciated :heart:
>
> You can check the advance folder for more React advance concepts.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚. 

The repository helps you learn React by buiding Netflix. It means that you are learning React.js by building a real-life project. I will explain concepts in detail. This post is the first part in my series and it is suitable for beginners.

My post is about __Learn React By Building Netflix__ on Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127

> If you feel the repository is useful, please help me share the post and give me a. It will make me feel motivation to work even harder. I will try to make many open sources and share to the community.
>

## __Preface__

This course will help you to learn React by building Netflix. It means that you are learning by doing a real-life project. You will learn the following React concepts:

- JSX.
- React elements
- React components
- Firebase.
- useEffect.
- state.
- useState.
- props.
- React Router
- Event handling.
- Form handling.
- Synthetic events
- Communicate between components
- Deploy React to Firebase.

> Agenda:
>
> -  Episode 1: Introduce about the course, common rendering types and import sample data to Firebase and understand about React elements, React components by building Netfix's header component.
>
> - Episode 2: Create Row component, learn how to get data from Firebase and understand about useEffect, props, state, useState by refactoring the Row component.
>
> - Episode 3: Learn React Router to navigate between pages and create "Sign In" page.
>
> - Episode 4: Learn how to communicate between parent components and child components by building "movie detail" page.
>
> - Episode 5: Summary knowledge and deploy the project to Firebase.

## __Table of Contents__
| No. | Topics |
| --- | --------- |
|0  | [How to Run the Project.](#how-to-run-the-project) |
|1  | [Live Demo.](#live-demo) |
|2  | [Introduction about the Creator.](#introduction-about-the-creator) |
|2.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Greenwich University.](#greenwich-university) |
|2.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hitachi Vantara Vietnam.](#hitachi-vantara-vietnam) |
|3  | [Prequisites.](#prequisites) |
|3.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Softwares.](#softwares) |
|3.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technical Skills.](#technical-skills) |
|3.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Materials.](#materials) |
|4  | [Purposes of the Course.](#purposes-of-the-course) |
|4.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Final Project.](#final-project) |
|4.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job.](#job) |
|5  | [Common Rendering Types.](#common-rendering-types) |
|5.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Server Side Rendring.](#server-side-rendering) |
|5.1.1| [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How Server Side Rendering Work.](#how-server-side-rendering-work) |
|5.1.2| [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Advantages of Server Side Rendering.](#the-advantages-of-server-side-rendering) |
|5.1.3| [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Disadvantages of Server Side Rendering.](#the-disadvantages-of-server-side-rendering) |
|5.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client Side Rendring & Single Page Application.](#client-side-rendering-and-single-page-application) |
|5.2.1| [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How Client Side Rendering Work.](#how-client-side-rendering-work) |
|5.2.2| [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Advantages of Client Side Rendering.](#the-advantages-of-client-side-rendering) |
|5.2.3| [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Disadvantages of Client Side Rendering.](#the-disadvantages-of-client-side-rendering) |
|6  | [Introduction about React.](#introduction-about-react) |
|6.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What.](#what) |
|6.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why & Advantages.](#why-and-advantages) |
|6.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When & Disadvantages.](#when-and-disadvantages) |
|6.4  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How.](#how) |
|6.5  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What Makes React so Fast.](#what-makes-react-so-fast) |
|7  | [Building Netflix.](#building-netflix) |
|7.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How to Import Sample Data to Firebase.](#how-to-import-sample-data-to-firebase) |
|7.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Web Application on Firebase.](#create-web-application-on-firebase) |
|7.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prequesites.](#netflix-prequesites) |
|7.4  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build Header - Home Page.](#build-header-home-page) |
|7.5  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build Row - Home Page.](#build-row-home-page) |
|7.6  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apply React Router.](#apply-react-router) |
|7.7  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set Up Firebase Authentication.](#set-up-firebase-authentication) |
|7.8  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build Netflix Login Page.](#build-netflix-login-page) |
|8  | [Deploy React to Firebase.](#deploy-react-to-firebase) |
|9  | [Summary.](#summary) |
|10  | [Useful Resources to Learn React.](#useful-resources-to-learn-react) |
|11  | [References.](#references) |


## __Table of Images.__
| No. | Topics |
| --- | --------- |
|1  | [Figure 1: Server side rendering.](#figure1) |
|2  | [Figure 2: Client side rendering.](#figure2) |
|2  | [Figure 3: How virtual dom works ? - Step 1.](#figure3) |
|4  | [Figure 4: How virtual dom works ? - Step 2.](#figure4) |
|5  | [Figure 5: How virtual dom works ? - Step 3.](#figure5) |
|6  | [Figure 6: Firebase realtime database - Step 1.](#figure6) |
|7  | [Figure 7: Firebase realtime database - Step 2.](#figure7) |
|8  | [Figure 8: Firebase realtime database - Step 3.](#figure8) |
|9  | [Figure 9: Firebase realtime database - Step 4.](#figure9) |
|10  | [Figure 10: Firebase realtime database - Step 5.](#figure10) |
|11  | [Figure 11: Firebase realtime database - Step 6.](#figure11) |
|12  | [Figure 12: Firebase realtime database - Step 7.](#figure12) |
|13  | [Figure 13: Firebase realtime database - Step 8.](#figure13) |
|14  | [Figure 14: Firebase realtime database - Step 9.](#figure14) |
|15  | [Figure 15: Firebase realtime database - Step 10.](#figure15) |
|16  | [Figure 16: Firebase realtime database - Step 11.](#figure16) |
|17  | [Figure 17: Firebase realtime database - Step 12.](#figure17) |
|18  | [Figure 18: Firebase realtime database - Step 13.](#figure18) |
|19  | [Figure 19: Firebase realtime database - Step 14.](#figure19) |
|20  | [Figure 20: Firebase realtime database - Step 15.](#figure20) |
|21  | [Figure 21: Firebase realtime database - Step 16.](#figure21) |
|22  | [Figure 22: Create web application on Firebase - Step 1.](#figure22) |
|23  | [Figure 23: Create web application on Firebase - Step 2.](#figure23) | 
|24  | [Figure 24: Create web application on Firebase - Step 3.](#figure24) | 
|25  | [Figure 25: Create web application on Firebase - Step 4.](#figure25) | 
|26  | [Figure 26: Netflix's header - home page.](#figure26) | 
|27  | [Figure 27: Netflix's header - home page - 2.](#figure27) | 
|28  | [Figure 28: Netflix's row - home page.](#figure28) | 
|29  | [Figure 29: Netflix's home component.](#figure29) | 
|30  | [Figure 30: Firebase authentication - Step 1.](#figure30) | 
|31  | [Figure 31: Firebase authentication - Step 2.](#figure31) | 
|32  | [Figure 32: Firebase authentication - Step 3.](#figure32) | 
|33  | [Figure 33: Firebase authentication - Step 4.](#figure33) | 
|34  | [Figure 34: Firebase authentication - Step 5.](#figure34) | 
|35  | [Figure 35: Firebase authentication - Step 6.](#figure35) | 
|36  | [Figure 36: Firebase authentication - Step 7.](#figure36) | 
|37  | [Figure 37: Firebase authentication - Step 8.](#figure37) | 
|38  | [Figure 38: Login Page - Netflix.](#figure38) | 
|39  | [Figure 39: Login Page - Netflix.](#figure39) | 
|40  | [Figure 40: Login Page - 2 - Netflix.](#figure40) | 
|41  | [Figure 41: Login Page - 3 - Netflix.](#figure41) | 
|42  | [Figure 42: Deploy React to Firebase - Step 2.](#figure42) | 
|43  | [Figure 43: Deploy React to Firebase - Step 3.](#figure43) | 
|44  | [Figure 44: Deploy React to Firebase - Step 4.](#figure44) | 
|45  | [Figure 45: Deploy React to Firebase - Step 5.](#figure45) | 
|46  | [Figure 46: Deploy React to Firebase - Step 5.](#figure46) | 
|47  | [Figure 47: Deploy React to Firebase - Step 6.](#figure47) |
|48  | [Figure 48: Deploy React to Firebase - Step 6.](#figure48) | 


<a id="how-to-run-the-project"></a>
## __0. How to Run the Project.__

- Step 1: Clone the project by using git clone or download the zip file.

- Step 2: Open "terminal" / "cmd" / "gitbash" and change directory to "netflix-clone" and run "npm install" to install dependencies.

- Step 3: Run "npm start" to run the fron-end project.

<a id="live-demo"></a>
## __1. Live Demo.__

- https://7ckdg.csb.app/

<a id="introduction-about-the-creator"></a>
## __2. Introduction about the Creator.__

<a id="greenwich-university"></a>
### __2.1. Greenwich University.__

- Valedictorian.

- GPA 4.0 / 4.0.

- Machine Learning paper - Recommendation System - IEEE/ICACT2020.

- Co-Founder / Mentor IT club.

<a id="hitachi-vantara-vietnam"></a>
### __2.2. Hitachi Vantara Vietnam.__

- Employee of the year.

- Second prize - innovation contest.

- Techlead - HN branch.

- One of CoE Leaders (Center of Excellence).

<a id="prequisites"></a>
## __3. Prequisites.__

<a id="softwares"></a>
### __3.1. Softwares.__

- Install NodeJS.

- An IDE or a text editor (VSCode, Intellij, Webstorm, etc).

<a id="technical-skills"></a>
### __3.2. Technical Skills.__

- Basic programming skill.

- Basic HTML, CSS, JS skills.

<a id="materials"></a>
### __3.3. Materials.__

- Html, css, js (source code) was prepared because I want to focus on React and share knowledge about React. Building html and css from scratch would take a lot of time.

- README.md (the md file will contain everything about the course).

- Netflix data will be used to import to Firebase. In this course, we use Firebase as our back-end service.

<a id="purposes-of-the-course"></a>
## __4. Purposes of the Course.__

<a id="final-project"></a>
### __4.1. Final Project.__

- The course would help you have understanding about React.

- You could build the final project with end-to-end solution (front-end solution using React and back-end solution using Firebase).

<a id="job"></a>
### __4.2. Job.__

- After finishing the course, you could get a job with fresher / junior position.

<a id="common-rendering-types"></a>
## __5. Common Renderting Types.__

<a id="server-side-rendering"></a>
### __5.1 Server Side Rendering.__

<a id="how-server-side-rendering-work"></a>
#### __5.1.1. How Server Side Rendering Work.__

<a id="figure1"></a>
<img src="./md-images/ssr.png" alt="drawing" width="666"/>

Figure 1. Server side rendering.

- When an user accesses to the website. The request would be sent to the server.

- The web server would receive the request and connect to the database.

- The web server would render HTML and return the result to the end user.

<a id="the-advantages-of-server-side-rendering"></a>
#### __5.1.2 The Advantages of Server Side Rendering.__

- The initial loading time will be fast. Because almost of things will be handled on the server side.

- It is supported by many frameworks (Node.js, Java, PHP, .NET, etc).

- It is easy to learn and easy to understand because the developers does not need to separate front-end and back-end.

- It is good for SEO.

<a id="the-disadvantages-of-server-side-rendering"></a>
#### __5.1.3 The Disadvantages of Server Side Rendering.__

- When the user navigates between pages. The entire page has to be loaded again.

- The server side has to handle many things (connecting to the database, rendering HTML, etc).

- It consume more bandwidth because the server returns the same content many times (header, footer, etc).

<a id="client-side-rendering-and-single-page-application"></a>
### __5.2 Client Side Rendering & Single Page Application.__

<a id="how-client-side-rendering-work"></a>
#### __5.2.1. How Client Side Rendering Work.__

<a id="figure2"></a>
<img src="./md-images/csr.png" alt="drawing" width="666"/>

Figure 2. Client side rendering.

- Rendering HTML, CSS will be handled on the browser by Javascript.

<a id="the-advantages-of-client-side-rendering"></a>
#### __5.2.2. The Advantages of Client Side Rendering.__

- The page would be loaded just once.

- Javascript code would interact with the back-end apis to get data.

- Business logic could be handled on client side. Hence, the server does not need to handle all of the bussiness features.

- Reducing the bandwidth because the applications just need to get JSON data instead of loading the entire page.

- It provides better UX.

<a id="the-disadvantages-of-client-side-rendering"></a>
#### __5.2.3. The Disadvantages of Client Side Rendering.__

- The initial loading time will be slow. Because the browser has to load Javascript code, get data form the server, parse and render data.

- The project will be separated into front-end and back-end.

- The application could not be ran if Javascript is disabled on the browser.

- It is not really good for SEO.

- The load time would be slow for old devices.

<a id="introduction-about-react"></a>
## __6. Introduction about React.__

<a id="what"></a>
### __6.1. What.__

- React is a front-end open source library. It will be used to build SPA (Single Page Application).

- React Native can be used to build mobile applications which have ability to run on both IOS and Android.

- React was created by Jordan Walke - a software engineer for Facebook.

- React was first deployed on Facebook's New Feeds in 2011 and on Instagram in 2012.

<a id="why-and-advantages"></a>
### __6.2 Why & Advantages.__

- React has Virtual DOM concept so that it provides good performance.

- React supports server side rendering.

- React supports one way data flow.

- React helps the developer create reusable components.

<a id="when-and-disadvantages"></a>
### __6.3. When & Disadvantages.__

- React is just view library not a fully framework.

- There is learning curve for beginners.

- Integrating React with MVC traditional frameworks will need 
some configuration.

- The code complexity will be increases.

- Your application may contain too many smaller components.

<a id="how"></a>
### __6.4. How.__

- Step 1: Install Node.js.

- Step 2: Run 'npx create-react-app appName'. (appName could be replaced by the application's name).

<a id="what-makes-react-so-fast"></a>
### __6.5. What Makes React so Fast.__

- The answer is Virtual DOM.

- There is a process which is called reconciliation.

1. Whenever any underlaying data changes, the entire UI is re-rendered in Virtual DOM representation.

<a id="figure3"></a>
<img src="./md-images/vdom1.png" alt="drawing" width="666"/>

Figure 3: How virtual dom works - Step 1.


2. The differences between the Virtual DOM and the Real DOM are calculated.

<a id="figure4"></a>
<img src="./md-images/vdom2.png" alt="drawing" width="666"/>

Figure 4. How virtual dom works - Step 2.


3. The Real DOM will be updated with only the things that have actually changed.

<a id="figure5"></a>
![image info](./md-images/vdom3.png)

Figure 5. How virtual dom works - Step 3.


<a id="building-netflix"></a>
## __7. Building Netflix.__

<a id="how-to-import-sample-data-to-firebase"></a>
### __7.1. How to Import Sample Data to Firebase.__

- Step 1: Access the browser, go to https://firebase.google.com and click on "Sign in" button.

<a id="figure6"></a>
<img src="./md-images/firebase1.png" alt="drawing" width="666"/>

Figure 6: Firebase realtime database - Step 1.

- Step 2: Sign in to Firebase by using gmail account, input user's name and password and then click on "Next" button.

<a id="figure7"></a>
<img src="./md-images/firebase2.png" alt="drawing" width="666"/>

Figure 7: Firebase realtime database - Step 2.

- Step 3: Click on "Go to Console" button.

<a id="figure8"></a>
<img src="./md-images/firebase3.png" alt="drawing" width="666"/>

Figure 8: Firebase realtime database - Step 3.

- Step 4: Click on "Create a project" button to create Firebase project.

<a id="figure9"></a>
<img src="./md-images/firebase4.png" alt="drawing" width="666"/>

Figure 9: Firebase realtime database - Step 4.

- Step 5: Input project's name (example: 'netflix-clone') and then click on "Continue" button.

<a id="figure10"></a>
<img src="./md-images/firebase5.png" alt="drawing" width="666"/>

Figure 10: Firebase realtime database - Step 5.

- Step 6: Click on "Continute" button.

<a id="figure11"></a>
<img src="./md-images/firebase6.png" alt="drawing" width="666"/>

Figure 11: Firebase realtime database - Step 6.

- Step 7: Select the account. you could select your gmail account and then click on "Create Project" button.

<a id="figure12"></a>
<img src="./md-images/firebase7.png" alt="drawing" width="666"/>

Figure 12: Firebase realtime database - Step 7.

- Step 8: In this step, Firebase would handle the remaining tasks for you and you wait until everything has been set up successfully.

<a id="figure13"></a>
<img src="./md-images/firebase8.png" alt="drawing" width="666"/>

Figure 13: Firebase realtime database - Step 8.

- Step 9: Click on "Continue" button.

<a id="figure14"></a>
<img src="./md-images/firebase9.png" alt="drawing" width="666"/>

Figure 14: Firebase realtime database - Step 9.

- Step 10: At the dashboard page, you click "Realtime Database" option. It means that when you change your data, your data on the web application will be updated automatically without refreshing the page.

<a id="figure15"></a>
<img src="./md-images/firebase10.png" alt="drawing" width="666"/>

Figure 15: Firebase realtime database - Step 10.

- Step 11: It's time to create a database by clicking on "Create Database" button.

<a id="figure16"></a>
<img src="./md-images/firebase11.png" alt="drawing" width="666"/>

Figure 16: Firebase realtime database - Step 11.

- Step 12: Select the realtime database's location (just need to choose the default one) and then click on "Next" button.

<a id="figure17"></a>
<img src="./md-images/firebase12.png" alt="drawing" width="666"/>

Figure 17: Firebase realtime database - Step 12.

- Step 13: Configure securtity rules for the database. You select test mode because the database is used for learning purpose and click on "Enable" button.

<a id="figure18"></a>
<img src="./md-images/firebase13.png" alt="drawing" width="666"/>

Figure 18: Firebase realtime database - Step 13.

- Step 14: Click on "Import JSON" option.

<a id="figure19"></a>
<img src="./md-images/firebase14.png" alt="drawing" width="666"/>

Figure 19: Firebase realtime database - Step 14.

- Step 15: Select "movies.json" from the git repository and click on "Import" button.

<a id="figure20"></a>
<img src="./md-images/firebase15.png" alt="drawing" width="666"/>

Figure 20: Firebase realtime database - Step 15.

- Step 16: After importing successfully, your result should be like this.

<a id="figure21"></a>
<img src="./md-images/firebase16.png" alt="drawing" width="666"/>

Figure 21: Firebase realtime database - Step 16.

<a id="create-web-application-on-firebase"></a>
### __7.2. Create Web Application on Firebase.__

After creating realtime database and importing sample data to Firebase, a web application should be created on Firebase. Firebase would return the configuration information. That information will be used later.

- Step 1: Click on "setting" icon and choose "Project settings" option.

<a id="figure22"></a>
<img src="./md-images/firebase17.png" alt="drawing" width="666"/>

Figure 22: Create web application on Firebase - Step 1.

- Step 2: Scroll down to the bottom of the page and choose "web" icon.

<a id="figure23"></a>
<img src="./md-images/firebase18.png" alt="drawing" width="666"/>

Figure 23: Create web application on Firebase - Step 2.

- Step 3: Input "App nickname" (example: "netflix-clone") and click on "Register App" button.

<a id="figure24"></a>
<img src="./md-images/firebase19.png" alt="drawing" width="666"/>

Figure 24: Create web application on Firebase - Step 3.

- Step 4: Save Firebase configuration in somewhere else for later use and click on "Continue to Console" button.

<a id="figure25"></a>
<img src="./md-images/firebase20.png" alt="drawing" width="666"/>

Figure 25: Create web application on Firebase - Step 4.

<a id="prequesites"></a>
### __7.3. Prequesites.__

- Step 1: Imported movies.json (in netflix-data folder) to Firebase. We will use that data to build Netflix application.

- Step 2: Created the web application on Firebase in order to get Firebase configuration.

- Step 3: Created a project with name 'netflix-clone' by running 'npx create-react-app netflix-clone'.

- Step 4: Replaced the content of styles.css (in netflix-html-css) to index.css so that we do not need to worry about CSS, we just need to focus on how to learn React by building Netflix.

<a id="build-header-home-page"></a>
### __7.4. Build Header - Home Page.__

<a id="figure26"></a>
<img src="./md-images/netflix-header1.png" alt="drawing" width="666"/>

Figure 26: Netflix's header - home page.

The following steps describe how to build Netflix's header.

- Step 1: Replace the content of App.js with the following code, open "cmd" or "terminal" or "gitbash", change directory to your project's folder and run "npm start" to launch the project.

```js
function App() {
  return (
    <div className="app">
      {/* Nav */}
      <div className="nav false">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
          alt=""
        />
      </div>
      {/* End Nav */}
      {/* Header */}
      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">Ginny &amp; Georgia</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            Angsty and awkward fifteen year old Ginny Miller often feels more
            mature than her thirty year old mother, the irresistible and dynamic
            Georgia Miller...
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
      {/* Header */}
    </div>
  );
}

export default App;
```

> 1st NOTE:   
> - What inside return () is called React Element.
>
> - React Element describes what would be appeared on the screen.
>
> - React Element is cheap.
>
> - Once React Element is created, they never be mutated.
>
> - As mentioned above, we are writing Javascript along with HTML, we can do that because React provides the concept of JSX (Javascript XML).

> 2nd NOTE:
> - If you run the code, the Netflix's header would be appeared. 
>
> - However, we can break down Netflix's header into smaller components in order to reuse them and it would be easy to maintain.
>
> - Components are small UI pieces which will be combined together to build your application.
>
> - You can imagine you are playing Lego.

<a id="figure27"></a>
<img src="./md-images/netflix-header2.png" alt="drawing" width="666"/>

Figure 27: Netflix's header - home page - 2.

- Step 2: Create "components" folder."components" folder will be used to store components in your application. We should not put everything in src folder, structuring projects helps the developers scale and maintain code easier.

- Step 3: Create Nav.js file in "components/nav" folder with the following code.

```js
function Nav() {
  return (
    <div className="nav false">
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
      />
      <img
        className="nav__avatar"
        src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
```

- Step 4: Create Header.js file in "components/header" folder with the following code.

```js
function Header() {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Ginny &amp; Georgia</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Angsty and awkward fifteen year old Ginny Miller often feels more
          mature than her thirty year old mother, the irresistible and dynamic
          Georgia Miller...
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Header;
```

- Step 5: Change your App.js with the following code.

```js
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Header */}
      <Header />
      {/* Header */}
    </div>
  );
}

export default App;
```

> 3rd NOTE:
> - Now you can see the result would be the same.
>
> - You can reuse Nav component and Header component in different places in your application.
>
> - It is one of the advantages of React library - create reusable components.

<a id="build-row-home-page"></a>
### __7.5. Build Row - Home Page__

<a id="figure28"></a>
<img src="./md-images/netflix-row1.png" alt="drawing" width="666"/>

Figure 28: Netflix's row - home page.

The above image mentions about the similarities between rows in the home page. They also have title element and list of movies element. Therefore, a "Row" component should be created for reusable.

The following steps describe how to build "Row" component.

- Step 1: Like what we have done with Nav component and Header component, you create Row.js file in "components/row folder with the following code.

```js
function Row() {
  return (
    <div class="row">
      <h2>NETFLIX ORGINALS</h2>
      <div class="row__posters">
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
          alt="Jupiter's Legacy"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg"
          alt="Lucifer"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//34FaY8qpjBAVysSfrJ1l7nrAQaD.jpg"
          alt="Luis Miguel: The Series"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//mYsWyfiIMxx4HDm0Wck7oJ9ckez.jpg"
          alt="Selena: The Series"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg"
          alt="Who Killed Sara?"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//asDqvkE66EegtKJJXIRhBJPxscr.jpg"
          alt="Love, Death &amp; Robots"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//obLBdhLxheKg8Li1qO11r2SwmYO.jpg"
          alt="Cobra Kai"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg"
          alt="Elite"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
          alt="Stranger Things"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg"
          alt="Money Heist"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg"
          alt="The Umbrella Academy"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//Q1ZYG3kDS8iVIHOYOJ9NQmV0q7.jpg"
          alt="Haunted: Latin America"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg"
          alt="Lupin"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//yxMpoHO0CXP5o9gB7IfsciilQS4.jpg"
          alt="Chilling Adventures of Sabrina"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//lqS90fU1IEHSbga7X6Gej5amBvR.jpg"
          alt="Castlevania"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//e4aqizYQ8eeTGNZMq6WiFfqoZbz.jpg"
          alt="Ginny &amp; Georgia"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//4Bph0hhnDH6dpc0SZIV522bLm4P.jpg"
          alt="Sex Education"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//uBRpPFcYAYLM7V3x6x7bP3Ucumj.jpg"
          alt="Halston"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
          alt="Dark"
        />
        <img
          class="row__poster row__posterLarge"
          src="https://image.tmdb.org/t/p/original//6USbtATMqFLkeafx3FV3wcGZTNo.jpg"
          alt="The Innocent"
        />
      </div>
    </div>
  );
}

export default Row;
```

> 4th NOTE:
> - In the case, we have to create different rows with different data (images, title and so on), we have to dupplicate this component to many "Row" components.
>
> - As mentioned before, __the component should be reusable__. It means that we need to make the current "Row" component be reusable instead of creating a new one.

> 5th NOTE:
> - We are hardcoding the data in "Row" component.
>
> - We need to get some real data to make the application be realistic.
>
> - In this course, we need to know how to integrate with Firebase first and then we will comeback to our "Row" component later.

- Step 4: Install Firebase package from npm by running 'npm install --save firebase".

- Step 5: Create "firebase" inside src folder.

- Step 6: Create "firebase.js" file inside "firebase" folder with the following content.

```js
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
});

const firebaseDatabase = app.database();

export {
  firebaseDatabase
};

```

> 6th NOTE:
> - Replace "apiKey" by your api key.
>
> - Replace "projectId.firebaseapp.com" by your auth domain.
>
> - Replace "https://databaseName.firebaseio.com" by your database url.
>
> - Replace "bucket.appspot.com" by your storage bucket.

- Step 7: In fact, we should store credentials in .env file (environment file). Env file should not be comitted to your git repository. Therefore, you need to create .env file in your root folder with the following content.

```js
REACT_APP_FIREBASE_API_KEY=AIzaSyDInCnshdBWbn_0IGLqEgLwM0fg8wLDGGA
REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-clone-d852d.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_UTL=https://netflix-clone-d852d-default-rtdb.firebaseio.com
REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-clone-d852d.appspot.com
```

> 7th NOTE:
> - The prefix of your enviroment variables must be "REACT_APP".

- Step 8: After creating .env file, we need to replace content of firebase.js file with the following content.

```js
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_UTL}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`
});

const firebaseDatabase = app.database();

export {
  firebaseDatabase
};

```

- Step 9: Import "firebaseDatabase" from "firebase.js" file and write a function in "Row" component to get data from Firebase.

```js

...
import { firebaseDatabase } from "../../firebase/firebase";


function Row() {
  ...
  const leafRoot = 'movies';
  const fetchMovies = (movieType) => {
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        setMovies(() => movies);
      }
    });
  };
  ...
}
...
```

> 8th NOTE:
> - Where do we call the above function in "Row" component ?
>
> - The best practice is to call the function after the component has been loaded. How do we know about when the component has been loaded ?
>
> - React provides __"useEffect"__ to help us. __"useEffect"__ is one of built-in React hooks.

- Step 10: Import useEffect in "Row" component.

```js
import { useEffect } from "react";
```

- Step 11: Call fetchMovies function in useEffect.

```js
useEffect(() => {
  fetchMovies(movieType);
}, []);
```

> 9th NOTE:
> - Wait a minute ! What is "movieType" ??? We did not define it before.
>
> - Please do not worry, we will explain in detail about why do we need "movieType" in here. Firstly, please keep in mind that __we always want to make "Row" component be reusable__.
>
> - For this reason, we should let the person who is using our "Row" component define the movie type that he/she wants to get from Firebase instead of harcoding it in the "Row" component.
>
> - We want something like this.
>
> ```js
> <Row title='Netflix Originals' movieType='netflix-originals' />
> <Row title='Trending Now' movieType='trending-now' />
> <Row title='Top Rated' movieType='top-rated' />
> <Row title='Action Movies' movieType='action-movies' />
> <Row title='Horror Movies' movieType='horror-movies' />
> <Row title='Romance Movies' movieType='romance-movies' />
> <Row title='Documentaries Movies' movieType='documentaries-movies' />
> ```

> 10th NOTE:
> - It is time for "props" comes to play.
>
> - "props" stands for properties.
>
> - "props" could be a single value or an object.
>
> - "props" would be passed from the parent component to the child component.
>
> - We can imagine "props" object is similar to function's parameters.

- Step 12: Define props as parameter for Row function.

```js
function Row(props) {...}
```

- Step 13: Get the value that will be passed from other components and use them in our application.
```js
const { title, movieType } = props;
...
useEffect(() => {
  fetchMovies(movieType);
}, []);
...
<h2>{title}</h2>
```

- Step 14: Pass custom data from "App" component to the "Row" compnent with the following code.

```js
<Row title="Netflix Originals" type="netflix-originals" />
<Row title='Netflix Originals' movieType='netflix-originals' />
<Row title='Trending Now' movieType='trending-now' />
<Row title='Top Rated' movieType='top-rated' />
<Row title='Action Movies' movieType='action-movies' />
<Row title='Horror Movies' movieType='horror-movies' />
<Row title='Romance Movies' movieType='romance-movies' />
<Row title='Documentaries Movies' movieType='documentaries-movies' />
```

> 11th NOTE: 
> - We are almost done ! The question is how to display list of movies on JSX after getting data from Firebase.
>
> - We need to find the way to store the data and make the component be re-rendered after we have movies from Firebase.
>
> - Fortunately, React provides __useState__ to help us achieve that.

> 12th NOTE: 
> - State is an object holds information that may be changed over the lifetime of the component.
>
> - It is private and fully controlled by the component.

- Step 15: We need to import "useState" in "Row" component to define the movies state.

```js
import { useEffect, useState } from "react";
```

- Step 16: Define the "movies" state to store the list of movies after getting data from Firebase.

```js
function Row(props) {
  ...
  const [movies, setMovies] = useState([]);
  ...
}
```

- Step 17: Update "fetchMovies" function to put data to the state.

```js
const fetchMovies = (movieType) => {
  const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
  movieRef.on("value", (snapshot) => {
    const movies = snapshot.val();
    if (movies && movies.length !== 0) {
      // update "movies" state by calling "setMovies" function.
      setMovies(() => movies);
    }
  });
};
```

> 13th NOTE:
> - In the case, we have data in "movies" state, the question is how to display list of movies on JSX. Because we are displaying a long list of hardcoding image tags.
> - We can use map() function in Javascript to display list of data on JSX.

- Step 18: Display data in "movie" state on JSX by using map() function.

```js
function Row(props) {
  ...
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
  ...
}
```

- Step 19: Let's combine everything together.

Row.js

```js
import { useEffect, useState } from "react";

import { firebaseDatabase } from "../../firebase/firebase";

function Row(props) {
  const [movies, setMovies] = useState([]);

  const { title, movieType } = props;

  const leafRoot = 'movies';

  useEffect(() => {
    fetchMovies(movieType);
  }, []);

  const fetchMovies = (movieType) => {
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        setMovies(() => movies);
      }
    });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
```

App.js

```js
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Row from "./components/row/Row";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Header */}
      <Header />
      {/* Header */}
      {/* Row */}
      <Row title='Netflix Originals' movieType='netflix-originals' />
      <Row title='Trending Now' movieType='trending-now' />
      <Row title='Top Rated' movieType='top-rated' />
      <Row title='Action Movies' movieType='action-movies' />
      <Row title='Horror Movies' movieType='horror-movies' />
      <Row title='Romance Movies' movieType='romance-movies' />
      <Row title='Documentaries Movies' movieType='documentaries-movies' />
      {/* End Row */}
    </div>
  );
}

export default App;
```
<a id="apply-react-router"></a>
## __7.6. Apply React Router.__

In fact, Netflix application may contain many pages not just home page. Hence, we should find the efficency way to navigate between pages in our React application. __React Router__ is a powerful routing library which can help us to achieve that.

The following steps will demonstrate how to integrate React Router in our Netflix application and how we re-structure our components to support navigating between pages:

- Step 1: Install "react-router-dom" library by running "npm install --save react-router-dom".


> 14th NOTE:
>
> - We are writing code to build the home page in App.js file.
>
> - In fact, we should not do that. We should create "Home" component to store code of the home page.
>
>- App.js should be used to store common information of the application such as routing, common components (navbar, header, footer, etc) and so on.
>
> - The diagram below demonstrates about how our "Home" component looks like.
>
> <a id="figure29"></a>
> <img src="./md-images/netflix-home1.png" alt="drawing" width="666"/>
>
>Figure 29: Netflix's home component.

- Step 2: Create Home.js file in "components" folder with the following code.

```js
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";

function Home() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Header */}
      <Header />
      {/* Header */}
      {/* Row */}
      <Row title='Netflix Originals' movieType='netflix-originals' />
      <Row title='Trending Now' movieType='trending-now' />
      <Row title='Top Rated' movieType='top-rated' />
      <Row title='Action Movies' movieType='action-movies' />
      <Row title='Horror Movies' movieType='horror-movies' />
      <Row title='Romance Movies' movieType='romance-movies' />
      <Row title='Documentaries Movies' movieType='documentaries-movies' />
      {/* End Row */}
    </div>
  );
}

export default Home;
```

- Step 3: Update App.js file with the following code.

```js
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```
> 15th NOTE:
>
> - If you run the application, the result will be the same.
>
> - As mentioned above, App.js should store common information of the application. In this case, it stores information about routing.
>
> - "Switch" component is similar to switch-case in programming. According to the example above, the application will show the home page to the end user if the current route is '/'
>
> - Following that, we can define many routes in App.js file and specify corresponding component for each route. We will do that in the following section.

<a id="set-up-firebase-authentication"></a>
## __7.7. Set Up Firebase Authentication.__

Before building login page, we need to set up Firebase Authentication first. There are different sign in methods which could be integrated in the application. In this course, we will choose "Email/Password" sign in method. The following steps will describe how to set up that method in Firebase.

- Step 1: Click on "Authentication" option.

<a id="figure30"></a>
<img src="./md-images/firebase21.png" alt="drawing" width="666"/>

Figure 30: Firebase authentication - Step 1.

- Step 2: Click on "Get started" button.

<a id="figure31"></a>
<img src="./md-images/firebase22.png" alt="drawing" width="666"/>

Figure 31: Firebase authentication - Step 2.

- Step 3: Choose "Sign-in method" tab.

<a id="figure32"></a>
<img src="./md-images/firebase23.png" alt="drawing" width="666"/>

Figure 32: Firebase authentication - Step 3.

- Step 4: Click on "Edit" icon on "Email/Password" row.

<a id="figure33"></a>
<img src="./md-images/firebase24.png" alt="drawing" width="666"/>

Figure 33: Firebase authentication - Step 4.

- Step 5: Click on "Enable" toggle button and click on "Save" button.

<a id="figure34"></a>
<img src="./md-images/firebase25.png" alt="drawing" width="666"/>

Figure 34: Firebase authentication - Step 5.

- Step 6: Set up an account for using later, choose "Users" tab and click on "Add User" button.

<a id="figure35"></a>
<img src="./md-images/firebase26.png" alt="drawing" width="666"/>

Figure 35: Firebase authentication - Step 6.

- Step 7: Input user's name and password and click on "Add User" button.

<a id="figure36"></a>
<img src="./md-images/firebase27.png" alt="drawing" width="666"/>

Figure 36: Firebase authentication - Step 7.

- Step 8: After creating a new user successfully, your result should be like this.

<a id="figure37"></a>
<img src="./md-images/firebase28.png" alt="drawing" width="666"/>

Figure 37: Firebase authentication - Step 8.

- Step 9: We need to update "firebase.js" file for later use with the following code.

```js
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_UTL}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`
});

const firebaseDatabase = app.database();
const firebaseAuth = app.auth();

export {
  firebaseDatabase,
  firebaseAuth
};

```

<a id="build-netflix-login-page"></a>
## __7.8. Build Netflix Login Page.__

<a id="figure38"></a>
<img src="./md-images/netflix-login1.png" alt="drawing" width="666"/>

Figure 38. Login page - Netflix.

The above image describes how login page is separated into smaller components. In this case, we have a wrapper component which is called "Login" component. On the other hand, "Nav" component can be reused and "Login Form" component should be created in order to create sign-in form. The following steps will help us achieve that step by step.

- Step 1: Create LoginForm.js in "component/login" folder with the following code.

```js
function LoginForm() {
  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>Sign In</h1>
        <div className="login-body__input mb-16">
          <input type="text" placeholder="Email or phone number" />
        </div>
        <div className="login-body__input">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-body__submit-btn">Sign In</button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span className="login-body__sign-up">Sign up now.</span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
```

- Step 2: Create Login.js file in "components/login" folder with the following code.

```js
import Nav from '../nav/Nav';
import LoginForm from './LoginForm';

function Login () {
  return (
    <div className="main">
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Login Form */}
      <LoginForm />
      {/* End Login Form */}
    </div>
  );
}

export default Login;
```

> 16th NOTE:
> 
> - The best part is about "Nav" component can be reused without creating a new one. It is one of the advantages of React and component based UI.
> 
> - Login component was created. However, how the end user can use it in the web application. We need to set up a new route in App.js so that the end user can access to that route and use the login page.

- Step 3: Add "/login" route in App.js. App.js should look like this.

```js
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```

> 17th NOTE:
>
> - If you run the project and access '/login' route, you can see the login page.
>
> - We have finished dividing the login page into smaller components. The next part is how to detect when the current user clicks on the "Sign In" button.

- Step 4: Replace "Login Form" component with the following code.

```js
function LoginForm() {

  const login = () => {
    console.log('Sign in button was click');
  }

  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>Sign In</h1>
        <div className="login-body__input mb-16">
          <input type="text" placeholder="Email or phone number" />
        </div>
        <div className="login-body__input">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-body__submit-btn" onClick={login}>Sign In</button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span className="login-body__sign-up">Sign up now.</span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
```

> 18th NOTE:
>
> - In the code above, "onClick={login}" was added to the "Sign In" button, "login" function was created. It means that when the current user clicks on the "Sign In" button. "login" function will be triggered and the message will be logged to the console.
>
> - The image below describes the result of the above code.
>
> <a id="figure39"></a>
> <img src="./md-images/netflix-login2.png" alt="drawing" width="666"/>
>
> Figure 39. Login page - 2 - Netflix.
>
> - The next part is to get email and password from input fields and then send to Firebase.

- Step 5: Replace "Login Form" component with the following code.

```js
function LoginForm() {

  const login = () => {
    console.log('Sign in button was click');
  }

  const onEmailChanged = (e) => {
    const updatedEmail = e.target.value;
    console.log(`Updated email: ${updatedEmail}`);
  };

  const onPasswordChanged = (e) => {
    const updatedPassword = e.target.value;
    console.log(`Updated password: ${updatedPassword}`);
  };

  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>Sign In</h1>
        <div className="login-body__input mb-16">
          <input type="text" placeholder="Email or phone number" onChange={onEmailChanged} />
        </div>
        <div className="login-body__input">
          <input type="password" placeholder="Password" onChange={onPasswordChanged} />
        </div>
        <button className="login-body__submit-btn" onClick={login}>Sign In</button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span className="login-body__sign-up">Sign up now.</span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
```

> 19th NOTE:
>
> - "onChanged={onEmailChanged}" was inserted to email field.
>
> - "onChanged={onPasswordChanged}" was inserted to password field.
>
> - "onEmailChanged" and "onPasswordChanged" were created.
>
> - When the current user inputs email. "onEmailChanged" will be triggered.
>
> - When the current user inputs password. "onPasswordChanged" will be triggered.
>
> - What is "e" ? React provides the concept of __Synthetic Event__.
>
> - SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
>
> - The input's value can be get by using __e.target.value__
>
> - If you run the project, the result should look like this.
>
> <a id="figure40"></a>
> <img src="./md-images/netflix-login3.png" alt="drawing" width="666"/>
>
> Figure 40. Login page - 3 - Netflix.
>
> - When the current user is typing email or password. We need to store those values in somewhere else. We should store them in state. It means that when the user changes the input's values, we will update the corresponding state.

- Step 6: Import "useState" and define "email" and "password" state.

```js
import { useState } from 'react';
```

```js
function LoginForm() {
  ...
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  ...
  const onEmailChanged = (e) => {
    const updatedEmail = e.target.value;
    setEmail(() => updatedEmail);
  };

  const onPasswordChanged = (e) => {
    const updatedPassword = e.target.value;
    setPassword(() => updatedPassword);
  };
  ...
}
```

> 20th NOTE:
>
> - Whenever we access "email" state and "password" state, we can get the latest value.
>
> - The remaining task is to send those values to Firebase when the current user clicks on "Sign In" button.

- Step 7: Import "firebaseAuth" from "firebase.js" file and then update "login" function to send "email" state and "password" state to Firebase.

```js
import { firebaseAuth } from '../../firebase/firebase';
```

```js
const login = () => {
  firebaseAuth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log(`signed in user`);
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
}
```
> 21th NOTE:
>
> - if email and password are valid. Firebase would return user's information and vice versa.
>
> - You can do anything you want with that value, for example, store the information in localStorage for using later or something like that.
>
> - In this case, we are trying to show the user's information on console log.
>
> - If you run the code, your result should be like this.
>
> <a id="figure41"></a>
> <img src="./md-images/netflix-login4.png" alt="drawing" width="666"/>
>
> Figure 41. Login page - 4 - Netflix.

<a id="deploy-react-to-firebase"></a>
## __9. Deploy React to Firebase.__

It is time to make our project live on the internet. The following steps will describe how to deploy our application to Firebase.

- Step 1: Change directory to the project's folder and run "npm build" to build production version of the project.

- Step 2: Go to Firebase console and choose "Hosting" option.

<a id="figure42"></a>
<img src="./md-images/firebase29.png" alt="drawing" width="666"/>

Figure 42. Deploy React to Firebase - Step 2.

- Step 3: Click on "Get started" button.

<a id="figure42"></a>
<img src="./md-images/firebase30.png" alt="drawing" width="666"/>

Figure 43. Deploy React to Firebase - Step 3.

- Step 4: Change directory to the project's folder and run "npm install -g firebase-tools" and then click on "Next" button.

<a id="figure43"></a>
<img src="./md-images/firebase31.png" alt="drawing" width="666"/>

Figure 44. Deploy React to Firebase - Step 4.

- Step 5: Change directory to the project's folder and run "firebase login" and "fire init", you can refer to figure 46.

<a id="figure44"></a>
<img src="./md-images/firebase32.png" alt="drawing" width="666"/>

Figure 45. Deploy React to Firebase - Step 5.

<a id="figure46"></a>
<img src="./md-images/firebase33.png" alt="drawing" width="666"/>

Figure 46. Deploy React to Firebase - Step 5.

- Step 6: Deploy the application to Firebase by running "firebase deploy".

<a id="figure47"></a>
<img src="./md-images/firebase34.png" alt="drawing" width="666"/>

Figure 47. Deploy React to Firebase - Step 6.

<a id="figure48"></a>
<img src="./md-images/firebase35.png" alt="drawing" width="666"/>

Figure 48. Deploy React to Firebase - Step 6.

> Final NOTE:
> -  Now you can access the url on cmd to view your result.
>
> - In my case, It is https://netflix-clone-e79a1.web.app

<a id="summary"></a>
## __Summary__

- JSX (Javascript XML): helps us to write Javascript along with HTML.

- React Elements: describe what would be appeared on the screen.

- React Component: Small pieces of UI which could be reusable and combined together to build the application.

- useEffect: performs side effect in the application, for example, interact with the apis, execute asynchronous operattions and so on.

- useState: defines the state in the application.

- Props: passed from the parent component to the child component, its syntax is similar to HTML attribute.

- React Router: useful routing library can be used to navigate between pages.

Thank you so much for taking the course. I hope that you could understand about important concepts in React and you can build many real-life projects by using React (as front-end) and Firebase (as back-end) in order to solve many problems and make our life become better.

<a id="useful-resources-to-learn-react"></a>
## __Useful Resources to Learn React.__

[1]. https://reactjs.org/docs/getting-started.html.

<a id="references"></a>
## __References__

[1]. https://reactjs.org/docs/getting-started.html. \
[2]. https://firebase.google.com/docs/database. \
[3]. https://firebase.google.com/docs/auth/web/password-auth. \
[4]. https://firebase.google.com/docs/hosting.
