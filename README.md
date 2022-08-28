<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jeremaquai/repo_name">
    <img src="js-logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Challenge Project: Mysterious Organism</h3>

  <p align="center">
    Codecademy Challenge Project to practice working with object factory functions and methods
    <br />
    <a href="https://github.com/jeremaquai/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jeremaquai/repo_name">View Demo</a>
    ·
    <a href="https://github.com/jeremaquai/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/jeremaquai/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `jeremaquai`, `repo_name`, `twitter_handle`, `jeremiah-sparks`, `gmail.com`, `jeremaquai`, `Challenge Project: Mysterious Organism`, `project_description`

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You will need to have Node.js installed on your computer in order to use this code.

### Prerequisites

- Node.js

### Installation

1. Make sure that you have Node.js installed on your computer
    ```sh
    node -v
    ```
2. If Node.js is not already installed on your computer it can be downloaded and installed from [Nodejs.org](https://nodejs.org/en/)

3. Clone the repo
   ```sh
   git clone https://github.com/jeremaquai/repo_name.git
   ```
4. Open main.js with your text editor to inspect the code and play around with it

5. Enjoy or change the code to suite your own purposes 

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] **returnRandBase()**
    - randomly returns one of the four DNA bases
    - helper function provided by Codecademy
- [x] **mockUpStrand()**
    - returns and array containing 15 random bases using returnRandBase() to represent a single strand of DNA with 15 bases
    - helper function provided by Codecademy
- [x] **pAequorFactory()**
    - a factory function that takes in two parameters, specimenNum and dna and returns an object that contains the properties specimenNum and dna
    - [x] **.mutate()**
        - method that randomly selects one of the bases in the dna strand for the object and changes it to another base and then returns the new dna string to simulate a mutation in the organism represented by the object
    - [x] **compareDNA()**
        - method that takes one parameter, another pAequor object, and compares the dna of the two objects and prints a message that states the percentage of DNA that the two objects have in common
    - [x] **willLikelySurvive()**
        - method that goes through the dna of the object and determines in at least 60% of the dna strand is either 'C' or 'G', if so the method returns true otherwise it returns false
    - [x] **complementStrand()**
        - method that iterates through the objects dna strand and returns another sting of dna that would be the sequence to bind with the original dna strand to form a double helix dna strand 

See the [open issues](https://github.com/jeremaquai/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name  - jeremaquai@gmail.com.com

Project Link: [https://github.com/jeremaquai/repo_name](https://github.com/jeremaquai/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jeremaquai/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/jeremaquai/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jeremaquai/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/jeremaquai/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/jeremaquai/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/jeremaquai/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/jeremaquai/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/jeremaquai/repo_name/issues
[license-shield]: https://img.shields.io/github/license/jeremaquai/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/jeremaquai/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jeremiah-sparks
[product-screenshot]: screenshot.png
