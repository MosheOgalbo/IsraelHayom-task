const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('Writers').insertMany([
        {
          _id: new ObjectId("60c72b2f9b1d8b3a2c8e4d1a"),
          name: 'Writer One',
          imageUrl: 'https://example.com/writer1.jpg',
          pageUrl: 'https://example.com/writer1',
        },
        {
          _id: new ObjectId("60c72b2f9b1d8b3a2c8e4d1b"),
          name: 'Writer Two',
          imageUrl: 'https://example.com/writer2.jpg',
          pageUrl: 'https://example.com/writer2',
        },
      ]);

      await db.collection('Posts').insertMany([
        {
          _id: new ObjectId("60c72b2f9b1d8b3a2c8e4d1c"),
          title: 'First Post',
          createdAt: new Date(),
          url: 'https://example.com/first-post',
          writerId: new ObjectId("60c72b2f9b1d8b3a2c8e4d1a"),
        },
        {
          _id: new ObjectId("60c72b2f9b1d8b3a2c8e4d1d"),
          title: 'Second Post',
          createdAt: new Date(),
          url: 'https://example.com/second-post',
          writerId: new ObjectId("60c72b2f9b1d8b3a2c8e4d1b"),
        },
      ]);
},

async down(db, client) {
    await db.collection('Writers').deleteMany({
      _id: { $in: [
        new ObjectId("60c72b2f9b1d8b3a2c8e4d1a"),
        new ObjectId("60c72b2f9b1d8b3a2c8e4d1b"),
      ]},
    });

    await db.collection('Posts').deleteMany({
      _id: { $in: [
        new ObjectId("60c72b2f9b1d8b3a2c8e4d1c"),
        new ObjectId("60c72b2f9b1d8b3a2c8e4d1d"),
      ]},
    });
  },
};
