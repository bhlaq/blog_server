const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const movieToUpdate = await models.Movie.findOne({_id: id});

    if(!movieToUpdate) throw new ApolloError(`Could not find movie with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      movieToUpdate[value] = input[value];
    });

    const updatedMovie = await movieToUpdate.save();

    return updatedMovie
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  