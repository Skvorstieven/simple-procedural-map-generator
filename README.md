<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/Skvorstieven/simple-procedural-map-generator">
    <img src="https://raw.githubusercontent.com/Skvorstieven/simple-procedural-map-generator/main/src/assets/images/logo.png" alt="Logo" width="400">
  </a>
  <h3 align="center">Simple procedural map generator</h3>
  <p align="center">
    Simple procedural map generator using React Three fiber.
    <br />
    <a href="https://codesandbox.io/p/github/Skvorstieven/simple-procedural-map-generator/main">View Demo</a>
    ·
    <a href="https://github.com/Skvorstieven/simple-procedural-map-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/Skvorstieven/simple-procedural-map-generator/issues">Request Feature</a>
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
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The goal for me in this project is to get a better grasp of TypeScript and React Three Fiber by creating a simple procedural map generator.
<br />
Right now it uses the simplex noise algorithm to generate the height map and then uses it to generate hexagons.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![TypeScript][TypeScript]][TypeScript-url]
* [![React][React.js]][React-url]
* [![Vite][Vite]][Vite-url]
* [![Three.js][Three.js]][Three-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/Skvorstieven/simple-procedural-map-generator.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   npm start
   ```
   or start a dev server with hot reload
   ```sh
   npm run dev
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES 
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

- [x] Use instances for hexagons or merge them to improve performance
- [x] Make so it doesn't refresh hexagons on every control change
- [x] Host somwhere a demo
- [x] Create different biomes
- [ ] Add "Generate new" button
- [ ] Add textures to hexagons
- [ ] Use shaders for water(maybe add physics?)
- [ ] Add additional objects spawning on tiles

<!-- See the [open issues](https://github.com/Skvorstieven/simple-procedural-map-generator/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Stepan Skvortsov - skvotstieven@yandex.ru

Project Link: [https://github.com/Skvorstieven/simple-procedural-map-generator](https://github.com/Skvorstieven/simple-procedural-map-generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I've got the idea from [Three.js in practice by **Irradiance** on YouTube](https://www.youtube.com/watch?v=HsCYEA_UuZA&list=PLWP0narTpO8lAmalqspXgv-x1pq9CHnvR&pp=iAQB), but i'm trying to build it using React Three Fiber, and add some features that i think would be useful.

For the onscreen controls i've used [Leva by **pmndrs**](https://github.com/pmndrs/leva).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Skvorstieven/simple-procedural-map-generator.svg?style=for-the-badge
[contributors-url]: https://github.com/Skvorstieven/simple-procedural-map-generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Skvorstieven/simple-procedural-map-generator.svg?style=for-the-badge
[forks-url]: https://github.com/Skvorstieven/simple-procedural-map-generator/network/members
[stars-shield]: https://img.shields.io/github/stars/Skvorstieven/simple-procedural-map-generator.svg?style=for-the-badge
[stars-url]: https://github.com/Skvorstieven/simple-procedural-map-generator/stargazers
[issues-shield]: https://img.shields.io/github/issues/Skvorstieven/simple-procedural-map-generator.svg?style=for-the-badge
[issues-url]: https://github.com/Skvorstieven/simple-procedural-map-generator/issues
[license-shield]: https://img.shields.io/github/license/Skvorstieven/simple-procedural-map-generator.svg?style=for-the-badge
[license-url]: https://github.com/Skvorstieven/simple-procedural-map-generator/blob/main/LICENSE
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Three.js]: https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white
[Three-url]: https://threejs.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org
