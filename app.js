import express from 'express'
import path from 'path'
import axios from 'axios'
import {promises} from 'fs'
import { config } from 'dotenv';
import { upload } from './multer/storage.js';
import { fileURLToPath } from 'url';
import { json } from 'stream/consumers';
config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET ALL POSTS
app.get('/', async (req, res) => {
  try {
    
    const {data} = await axios.get('http://localhost:3000/posts');
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.render('index', { posts:data})
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from the server');
  }
});
app.get('/create',(req,res)=>{
      res.render('create');
})
app.post('/create',upload.single('image'),async (req, res) => {
  const { title, content, category, author } = req.body;
  
  try {
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newPost = {
    title,
    content,
    category,
    author,
    image,
    date: new Date(),
    };
   
    await axios.post(process.env.URL, newPost);
    res.redirect('/');
  } catch (error) {
    console.error('Error adding new post:', error);
    res.status(500).send('Error adding new post');
  }
});

app.get('/edit-post/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const response = await axios.get(`${process.env.URL}/${postId}`);
    const post = response.data;
    res.render('edit', { post });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching post');
  }
});

app.post('/edit-post/:id',upload.single('image'),async (req, res) => {
  const postId = req.params.id;
  let { title, content, category, author} = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    await axios.put(`${process.env.URL}/${postId}`, {
      title,
      content,
      category,
      author,
      date: new Date(),
      image
    });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating post');
  }
});
app.get('/posts/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const response = await axios.get(`http://localhost:3000/posts/${postId}`);
    res.render('details', { post: response.data});
  } catch (err) {
    console.error(err);
    res.status(404).send('Post not found');
  }
});




const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
