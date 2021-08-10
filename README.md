<h1><strong>Hi-Lo Card Game</strong></h1>
<img src="./assets/img/AmIResponsive.jpg" style="max-width: 100%">
<br>
<p>View the live project <a href="https://byates1289.github.io/Hi-Lo-MS2">here.</a></p>

<p>My milestone 2 project for Code Institute is a Higher or Lower card game in which you have to decide whether the next card will be higher or lower than the last. There is betting feature which is used to increase your wallet total, which is what is used to generate your score at the end of the game. It is designed to be simplistic and engaging.</p>

<h2>User Experience (UX)</h2>
<ul>
    <li>User stories</li>
        <ul>
            <li>First Time Visitor Goals</li>
                <ol type="a">
                    <li>As a First Time Visitor, I want to understand how to play the card game Hi-Lo.</li>
                    <li>As a First Time Visitor, I want to play a game which I find enjoyable and simple to play.</li>
                    <li>As a First Time Visitor, I want to play a game with an element of risk</li>
                </ol>
            <li>Returning Visitor Goals</li>
                <ol type="a">
                    <li>As a Returning Visitor, I want to try and better my previous high-score.</li>
                    <li>As a Returning Visitor, I want to feel confident taking more calculated risks.</li>
                </ol>                       
        </ul>
    <li>Design</li>
        <ul>
            <li>Colour Scheme</li>
                <ul>
                    <li>I've tried to theme the game as if it was being played at a Poker table at a Casino. There are a few variations of Green, Red and White which are largely from the images I've used in this project.</li>                         
                </ul>
            <li>Typography</li>
                <ul>
                    <li>The Croissant One font is the main font used throughout this project with Cursive as the fallback font in case for any reason the font isn't being imported into the site correctly. The Roboto font is used within the Rules modal and SweetAlert2 popup.</li>
                </ul>
            <li>Imagery</li>
                <ul>
                    <li>The images used really make the project feel authentic. The playing cards (especially the Royals), look particularly great! The background is a subtle image displaying the cards suits and goes well with the Poker table theme I was going for.</li>
                </ul>
            <li>Wireframes</li>
                <ul>
                    <li>Project Wireframe - <a href="/">View</a></li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<h2>Features</h2>
<ul>
    <li>Responsive on all device sizes</li>
    <li>Interactivity for users. Higher or Lower buttons aswell as a betting feature.</li>
    <li>Saving of High-score</li>
</ul>
<h2>Technologies Used</h2>
<h3>Languages Used</h3>
<ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
</ul>
<h3>Frameworks, Libraries & Programs Used</h3>
<ol>
    <li><a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Bootstrap 4</a></li>
        <ul>
            <li>Bootstrap was used to assist with the responsiveness and styling of the website.</li>
        </ul>
    <li><a href="https://ianlunn.github.io/Hover/">Hover.css</a></li>
        <ul>
            <li>Hover.css was used on the Higher, Lower and Repeat Bet buttons and also the £20, £50 and £100 betting chips.</li>
        </ul>
    <li><a href="https://fonts.google.com/">Google Fonts</a></li>
        <ul>
            <li>Google Fonts was used to import the 'Croissant One' and 'Roboto' fonts into my project. 'Croissant One' was used for the majority of body text, whilst 'Roboto' was used for the rules modal and alert popup.</li>
        </ul>
    <li><a href="https://fontawesome.com/">Font Awesome</a></li>
        <ul>
            <li>Font Awesome was used to display a restart icon once the game has ended.</li>
        </ul>
    <li><a href="https://jquery.com/">jQuery</a></li>
        <ul>
            <li>jQuery is a dependency of the Bootstrap framework and helps with responsive design. </li>
        </ul>
    <li><a href="https://sweetalert2.github.io/">SweetAlert2</a></li>
        <ul>
            <li>SweetAlert2 was used to style the standard JavaScript alert popup.</li>
        </ul>
    <li><a href="https://git-scm.com/">Git</a></li>
        <ul>
            <li>Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.</li>  
        </ul>
    <li><a href="https://github.com/">GitHub</a></li>
        <ul>
            <li>GitHub is used to store the projects code after being pushed from Git.</li>
        </ul>
    <li><a href="https://balsamiq.com/">Balsamiq</a></li>
        <ul>
            <li>Balsamiq was used to create the wireframes during the design process.</li>
        </ul>
</ol>
<h2>Testing</h2>
<p>The W3C Markup Validator, W3C CSS Validator and JSHint services were used to validate code to ensure there were no syntax errors in the project.</p>
<ul>
    <li>W3C Markup Validator - <a href="https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/docs/HTML.pdf">Results</a></li>
    <li>W3C CSS Validator - <a href="https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/docs/CSS.pdf">Results</a></li>
    <li>JSHint - <a href="https://github.com/BYates1289/Hi-Lo-MS2/blob/master/assets/docs/JSHint.pdf">Results</a></li>
