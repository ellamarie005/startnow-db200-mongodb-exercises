use mongo_movies

db.movies.find({}).count()
db.movies.insert({"title" : "Star Wars", "writer" : "George Lucas", "year" : "1977", "actors" : ["Mark Hamill", "Harison Ford", "Carrie Fisher", "Peter Chushing", "James Earl Jones"]})
db.movies.insert({"title": "Raiders of the Lost Ark", "writer" : "George Lucas", "year": "1981", "actors" : ["Harrison Ford"]})
db.movies.insert({"title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : ["Brad Pitt", "Edward Norton"]})
db.movies.insert({"title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "1994", "actors" : ["John Travolta", "Uma Thurman"]})
db.movies.insert({"title": "Inglorious Basterds", "writer": "Quentin Tarantino", "year": "2009", "actors" : ["Brad Pitt", "Diane Kruger", "Eli Roth"]})
db.movies.insert({"title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "ranchise" : "The Hobbit"})
db.movies.insert({"title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : "2013", "franchise" : "The Hobbit"})
db.movies.insert({"title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})
db.movies.insert({"title" : "Pee Wee Herman's Big Adventure", "writer": "Phil Hartman", "year": "1985"})
db.movies.insert({"title" : "Avatar"})


db.movies.update({"title": "The Hobbit: An Unexpected Journey"}, {$set: {"synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug"}})
db.movies.update({"title" :"The Hobbit: The Desolation of Smaug"}, {$set: {"synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring"}})
db.movies.update({"title": "Pulp Fiction"}, {$et: {"actors":["John Travolta", "Uma Thurman", "Samuel L. Jackson"]}})

db.movies.find({"synopsis": /Bilbo/})
db.movies.find({"synopsis": /Gandalf/})
db.movies.find({"synopsis": /Gandalf/})
db.movies.find({$and: [{"synopsis": /Bilbo/}, {"synopsis": {$not: /Gandalf/}}]})
db.movies.find({$or: [{"synopsis": /dwarves/}, {"synopsis": /hobbit/}]})
db.movies.find({$and:[{"synopsis":/gold/},{"synopsis":/dragon/}]})

db.movies.deleteOne({"title": "Pee Wee Herman's Big Adventure"})
db.movies.deleteOne({"title": "Avatar"})
db.movies.renameCollection("THE NAME THAT YOU WANT")//this is renaming a db

db.users.insert({"username": "Sally Smith", "first_name": "Sally", "Last_name": "Smith"})

db.posts.insert({"username" : "SallySmith", "title" : "Passes out at party", "body" : "Wakes up early and cleans house"})
db.posts.insert({"username" : "SallySmith", "title" : "Buys a House", "body" : "Living in a new neighborhood now"})
db.posts.insert({"username" : "SallySmith", "title" : "Reports a bug in your code", "body" : "Sends you a Pull Request"})

db.posts.insert({"username" : "JimmyHagen", "title" : "Borrows something", "body" : "Returns it when he is done"})
db.posts.insert({"username" : "JimmyHagen", "title" : "Borrows everything", "body" : "The end"})
db.posts.insert({"username" : "JimmyHagen", "title" : "Forks your repo on github", "body" : "Sets to private"})

db.comments.insert({"username": "SallySmith", "comment": "Hope you got a good deal!", "post": [ObjectId("5ae35c387dd1f2885329fe09")]})
db.comments.insert({"username": "SallySmith", "comment": "What's mine is yours!", "post": [ObjectId("5ae3d8f17dd1f2885329fe10")]})
db.comments.insert({"username": "SallySmith", "comment": "Don't violate the licensing agreement!", "post": [ObjectId("5ae3d8fd7dd1f2885329fe11")]})
db.comments.insert({"username": "JimmyHagen", "comment": "It still isn't clean", "post": [ObjectId("5ae3d8b87dd1f2885329fe0c")]})
db.comments.insert({"username": "JimmyHagen", "comment": "Denied your PR cause I found a hack", "post": [ObjectId("5ae3d8d27dd1f2885329fe0e")]})

{ "_id" : ObjectId("5ae3d8b87dd1f2885329fe0c"), "username" : "SallySmith", "title" : "Passes out at party", "body" : "Wakes up early and cleans house" }
{ "_id" : ObjectId("5ae3d8c57dd1f2885329fe0d"), "username" : "SallySmith", "title" : "Buys a House", "body" : "Living in a new neighborhood now" }
{ "_id" : ObjectId("5ae3d8d27dd1f2885329fe0e"), "username" : "SallySmith", "title" : "Reports a bug in your code", "body" : "Sends you a Pull Request" }
{ "_id" : ObjectId("5ae3d8e17dd1f2885329fe0f"), "username" : "JimmyHagen", "title" : "Borrows something", "body" : "Returns it when he is done" }
{ "_id" : ObjectId("5ae3d8f17dd1f2885329fe10"), "username" : "JimmyHagen", "title" : "Borrows everything", "body" : "The end" }
{ "_id" : ObjectId("5ae3d8fd7dd1f2885329fe11"), "username" : "JimmyHagen", "title" : "Forks your repo on github", "body" : "Sets to private" }

db.users.find({})
db.posts.find({})
db.posts.find({"username": "SallySmith"})
db.posts.find({"username": "JimmyHagen"})
db.comments.find({})
db.comments.find({"username": "SallySmith"})
db.comments.find({"username": "JimmyHagen"})

// var result = db.comments.findOne({"username": "JimmyHagen"}, {"post" : 1})
// var report = db.posts.find({"_id": {"$in": result["post"]}})

db.comments.find({post: ObjectId("5ae3d8d27dd1f2885329fe0e")})