<a name="readme-top"></a>

<div align="center">



  <h1><b>Refactor book lectures</b></h1>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)

  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
  - [Clone](#clone)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

# 📖 Rails Redux app 



## 🛠 Built With <a name="built-with"></a>

Ruby on Rails, React, Redux



### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)">Ruby</a></li>
<li><a href="https://guides.rubyonrails.org/active_record_basics.html#what-is-active-record-questionmark">Active Record Basics
</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

This is a good template for applications that uses both rails and react redux.

### Project requirements

 - Create a new Rails app called 'hello-rails-react'.
      - Use the command `rails new -j webpack my_new_rails_app` as described in the previous lesson's tutorial.
 - Verify that the `jsbundling-rails` gem is added to your Gemfile.
 - Initialize your project with Git.
 - Install needed node dependencies as described in the previous lesson's tutorial.
 - Create a `babel.config.js` in the root folder of your project as described in the previous lesson's tutorial.
 - Update `webpack.config.js` to include the babel loader as described in the previous lesson's tutorial.
 - Make sure that your project has a Postgres database set up. 
 - Create a table for storing your messages and create 5 different greetings. 
 - Create an API endpoint that selects a random greeting from your table (you will need a controller with an action and Rails route).
 - Create a static view that will be the root of your app.


---------

- Create the `App` component with react-router and render it in your static view.
- Create the `Greeting` component that will display a greeting. Set it up as a route in your App component.
- Create a store, an action, and a reducer that will connect to your API endpoint to get the random greeting.
- Display the random greeting in your `Greeting` component.

### Devise

As mentioned above, Devise is an authentication solution for Rails. In general, it will have the same or a pretty similar, configuration on every app.

- [Devise: getting started](https://github.com/heartcombo/devise#getting-started)
- [Using devise in your application](https://hackernoon.com/using-devise-in-your-ruby-on-rails-application-a-step-by-step-guide-m92i3y5s)


### Prerequisites (an email account)

in order to run this project you need:

gem install rails

To run this application you need an email account properly configured. You need the 2-step verification for your gmail account for example as is done here:

https://help.warmupinbox.com/en/articles/4934806-configure-for-google-workplace-with-two-factor-authentication-2fa


and also and App password, you can generete it in the following link

https://myaccount.google.com/apppasswords?utm_source=google-account&utm_medium=myaccountsecurity&utm_campaign=tsv-settings&rapt=AEjHL4PWzrboEKqAJ1-uFiT_jc_JM7D04bZJ4RO6XgHr0kfA3EVo-zMEW8QSMS-wHxDfRHi83r9D_pwiNb9lH5DyMko0upx3EA


Then you can change the password and email in the file  
./config/environment.rb 
with your account information:

    user_name:      'edahigure@gmail.com',
    password:       'iewencoweo3892',
    domain:         'localhost:3000',
    address:       'smtp.gmail.com',
    port:          '587',
    authentication:  "plain",
    enable_starttls_auto: true

and also line 29 of file ./config/environments/initializers/devise.rb 
by
config.mailer_sender = 'edahigure@gmail.com'    


Watch this useful video to know how to configure an email confirmation in rails

https://www.youtube.com/watch?v=sVJRkTxqlSQ


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

in order to run this project you need:

gem install rails




## Getting Started

To get a local copy up and running follow these simple example steps.

### Clone <a name="clone"> Setup</a>

Clone this repository to your desired folder:

```sh
  git clone https://github.com/edahigure/budget-app.git
```
To install the necessary dependencies, you should run:


```
bundler install
```

```
 npm run build
```

## 🤖 Available Scripts <a name="available-scripts"></a>

In the project directory, you can run:

```
rubocop -A
```

To fix all Linter error automatically


## Usage 

To run the project, execute the following command:
```
  rails server
``` 

and put the url of your localhost

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- AUTHOR -->

## 👥 Author <a name="authors"></a>


👤 **Edahi Antonio Gutiérrez Reyes**

- GitHub: [@edahigure](https://github.com/edahigure)
- Twitter: [@edahigure](https://twitter.com/edahigure)
- LinkedIn: [edahigure](https://www.linkedin.com/in/edahigure/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/edahigure/Recipe-app/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project please let us know

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Thanks to microverse to asign us the homework
<br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

- **Is there any restriction to adapting the app to other purpose?**

  - No problem.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



