ClientWorkout = new Mongo.Collection("clientWorkout");

var ClientWorkoutSchema = {};

ClientWorkoutSchema.workout = new SimpleSchema({

  whosWorkout: {
    type: String,
  },

  createdBy: {
    type: String,
  },

  //Workout scheduled date
  workoutDate: {
    type: Date,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #1
  ExName1: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 1 set 1 rep and weight
  ex1set1rep: {
    type: Number,
    optional: true,
  },

  ex1set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 1 set 2 rep and weight
  ex1set2rep: {
    type: Number,
    optional: true,
  },

  ex1set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 1 set 3 rep and weight
  ex1set3rep: {
    type: Number,
    optional: true,
  },

  ex1set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 1 set 4 rep and weight
  ex1set4rep: {
    type: Number,
    optional: true,
  },

  ex1set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 1 set 5 rep and weight
  ex1set5rep: {
    type: Number,
    optional: true,
  },

  ex1set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 1 comments
  ex1TrainerComments: {
    type: String,
    optional: true,
  },

  ex1ClientComments: {
    type: String,
    optional: true,
  },
////////////////////////////////////////////////////////////////////////////////
  //Exercise #2
  ExName2: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 2 set 1 rep and weight
  ex2set1rep: {
    type: Number,
    optional: true,
  },

  ex2set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 2 set 2 rep and weight
  ex2set2rep: {
    type: Number,
    optional: true,
  },

  ex2set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 2 set 3 rep and weight
  ex2set3rep: {
    type: Number,
    optional: true,
  },

  ex2set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 2 set 4 rep and weight
  ex2set4rep: {
    type: Number,
    optional: true,
  },

  ex2set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 2 set 5 rep and weight
  ex2set5rep: {
    type: Number,
    optional: true,
  },

  ex2set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 2 comments
  ex2TrainerComments: {
    type: String,
    optional: true,
  },

  ex2ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #3
  ExName3: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 3 set 1 rep and weight
  ex3set1rep: {
    type: Number,
    optional: true,
  },

  ex3set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 3 set 2 rep and weight
  ex3set2rep: {
    type: Number,
    optional: true,
  },

  ex3set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 3 set 3 rep and weight
  ex3set3rep: {
    type: Number,
    optional: true,
  },

  ex3set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 3 set 4 rep and weight
  ex3set4rep: {
    type: Number,
    optional: true,
  },

  ex3set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 3 set 5 rep and weight
  ex3set5rep: {
    type: Number,
    optional: true,
  },

  ex3set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 3 comments
  ex3TrainerComments: {
    type: String,
    optional: true,
  },

  ex3ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #4
  ExName4: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 4 set 1 rep and weight
  ex4set1rep: {
    type: Number,
    optional: true,
  },

  ex4set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 4 set 2 rep and weight
  ex4set2rep: {
    type: Number,
    optional: true,
  },

  ex4set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 4 set 3 rep and weight
  ex4set3rep: {
    type: Number,
    optional: true,
  },

  ex4set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 4 set 4 rep and weight
  ex4set4rep: {
    type: Number,
    optional: true,
  },

  ex4set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 4 set 5 rep and weight
  ex4set5rep: {
    type: Number,
    optional: true,
  },

  ex4set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 4 comments
  ex4TrainerComments: {
    type: String,
    optional: true,
  },

  ex4ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #5
  ExName5: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 5 set 1 rep and weight
  ex5set1rep: {
    type: Number,
    optional: true,
  },

  ex5set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 5 set 2 rep and weight
  ex5set2rep: {
    type: Number,
    optional: true,
  },

  ex5set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 5 set 3 rep and weight
  ex5set3rep: {
    type: Number,
    optional: true,
  },

  ex5set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 5 set 4 rep and weight
  ex5set4rep: {
    type: Number,
    optional: true,
  },

  ex5set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 5 set 5 rep and weight
  ex5set5rep: {
    type: Number,
    optional: true,
  },

  ex5set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 5 comments
  ex5TrainerComments: {
    type: String,
    optional: true,
  },

  ex5ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #6
  ExName6: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 6 set 1 rep and weight
  ex6set1rep: {
    type: Number,
    optional: true,
  },

  ex6set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 6 set 2 rep and weight
  ex6set2rep: {
    type: Number,
    optional: true,
  },

  ex6set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 6 set 3 rep and weight
  ex6set3rep: {
    type: Number,
    optional: true,
  },

  ex6set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 6 set 4 rep and weight
  ex6set4rep: {
    type: Number,
    optional: true,
  },

  ex6set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 6 set 5 rep and weight
  ex6set5rep: {
    type: Number,
    optional: true,
  },

  ex6set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 6 comments
  ex6TrainerComments: {
    type: String,
    optional: true,
  },

  ex6ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #7
  ExName7: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 7 set 1 rep and weight
  ex7set1rep: {
    type: Number,
    optional: true,
  },

  ex7set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 7 set 2 rep and weight
  ex7set2rep: {
    type: Number,
    optional: true,
  },

  ex7set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 7 set 3 rep and weight
  ex7set3rep: {
    type: Number,
    optional: true,
  },

  ex7set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 7 set 4 rep and weight
  ex7set4rep: {
    type: Number,
    optional: true,
  },

  ex7set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 7 set 5 rep and weight
  ex7set5rep: {
    type: Number,
    optional: true,
  },

  ex7set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 7 comments
  ex7TrainerComments: {
    type: String,
    optional: true,
  },

  ex7ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #8
  ExName8: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 8 set 1 rep and weight
  ex8set1rep: {
    type: Number,
    optional: true,
  },

  ex8set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 8 set 2 rep and weight
  ex8set2rep: {
    type: Number,
    optional: true,
  },

  ex8set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 8 set 3 rep and weight
  ex8set3rep: {
    type: Number,
    optional: true,
  },

  ex8set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 8 set 4 rep and weight
  ex8set4rep: {
    type: Number,
    optional: true,
  },

  ex8set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 8 set 5 rep and weight
  ex8set5rep: {
    type: Number,
    optional: true,
  },

  ex8set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 8 comments
  ex8TrainerComments: {
    type: String,
    optional: true,
  },

  ex8ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #9
  ExName9: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 9 set 1 rep and weight
  ex9set1rep: {
    type: Number,
    optional: true,
  },

  ex9set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 9 set 2 rep and weight
  ex9set2rep: {
    type: Number,
    optional: true,
  },

  ex9set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 9 set 3 rep and weight
  ex9set3rep: {
    type: Number,
    optional: true,
  },

  ex9set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 9 set 4 rep and weight
  ex9set4rep: {
    type: Number,
    optional: true,
  },

  ex9set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 9 set 5 rep and weight
  ex9set5rep: {
    type: Number,
    optional: true,
  },

  ex9set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 9 comments
  ex9TrainerComments: {
    type: String,
    optional: true,
  },

  ex9ClientComments: {
    type: String,
    optional: true,
  },

////////////////////////////////////////////////////////////////////////////////

  //Exercise #10
  ExName10: {
      type: String,
      regEx: /^[a-zA-Z0-9 ]{2,25}$/,
      optional: true
  },

  // Exercise 3 set 1 rep and weight
  ex10set1rep: {
    type: Number,
    optional: true,
  },

  ex10set1wt: {
    type: Number,
    optional: true,
  },

  // Exercise 10 set 2 rep and weight
  ex10set2rep: {
    type: Number,
    optional: true,
  },

  ex10set2wt: {
    type: Number,
    optional: true,
  },

  // Exercise 10 set 3 rep and weight
  ex10set3rep: {
    type: Number,
    optional: true,
  },

  ex10set3wt: {
    type: Number,
    optional: true,
  },

  // Exercise 10 set 4 rep and weight
  ex10set4rep: {
    type: Number,
    optional: true,
  },

  ex10set4wt: {
    type: Number,
    optional: true,
  },

  // Exercise 10 set 5 rep and weight
  ex10set5rep: {
    type: Number,
    optional: true,
  },

  ex10set5wt: {
    type: Number,
    optional: true,
  },

  //Exercise 10 comments
  ex10TrainerComments: {
    type: String,
    optional: true,
  },

  ex10ClientComments: {
    type: String,
    optional: true,
  },
});

ClientWorkout.attachSchema(ClientWorkoutSchema.workout);
