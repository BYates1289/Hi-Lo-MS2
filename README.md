# **Hi-Lo Card Game**

![](./assets/img/testing/AmIResponsive.jpg)

# Product Description

My milestone 2 project for Code Institute is a Higher or Lower card game in which you have to decide whether the next card will be higher or lower than the last. There is betting feature which is used to increase your wallet total, which is what is used to generate your score at the end of the game. It is designed to be simplistic and engaging.

View the live project [here.](https://byates1289.github.io/Hi-Lo-MS2)

# Table of Contents

*   [User Experience (UX)](#user-experience)

*   [User Stories](#user-stories)

*   [Design](#design)

*   [Colour Scheme](#colour-scheme)
*   [Typography](#typography)
*   [Imagery](#imagery)
*   [Wireframes](#wireframes)

*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Frameworks Used](#frameworks)
*   [Testing](#testing)

*   [Code Verification](#code-verification)
*   [Lighthouse](#lighthouse)
*   [Speed Test](#speed-test)
*   [Cross-Browser](#cross-browser)
*   [Responsive Testing](#responsive)
*   [Testing User Stories](#testing-user-stories)

*   [Further Testing](#further-testing)
*   [Features Left To Implement](#features-to-implement)
*   [Known Bugs](#known-bugs)
*   [Deployment](#deployment)

*   [GitHub Pages](#github-pages)
*   [Forking the GitHub Repository](#forking-repo)
*   [Making a Local Clone](#making-local-clone)

*   [Credits](#credits)
*   [Code](#code)
*   [Content](#content)
*   [Media](#media)
*   [Acknowledgements](#acknowledgements)

## User Experience (UX)

*   User Stories

*   First Time Visitor Goals

1.  As a First Time Visitor, I want to understand how to play the card game Hi-Lo.
2.  As a First Time Visitor, I want to play a game which I find enjoyable and simple to play.
3.  As a First Time Visitor, I want to play a game with an element of risk.

*   Returning Visitor Goals

1.  As a Returning Visitor, I want to try and better my previous high-score.
2.  As a Returning Visitor, I want to feel confident taking more calculated risks.

*   Design

*   Colour Scheme

*   I've tried to theme the game as if it were being played at a Poker table at a casino. I think the colours used in this project compliment this theme.

*   Typography

*   The Croissant One font is the main font used throughout this project with Cursive as the fallback font in case for any reason the font isn't being imported into the site correctly. The Roboto font is used within the Rules modal and SweetAlert2 popup.

*   Imagery

*   The images used really make the project feel authentic. The playing cards (especially the Royals), look particularly great! The background is a subtle image displaying the cards suits and goes well with the Poker table theme I was going for.

*   Wireframes

*   Project Wireframe - [View](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/docs/Wireframe.pdf)

*   Target Audience

*   Teenagers to adults.
*   Users with an interest in card games.
*   Users with an interest in gambling.

## Features

*   Responsive on all device sizes.
*   Interactivity for users. Higher or Lower buttons aswell as a betting feature.
*   Rules modal that pops up on page load.
*   Saving of High-score into Local Storage.

## Technologies Used

### Languages Used

*   HTML5
*   CSS3
*   JavaScript

### Frameworks, Libraries & Programs Used

1.  [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

*   Bootstrap was used to assist with the responsiveness and styling of the website.

3.  [Hover.css](https://ianlunn.github.io/Hover/)

*   Hover.css was used on the Higher, Lower and Repeat Bet buttons and also the £20, £50 and £100 betting chips.

5.  [Google Fonts](https://fonts.google.com/)

*   Google Fonts was used to import the 'Croissant One' and 'Roboto' fonts into my project. 'Croissant One' was used for the majority of body text, whilst 'Roboto' was used for the rules modal and alert popup.

7.  [Font Awesome](https://fontawesome.com/)

*   Font Awesome was used to display a restart icon once the game has ended.

9.  [jQuery](https://jquery.com/)

*   jQuery is a dependency of the Bootstrap framework and helps with responsive design.

11.  [SweetAlert2](https://sweetalert2.github.io/)

*   SweetAlert2 was used to style the standard JavaScript alert popup.

13.  [TinyPNG](https://tinypng.com/)

*   TinyPNG was used to compress all images, resulting in faster loading times.

15.  [Git](https://git-scm.com/)

*   Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

17.  [GitHub](https://github.com/)

*   GitHub is used to store the projects code after being pushed from Git.

19.  [Balsamiq](https://balsamiq.com/)

*   Balsamiq was used to create the wireframes during the design process.

21.  [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

*   Absolutely essential tool for debugging code.

23.  [VS Code](https://code.visualstudio.com/)

*   Used for testing offline, when internet connectivity wasn't always available due to travel.

## Testing

### Code Verification

The W3C Markup Validator, W3C CSS Validator and JSHint services were used to validate code to ensure there were no syntax errors in the project.

*   W3C Markup Validator - [Results](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/docs/HTML.pdf)
*   W3C CSS Validator - [Results](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/docs/CSS.pdf)
*   JSHint - [Results](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/docs/JSHint.pdf)

### Lighthouse

Performance of the site was analysed by [Lighthouse](https://developers.google.com/web/tools/lighthouse). Here are the results.

![](./assets/img/testing/Lighthouse.JPG)

### Speed Test

Site speed test was performed by [GTMetrix](https://gtmetrix.com/). Here are the results.

![](./assets/img/testing/PageLoadTime.JPG)

Prior to the above, I was informed in a previous test that my images were not optimised and that should compress them. I used [TinyPNG](https://tinypng.com/) for this, which resulted in 60% better performance.

### Cross Browser Testing

This project was tested with all major browsers and displayed as expected. Results can be seen here.

*   [Google Chrome](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Chrome.JPG)
*   [Firefox](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Firefox.JPG)
*   [Safari](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Safari.JPG)
*   [Opera](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Opera.JPG)
*   [Microsoft Edge](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Edge.JPG)
*   [Tor](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Tor.jpg)

I did experience UI issues using Internet Explorer 11\. As can be seen [here](#). Given a little more time, I would have researched a fix.

### Responsive Testing

Responsive testing was carried with Chrome Dev Tools and [BrowserStack](https://www.browserstack.com/). The results for some popular devices can be seen below.

*   [iPhone X](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/iPhoneX.JPG)
*   [iPhone 8 Plus](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/iPhone%208%20Plus.JPG)
*   [iPhone SE](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/iPhone%20SE.JPG)
*   [Pixel 3 XL](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Pixel%203%20XL.JPG)
*   [Galaxy S9 Plus](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Galaxy%20S9%20Plus.JPG)
*   [Galaxy Note 10](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Galaxy%20Note%2010.JPG)
*   [iPad Pro](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/iPad%20Pro.JPG)
*   [iPad Mini](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/iPad%20Mini.JPG)
*   [Galaxy Tab S4](https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/img/testing/Galaxy%20Tab%20S4.JPG)

### Testing User Stories from User Experience (UX) Section

*   First Time Visitor Goals

1.  As a First Time Visitor, I want to find out how to play the card game Hi-Lo.

1.  Upon entering the site, users are automatically greeted with a clean Rules modal, which specifies the rules of the game and how to place a bet.

3.  As a First Time Visitor, I want to be able to enjoy the card game of Hi-Lo without a complicated interface.

1.  The site was designed to have a minimalistic look which should not feel too confusing for users.
2.  All things displayed within the project all serve a purpose and are easily identifiable as to what their job is.
3.  The authentic colour scheme and card images used ensure the game feels more real and enjoyable.

*   Returning Visitor Goals

1.  As a Returning Visitor, I want to better my High-Score.

1.  Your High-Score will be shown to you after each game of Hi-Lo.
2.  If you better your High-Score, it will overwrite the previous one and will remain saved into local storage until the browsers cache has been cleared.

3.  As a Returning Visitor, I want to take more calculated risks when playing Hi-Lo.

1.  If you are confident in your selections you can increase your bet up to the maximum stake of £1000 each turn.
2.  Users can make use of the Repeat Bet button after a large stake for an increased risk. You could use this throughout the game instead changing your bet amount each turn.

### Further Testing

*   The website was viewed on a variety of devices such as Desktop, Laptop, Surface Pro 6, iPad Air 2 & iPhone X.
*   I did a large amount of offline testing using VS Code when creating this project and it's content.
*   Family members were asked to review the site and to point out any bugs and/or user experience issues. One feedback I did get from my 7 year old son, was that it is unfair that it is not real money! :grin:

### Features Left To Implement

*   I will improve UX by adding a flip animation to the next card.
*   I will add a card countdown so that users can see how many cards are left to be dealt.
*   I would like to add a global high score leaderboard, so users can compare their high-scores.
*   Ensure compatibility for IE11.

### Known Bugs

*   Starting a new game refreshes the page causing the Rules modal to reappear.
*   Site does not display correctly within Internet Explorer 11.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1.  Log in to GitHub and locate the GitHub Repository.
2.  At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3.  Scroll down the Settings page until you locate the "GitHub Pages" Section.
4.  Under "Source", click the dropdown called "None" and select "Master Branch"
5.  The page will automatically refresh.
6.  Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1.  Log in to GitHub and locate the GitHub Repository.
2.  At the top of the Repository, just above the "Settings" Button on the menu, locate the "Fork" Button.
3.  You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1.  Log in to GitHub and locate the GitHub Repository.
2.  Under the repository name, click "Clone or download"
3.  To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4.  Open Git Bash.
5.  Change the current working directory to the location where you want the cloned directory to be made.
6.  Type `git clone`, and then paste the URL you copied in Step 3.

<div class="snippet-clipboard-content position-relative">

    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

</div>

9.  Press Enter. Your local clone will be created.

<div class="snippet-clipboard-content position-relative">

    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY    
    > Cloning into `CI-Clone`...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remove: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.

</div>

Click [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

*   Bootstrap 4: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.
*   SweetAlert2 for their beautifully styled alert popups.
*   Hoverr.css for the _hvr-grow_ style for my interactive buttons.

### Content

*   All content was written by the developer.

### Media

*   The Logo was downloaded from [https://www.pikpng.com](https://www.pikpng.com/transpng/iRmJwow/)
*   Playing cards were downloaded from [http://acbl.mybigcommerce.com](http://acbl.mybigcommerce.com/52-playing-cards/)
*   Poker chips were downloaded from [http://pngimg.com](http://pngimg.com/images/sport/poker/)
*   Background image was downloaded from [https://www.shutterstock.com](https://www.shutterstock.com/image-vector/poker-table-background-green-color-vector-1645872547).

### Acknowledgements

*   My work colleagues at [SG World](https://www.sgworld.com/), for their insightful feedback/pointers and also for my paid subscription to [Pluralsight](https://www.pluralsight.com/).
*   [Pluralsight](https://www.pluralsight.com/), [Udemy](https://www.udemy.com/) and [YouTube](https://youtube.com) for their extremely good course materials.
*   The [Code Institute](https://codeinstitute.net/) Slack community and their wonderfully helpful nature.