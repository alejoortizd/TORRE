# TORRE

## Challenge
---
build anything you'd like using data from Torre

## Description
Having the freedom to choose what to do with the tower endpoints I chose to make a profile and bid validator, to avoid false profiles and frauds. For the development of this challenge it was decided to work with pure javascript for the frontend, only using pug as a view engine to work from the backend which worked with nodejs

## Installation
---
Install via npm

    npm install

## Usages
Using the following app you can verified if a person has a verified profile on Torre, also you can validate if an opportunity its open or not. The only that you need is the name of the person or the id of the job opportunity

## Bugs
---
For this first iteration, the web app presents the following error: FetchError: invalid json response body at https://torre.co/api/opportunities/alejandro123 reason: Unexpected token O in JSON at position 0.
Which does not allow to send the error message when it does not find the job opportunity or the username