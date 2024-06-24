const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,'public'))); 
app.use(express.urlencoded({ extended: true }));

// app.use(() => {
//       console.log("Received a new request!");
// });

// Home Page
app.get('/', (req, res) => {
      // res.sendFile(path.join(__dirname, 'public/html/index.html'));
      const welcome = "This is the new home of Goldberg Tobacco Wholesalers";
      res.render('underConstruction', {data: welcome});
});
// UnderConstructionHome
app.get('/underConstructionHome', (req, res) => {
      const headingH2 = "Contact Us"
      console.log("Welcome to the contact us page.")
      res.render('home', {headingH2});
});
// //working with params
// app.get('/xcountry/:exerciseType', (req, res) => {
//       const { exerciseType } = req.params; 
//       res.send(`Welcome. The exercise you wish to know more about is: ${exerciseType}`)
// });
// // app.get('/dog/:kennel/germansheppard/:sex', (req, res) => {
// //       const {kennel, sex} = req.params;
// //       res.send(`<h1>Welcome to ${kennel}. This is a ${sex} germansheppard!</h1>`);
// // });
// //working with query strings
// app.get('/search', (req, res) => {
//       const {q} = req.query;
//       res.send(`<h1>Search results for: ${q}.</h1>`);
// });

// // BASIC CRUD FUNCTIONALITY BLUE PRINT
// // NAME         PATH                    VERB            PURPOSE
// // Index        /comments               GET             Display all comments
// // New          /comments/new           GET             Form to create a new comment
// // Create       /comments               POST            Creates new comment on server
// // Show         /comments/:id           GET             Details for one specific comment (using ID)
// // Edit         /comments/:id/edit      GET             Form to edit specific comment
// // Update       /comments/:id           PATCH           Updates specific comment on server
// // Destroy      /comments/:id           DELETE          Deletes specific item on server

// const comments = [
//       {
//             id: 1,
//             username: 'Todd',
//             comment: 'lol that is so funny!'
//       },
//       {
//             id: 2,
//             username: 'Skyler',
//             comment: 'I like to go birdwatching with my dog'
//       },
//       {
//             id: 3,
//             username: 'Sk8erBoi',
//             comment: 'Plz delete your account, Todd'
//       },
//       {
//             id: 4,
//             username: 'onlysayswoof',
//             comment: 'woof woof woof'
//       }
// ];

// // Index
// app.get('/comments', (req, res) => {
//       res.render('comments/index', { comments });
// })

// // New Form
// app.get('/comments/new', (req, res) => {
//       res.render('comments/new');
// })

// // Create
// app.post('/comments', (req, res) => {
//       const { username, comment } = req.body;
//       comments.push({username, comment});
//       // res.send("It worked");
//       res.redirect('/comments');
// })

// Show
// app.get('/comments/:id', (req, res) => {
//       const { id } = req.params;
//       const comment = comments.find(c => c.id === parseInt(id));
//       res.render('comments/show', { comment });
// })

// Update
// app.patch('/comments/:id', (req, res) => {
//       const { id } = req.params;
//       const newCommentText = req.body.comment;
//       const foundComment = comments.find(c => c.id);
//       foundComment.comment = newCommentText;
//       res.redirect('/commments');
// })
// // Contact Us Page
// app.get('/contact', (req, res) => {
//       const headingH2 = "Contact Us"
//       console.log("Welcome to the contact us page.")
//       res.render('contact', {headingH2});
// });
 

// respond to any and all requests
app.get('*', (req, res) => {
      res.send("I do not know that path!");
})

app.listen(3000, () => {
      console.log("Listening on Port:3000");
});