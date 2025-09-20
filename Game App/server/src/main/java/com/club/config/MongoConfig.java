package com.club.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;

import jakarta.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@Configuration
@EnableMongoAuditing
public class MongoConfig {

    private final MongoClient mongoClient;

    public MongoConfig(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }

    @PostConstruct
    public void testMongoConnection() {
        try {
            MongoDatabase db = mongoClient.getDatabase("game_club");
            db.listCollectionNames().first(); // Just try to read collections
            System.out.println("✅ MongoDB Atlas Connection Successful!");
        } catch (Exception e) {
            System.err.println("❌ MongoDB Atlas Connection Failed: " + e.getMessage());
        }
    }
}
