var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}, //so we are going to reference the Author table or whatever its called in mongoDB
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre', required: true}] //we also reference the genre table. Notice this is an array because we can asign mutliple
  }
);

//Virtual for URL
//same thing that we did for author
BookSchema
.virtual('url')
.get(function() {
  return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Book', BookSchema);
