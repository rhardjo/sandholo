# Sand Holo Experience

Created by Rano Hardjosemito, Sem van Hoogstraten and Mattia Vorstenbosch during their minor Meaningful Data Design.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for a working Sand Holo server.

### Prerequisites

You will need:

An Arduino with firmata installed * [Firmata code](https://github.com/firmata/arduino#usage) - Firmata instructions
Node.js * [NodeJS](www.nodejs.org) - Download here
A Sand Holo installation
A few pc fans
Breadboard, wires and around 4 MOSFETS
The video (file size too big for github) * [Video Link](https://www.mediafire.com/?vap4f13uzf2hqgx) - Mediafire link with video

### Installing

Create a nice folder where we can store our files.

```
mkdir SandHolo
cd SandHolo
```

Lets download our files.

```
$ git clone https://github.com/rhardjo/sandholo
```

Install all dependencies.

```
npm install
```

Thats it!

## Running the server

While in the sand holo directory enter the following command

```
npm start
```

In your web browser go to

```
localhost:8888
```

It should run in your browser now.

## Built With

* [Express](http://expressjs.com/en/4x/api.html) - Makes it a bit easier
* [Socket.io](http://socket.io/docs/) - For communication between browser and Arduino
* [Johnny-Five](http://johnny-five.io/api/) - To control the Arduino with javascript
* Lots of love

## Authors

* **Rano Hardjosemito** - *Coding coding coding and serial communication* - [rhardjo](https://github.com/rhardjo)
* **Mattia Vorstenbosch** - *Coding and After Effects* - [iPrime](https://github.com/iPrime)
* **Sem van Hoogstraten** - *Construction and planning* - [semvh](https://github.com/semvh)


## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
