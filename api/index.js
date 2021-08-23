const express = require('express');
const db = require('../server/config/fivem')
const cors = require('cors')

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json())


app.get("/api/users", (req, res)=>{
	db.query("SELECT * FROM users", (err, result)=> {
		
		if(err) {
			console.log(err)
		} 

	res.send(result)
	});
});

app.get("/api/societies", (req, res) => {

	db.query("SELECT * FROM addon_account", (err, result)=> {
		
		if (err) {
			console.log(err)
		}

		let societies = result.map(_society => {
		
			let society ={
				name : "",
				label : ""
			}

			

			Object.entries(_society).forEach( (val) => {

				for (let i = 0; i <= val.length; i++) {
					let currentVal =val[i]

					if (currentVal !== undefined && typeof currentVal !== "number" && currentVal !== "shared") {
						society[currentVal] = val[i + 1]
					}
				}
			})

			return society
		})

		res.send(societies.filter(society => society !== undefined));
	});
});

app.get("/api/user/:steamID", (req,res)=>{

	const steamID = req.params.steamID;
	db.query("SELECT * FROM users WHERE identifier = ?", `steam:${steamID}`, (err, result)=> {
		
		if(err) {
			console.log(err)
		} 
		
		res.send(result)
	});
});

// Route for creating the post
app.post('/api/create', (req,res)=> {

const username = req.body.userName;
const title = req.body.title;
const text = req.body.text;

db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a post
app.post('/api/like/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
	if(err) {
   console.log(err)   } 
   console.log(result)
	});    
});

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
		} }) })

app.listen(PORT, ()=>{
	console.log(`Server is running on ${PORT}`)
})
