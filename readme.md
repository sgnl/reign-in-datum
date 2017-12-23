# Reign in datum
an exercise for dealing with data.

![i hate exercise](https://media.giphy.com/media/5qaaGRYtLv5JK/giphy.gif)

As a web developer you will mostly likely be taking in data from somewhere and most of the time the data
coming in isn't formatted in the best way. This exercise is no different.

## Things to keep in mind while coding
Before getting started take the time to look at the data you're given @ `data/weather.json`. The data is stored
in an array of tuples (**tuples tl;dr:** a data structure which contains two values in a set).

Think about how you could transform this data to be easier to work with. You're given two functions to start
with and encouraged to build more.

*this exercise is intentionally sparse, you are encouraged to whiteboard your solutions before trying to implement*

## Tasks

### `mean` function
- accepts two arguments `city` and `data`
- should return the average of rainfall for the `city` found in `data`.

### `variance` function
- accepts two arguments `city` and `data`
- should return the variance of rainfall for the `city` found in `data`.

### Create helper function(s)
- return a data structure that's better for you to work with.

### Requirements
- write additional tests for any helper functions you've created

### Caveats
- you will not need to read in the `data/weather.json` file. The data will be given to you via function parameters

## References
- [How to calculate a mean value](http://www.mathsisfun.com/mean.html)
- [How to calculate standard deviation value](http://www.mathsisfun.com/data/standard-deviation.html)
