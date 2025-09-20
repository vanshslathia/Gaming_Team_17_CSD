package com.club.game;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "games")
public class Game {
    @Id
    private String id;

    @Indexed(unique = true)
    private String name;

    private double price;

    private String description;

    private String category;

    private String imageUrl;

    private String developer;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    // Subscription plans
    private Double monthlyPrice;
    private Double sixMonthPrice;
    private Double annualPrice;
    private Boolean hasSubscription;
}


