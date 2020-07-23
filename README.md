<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Gym Manager
</h3>
<h4 align="center">
	🚧  Project in progress...  🚧
</h4>
<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

# Gym Manager
![Gym Manager](images/instructor_creation.png)

# :bookmark_tabs: Index

  - [:clipboard: About](#clipboard-about)
    - [:white_check_mark: Features](#white_check_mark-features)
  - [:computer: Technologies](#computer-technologies)
  - [:computer: Dependencies](#computer-dependencies)
  - [Requirements](#requirements)
  - [:file_folder: How to install](#file_folder-how-to-install-and-use)

---

## :clipboard: About
This application is in development. The website has one goal - allow academies
to manage their users and instructors, and have a better overview of all registered members.

Users can edit their own information. It's based on the project developed during the classes from Rocketseat.
This project and readme.md, will be updated according to the project evolution.

---

### :white_check_mark: Features
* Instructors

- [x] Create instructors
- [x] Edit instructors
- [x] Show instructors
- [ ] Delete instructors

* Members

- [ ] Create members
- [ ] Edit members
- [ ] Show members
- [ ] Delete members

---
## :computer: Technologies
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://www.javascript.com/)
* [NodeJs](https://www.nodejs.org/)

---
## :computer: Dependencies
* [Express](https://expressjs.com/pt-br/)
* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [Nodemon](https://nodemon.io/)
* [Browser Sync](https://browsersync.io/)

---

## Requirements
To execute this project, you need [Git](https://git-scm.com/) and [NodeJs](https://nodejs.org/en/) installed in your device.
It's recommended to use a code editor like [VsCode](https://code.visualstudio.com/).

---

## :file_folder: How to install and use
* First clone the repository with the command below.
```bash
    # Using Git bash, clone the repository
    $ git clone https://github.com/Guilherme-A-Santos/gym-manager.git
```

* After this, enter in the project main folder.

```bash
    # Changing directory in the terminal/CMD
    $ cd gym-manager
```
* Then install all dependencies using the command `npm install`.

```bash
    # Installing all dependencies
    $ npm install
```

* In a terminal, use the command `npm start` to allow the project to run.

```bash
    # Starting the project
    $ npm start
```

* Then open your browser (Google Chrome is the most recommended) and type in url *localhost:5000*

```bash
    # The project will run in the port:3000 if you're using browser-sync

    # You can acess too using the port:5000
```


*P.S: Some buttons aren't working yet, like the button that allows to edit a user. But you can use the routes in url.*
*Examples: http://localhost:5000/instructors/create, http://localhost:5000/instructors/AN_USER_ID/edit and*
*http://localhost:5000/instructors/AN_USER_ID/*

