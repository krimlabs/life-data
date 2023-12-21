![state-of-being repo cover](https://github.com/krimlabs/state-of-being/assets/1925158/1fc589a5-e822-4e59-883b-ed3b3d5aff96)

# Introduction

**State of Being** is a collection of scripts and tasks designed to gather and quantify my current state and goals. 📊

At an atomic level, it monitors aspects like my sleep patterns, awareness, workouts, and meditation efficiency. On a more abstract level, it links my daily tasks [कर्म](https://www.rekhtadictionary.com/meaning-of-karm#:~:text=act%2C%20deed%2C%20religious%20act%2C%20destiny) to my life's vision.
Through this project, my aim is to track and enhance personal growth in a manner akin to tracking the development of a product. 🌱

The foundational principles of this system stem from the teachings of my teacher and mentor, [Dr. Amit Jain](https://www.linkedin.com/in/dramitjain/?originalSubdomain=in). The data collection methods and interfaces draw inspiration from the works of [@AnandChoudhary](https://github.com/AnandChowdhary/life)
and [Bryan Johnson](https://protocol.bryanjohnson.com/). 🙌

## API

I use Github Pages to serve the files in this repo as an API.
The base url is:`https://krimlabs.github.io/state-of-being/`

| Endpoint                                                                                                        | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [/vault/workouts.json](https://krimlabs.github.io/state-of-being/vault/workouts.json)                           | Get workout stats by year and month, and yearly aggregates                                                                                                  |
| [/vault/meditations.json](https://krimlabs.github.io/state-of-being/vault/meditations.json)                     | Get meditation stats by year and month. Includes data on awareness, life problems that I'm currently tackling and the efforts I'm spending on each problem. |
| [/vault/ultrahuman/index.json](https://krimlabs.github.io/state-of-being/vault/ultrahuman/index.json)           | List of weeks for which sleep data is available                                                                                                             |
| [/vault/ultrahuman/13-03-2023.json](https://krimlabs.github.io/state-of-being/vault/ultrahuman/13-02-2023.json) | Weekly sleep data for week starting at `13-03-2023`. List of start dates come from index.                                                                   |
| [/vault/ultrahuman/sleep.json](https://krimlabs.github.io/state-of-being/vault/ultrahuman/sleep.json)           | Aggregate sleep and recovery data by year and month                                                                                                         |

## Dashboard

A public dashboard is in under construction and will be available at [krimlabs.com/state-of-being](https://krimlabs.com/state-of-being)
