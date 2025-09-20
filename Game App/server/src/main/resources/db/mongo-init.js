// Run this in MongoDB to create collections with JSON Schema validation
// use game_club;

db.createCollection("members", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "phone"],
      properties: {
        name: { bsonType: "string" },
        phone: { bsonType: "string" },
        balance: { bsonType: ["double", "int"], minimum: 0 }
      }
    }
  }
});
db.members.createIndex({ phone: 1 }, { unique: true });

db.createCollection("games", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: { bsonType: "string" },
        price: { bsonType: ["double", "int"], minimum: 0 },
        description: { bsonType: ["string", "null"] },
        minPlayers: { bsonType: ["int", "null"], minimum: 1 },
        multipleAllowed: { bsonType: ["bool", "null"] }
      }
    }
  }
});
db.games.createIndex({ name: 1 }, { unique: true });

db.createCollection("recharges", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["memberId", "amount"],
      properties: {
        memberId: { bsonType: "objectId" },
        amount: { bsonType: ["double", "int"] },
        dateTime: { bsonType: ["date", "null"] }
      }
    }
  }
});

db.createCollection("transactions", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["memberId", "gameId", "amount"],
      properties: {
        memberId: { bsonType: "objectId" },
        gameId: { bsonType: "objectId" },
        amount: { bsonType: ["double", "int"] },
        dateTime: { bsonType: ["date", "null"] }
      }
    }
  }
});

db.createCollection("collections", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["date", "amount"],
      properties: {
        date: { bsonType: "date" },
        amount: { bsonType: ["double", "int"] }
      }
    }
  }
});

db.createCollection("admin_users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "password"],
      properties: {
        username: { bsonType: "string" },
        password: { bsonType: "string" }
      }
    }
  }
});
db.admin_users.createIndex({ username: 1 }, { unique: true });


