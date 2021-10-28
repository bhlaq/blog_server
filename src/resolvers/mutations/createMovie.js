const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newMovie = await models.Movie.create(input);
    return newMovie
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
