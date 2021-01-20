const graphql = require("graphql");
const Band = require("../models/band");
const Album = require("../models/album");
const album = require("../models/album");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const AlbumType = new GraphQLObjectType({
  name: "Album",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    released: { type: GraphQLInt },
    genre: { type: GraphQLString },
    band: {
      type: BandType,
      resolve(parent, args) {
        return Band.findById(parent.bandId);
      },
    },
  }),
});

const BandType = new GraphQLObjectType({
  name: "Band",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    orgin: { type: GraphQLString },
    formed: { type: GraphQLString },
    genre: { type: GraphQLString },
    albums: {
      type: new GraphQLList(AlbumType),
      resolve(parent, args) {
        return Album.find({ albumId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    album: {
      type: AlbumType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Album.findById(args.id);
      },
    },
    band: {
      type: BandType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Band.findById(args.id);
      },
    },
    albums: {
      type: new GraphQLList(AlbumType),
      resolve(parent, args) {
        return Album.find({});
      },
    },
    bands: {
      type: new GraphQLList(BandType),
      resolve(parent, args) {
        return Band.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBand: {
      type: BandType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        orgin: { type: new GraphQLNonNull(GraphQLString) },
        formed: { type: new GraphQLNonNull(GraphQLInt) },

      },
      resolve(parent, args) {
        let band = new Band({
          name: args.name,
          genre: args.genre,
          orgin: args.orgin,
          formed: args.formed
        });
        return band.save();
      },
    },
    addAlbum: {
      type: AlbumType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        released: {type: new GraphQLNonNull(GraphQLInt)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        bandId:{type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args) {
        let album = new Album({
          name: args.name,
          released: args.released,
          genre: args.genre,
          bandId: args.bandId
        });
        return album.save();
      },
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
