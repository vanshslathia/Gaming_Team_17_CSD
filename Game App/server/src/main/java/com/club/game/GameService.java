package com.club.game;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class GameService {
    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public Game addGame(String name, double price, String description, String category, String imageUrl, String developer) {
        Game game = Game.builder()
                .name(name)
                .price(price)
                .description(description)
                .category(category)
                .imageUrl(imageUrl)
                .developer(developer)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        return gameRepository.save(game);
    }

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    public Optional<Game> getGameById(String id) {
        return gameRepository.findById(id);
    }

    public List<Game> searchGames(String name, String category, String developer) {
        List<Game> allGames = gameRepository.findAll();
        
        return allGames.stream()
                .filter(game -> name == null || name.isEmpty() || 
                        game.getName().toLowerCase().contains(name.toLowerCase()))
                .filter(game -> category == null || category.isEmpty() || 
                        (game.getCategory() != null && game.getCategory().equalsIgnoreCase(category)))
                .filter(game -> developer == null || developer.isEmpty() || 
                        (game.getDeveloper() != null && game.getDeveloper().toLowerCase().contains(developer.toLowerCase())))
                .collect(java.util.stream.Collectors.toList());
    }

    public Optional<Game> updateGame(String id, String name, Double price, String description, String category, String imageUrl, String developer) {
        return gameRepository.findById(id).map(game -> {
            if (name != null) game.setName(name);
            if (price != null) game.setPrice(price);
            if (description != null) game.setDescription(description);
            if (category != null) game.setCategory(category);
            if (imageUrl != null) game.setImageUrl(imageUrl);
            if (developer != null) game.setDeveloper(developer);
            game.setUpdatedAt(LocalDateTime.now());
            return gameRepository.save(game);
        });
    }

    public boolean deleteGame(String id) {
        if (gameRepository.existsById(id)) {
            gameRepository.deleteById(id);
            return true;
        }
        return false;
    }
}


