package com.club.game;

import com.club.common.ApiResponse;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

record CreateGameRequest(@NotBlank String name, @Positive double price, String description, String category, String imageUrl, String developer) {}
record UpdateGameRequest(String name, Double price, String description, String category, String imageUrl, String developer) {}

@RestController
@RequestMapping("/api/games")
public class GameController {
    private final GameService gameService;
    
    public GameController(GameService gameService) { 
        this.gameService = gameService; 
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Game>> create(@Valid @RequestBody CreateGameRequest req) {
        Game game = gameService.addGame(req.name(), req.price(), req.description(), req.category(), req.imageUrl(), req.developer());
        return ResponseEntity.ok(ApiResponse.ok(game));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Game>>> getAllGames() {
        List<Game> games = gameService.getAllGames();
        return ResponseEntity.ok(ApiResponse.ok(games));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Game>> getGameById(@PathVariable String id) {
        Optional<Game> game = gameService.getGameById(id);
        if (game.isPresent()) {
            return ResponseEntity.ok(ApiResponse.ok(game.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Game>>> searchGames(@RequestParam(required = false) String name,
                                                               @RequestParam(required = false) String category,
                                                               @RequestParam(required = false) String developer) {
        List<Game> games = gameService.searchGames(name, category, developer);
        return ResponseEntity.ok(ApiResponse.ok(games));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Game>> updateGame(@PathVariable String id, @Valid @RequestBody UpdateGameRequest req) {
        Optional<Game> game = gameService.updateGame(id, req.name(), req.price(), req.description(), req.category(), req.imageUrl(), req.developer());
        if (game.isPresent()) {
            return ResponseEntity.ok(ApiResponse.ok(game.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteGame(@PathVariable String id) {
        boolean deleted = gameService.deleteGame(id);
        if (deleted) {
            return ResponseEntity.ok(ApiResponse.ok("Game deleted successfully", null));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/seed-additional")
    public ResponseEntity<ApiResponse<String>> seedAdditionalGames() {
        try {
            LocalDateTime now = LocalDateTime.now();
            
            // Add new games
            gameService.addGame("The Legend of Zelda: Breath of the Wild", 59.99, 
                "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.", 
                "Adventure", "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "Nintendo EPD");
            
            gameService.addGame("Red Dead Redemption 2", 59.99, 
                "America, 1899. The end of the wild west era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee.", 
                "Action", "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg", "Rockstar Games");
            
            gameService.addGame("Among Us", 4.99, 
                "An online and local party game of teamwork and betrayal for 4-15 players...in space!", 
                "Multiplayer", "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "InnerSloth");
            
            gameService.addGame("Valorant", 0.00, 
                "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.", 
                "FPS", "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg", "Riot Games");
            
            gameService.addGame("Fall Guys", 19.99, 
                "Fall Guys is a massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round of escalating chaos until one victor remains!", 
                "Party", "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "Mediatonic");
            
            gameService.addGame("Hades", 24.99, 
                "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.", 
                "Roguelike", "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg", "Supergiant Games");
            
            gameService.addGame("Stardew Valley", 14.99, 
                "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life.", 
                "Simulation", "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "ConcernedApe");
            
            gameService.addGame("Dead by Daylight", 19.99, 
                "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors.", 
                "Horror", "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg", "Behaviour Interactive");
            
            gameService.addGame("Rocket League", 0.00, 
                "Soccer meets driving once again in the long-awaited, physics-based multiplayer-focused sequel to Supersonic Acrobatic Rocket-Powered Battle-Cars!", 
                "Sports", "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "Psyonix");
            
            gameService.addGame("Apex Legends", 0.00, 
                "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities.", 
                "Battle Royale", "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg", "Respawn Entertainment");
            
            gameService.addGame("It Takes Two", 39.99, 
                "Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure built purely for two players.", 
                "Co-op", "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "Hazelight Studios");
            
            gameService.addGame("Hollow Knight", 14.99, 
                "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.", 
                "Metroidvania", "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg", "Team Cherry");
            
            return ResponseEntity.ok(ApiResponse.ok("Additional games seeded successfully", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Failed to seed additional games: " + e.getMessage()));
        }
    }
}


