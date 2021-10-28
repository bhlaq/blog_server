const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deleteMovie = await models.Movie.deleteOne({_id: id})

  if(deleteMovie.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete address.`);

};