</ul>
<h3>Testing User Stories from User Experience (UX) Section</h3>
<ul>
    <li><strong>First Time Visitor Goals</strong></li>
        <ol type="I">
            <li>As a First Time Visitor, I want to find out how to play the card game Hi-Lo.</li>
                <ol type="a">
                    <li>Upon entering the site, users are automatically greeted with a clean Rules modal, which specifies the rules of the game and how to place a bet.</li>
                    <li></li>
                    <li></li>
                </ol>
            <li>As a First Time Visitor, I want to be able to enjoy the card game of Hi-Lo without a complicated interface.</li>
                <ol type="a">
                    <li>The site was designed to have a minimalistic look which would not feel too confusing for users.</li>
                    <li>All things displayed within the project all serve a purpose and are easily identifiable as to what their job is.</li>
                    <li>The authentic colour scheme and card images used ensure the game feels more real and enjoyable.</li>
                </ol>
            <li>As a First Time Visitor, I want to play a game of Hi-Lo with an element of risk.</li>
                <ol type="a">
                    <li>The betting feature was implemented for exactly this reason. If you are confident with your selection, you can increase your betting stake up to the maximum of £1000.</li>
                    <li>Users can make use of the Repeat Bet button after a large stake for an increased risk. You could use this throughout the game instead changing your bet amount each turn.</li>
                </ol>
        </ol>
    <li>Returning Visitor Goals</li>
        <ol type="I">
            <li>As a Returning Visitor, I want to find the new programming challenges or hackathons.</li>
                <ol type="a">
                    <li>These are clearly shown in the banner message.</li>
                    <li>They will be directed to a page with another hero image and call to action.</li>
                </ol>
            <li>As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.</li>
                <ol type="a">
                    <li>The navigation bar clearly highlights the "Contact Us" Page.</li>
                    <li>Here they can fill out the form on the page or are told that alternatively they can message the organisation on social media.</li>
                    <li>The footer contains links to the organisations Facebook, Twitter and Instagram page as well as the organization's email.</li>  
                    <li>Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.</li>
                    <li>The email button is set up to automatically open up your email app and autofill there email address in the "To" section.</li>
                </ol>
            <li>As a Returning Visitor, I want to find the Facebook Group link so that I can join and interact with others in the community.</li>
                <ol type="a">
                    <li>The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.</li>
                    <li>Alternatively, the user can scroll to the bottom of the Home page to find the Facebook Group redirect card and can easily join by clicking the "Join Now!" button which like any external link, will open in a new tab to ensure they can get back to the website easily.</li>
                    <li>If the user is on the "Our Favourites" page they will also be greeted with a call to action button to invite the user to the Facebook group. The user is incentivized as they are told there is a weekly favourite product posted in the group.</li>
                </ol>
        </ol>
    <li>Frequent User Goals</li>
        <ol type="I">
            <li>As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.</li>
                <ol type="a">
                    <li>The user would already be comfortable with the website layout and can easily click the banner message.</li>
                </ol>
            <li>As a Frequent User, I want to check to see if there are any new blog posts.</li>
                <ol type="a">
                    <li>The user would already be comfortable with the website layout and can easily click the blog link.</li>
                </ol>
            <li>As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.</li>
                <ol type="a">
                    <li>At the bottom of every page their is a footer which content is consistent throughout all pages.</li>
                    <li>To the right hand side of the footer the user can see "Subscribe to our Newsletter" and are prompted to Enter their email address.</li>
                    <li>There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.</li>
                </ol>
        </ol>
</ul>
<h3>Further Testing</h3>
<ul>
    <li>The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.</li>
    <li>The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhone X.</li>
    <li>A large amount of testing was done to ensure that all pages were linking correctly.</li>
    <li>Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.</li>
</ul>
<h3>Known Bugs</h3>
<ul>
    <li>On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.</li>
    <li>On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.</li>
</ul>
<h2>Deployment</h2>
<h3>GitHub Pages</h3>
<p>The project was deployed to GitHub Pages using the following steps...</p>
<ol>
    <li>Log in to GitHub and locate the GitHub Repository.</li>
    <li>At the top of the Repository (not top of page), locate the "Settings" Button on the menu.</li>
    <li>Scroll down the Settings page until you locate the "GitHub Pages" Section.</li>
    <li>Under "Source", click the dropdown called "None" and select "Master Branch".</li>
    <li>The page will automatically refresh.</li>
    <li>Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.</li>
</ol>
<h3>Forking the GitHub Repository</h3>
<p>By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...</p>
<ol>
    <li>Log in to GitHub and locate the GitHub Repository.</li>
    <li>At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.</li>
    <li>You should now have a copy of the original repository in your GitHub account.</li>
</ol>
<h3>Making a Local Clone</h3>
<ol>
    <li>Log in to GitHub and locate the GitHub Repository.</li>
    <li>Under the repository name, click "Clone or download".</li>
    <li>To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.</li>
    <li>Open Git Bash</li>
    <li>Change the current working directory to the location where you want the cloned directory to be made.</li>
    <li>Type <code>git clone</code>, and then paste the URL you copied in Step 3.</li><br>
    <div class="snippet-clipboard-content position-relative"><pre><code>$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY</pre></code></div>
    <li>Press Enter. Your local clone will be created.</li><br>
    <div class="snippet-clipboard-content position-relative">    
    <pre><code>$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY    
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.</pre></code></div>
</ol>
<p>Click <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository#cloning-a-repository-to-github-desktop">here</a> to retrieve pictures for some of the buttons and more detailed explanations of the above process.</p>
<h2>Credits<h2>
<h3>Code</h3>
<ul>
    <li>The full-screen hero image code came from this StackOverflow post.</li>
    <li>Bootstrap 4: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.</li>
    <li>MDN Web Docs : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found Here</li>
</ul>
<h3>Content</h3>
<ul>
    <li>All content was written by the developer.</li>
</ul>
<h3>Media</h3>
<ul>
    <li>The Logo used was downloaded from <a href="https://www.pikpng.com/transpng/iRmJwow/">here</a></li>
    <li>Playing cards were downloaded from <a href="http://acbl.mybigcommerce.com/52-playing-cards/">here</a></li>
</ul>
<h3>Acknowledgements</h3>
<ul>
    <li>My Mentor for continuous helpful feedback.
    <li>Tutor support at Code Institute for their support.
</ul>