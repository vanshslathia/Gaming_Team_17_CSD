package com.club.bootstrap;

import com.club.admin.AdminUser;
import com.club.admin.AdminUserRepository;
import com.club.game.Game;
import com.club.game.GameRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@Configuration
public class DataSeeder {
    @Bean
    CommandLineRunner seed(AdminUserRepository users, PasswordEncoder encoder, GameRepository games) {
        return args -> {
            if (users.count() == 0) {
                users.save(AdminUser.builder().username("admin").password(encoder.encode("admin123"))
                        .build());
            }
            // Always add games - check if we need to add more
            long gameCount = games.count();
            System.out.println("Current game count: " + gameCount);
            if (gameCount < 15) {
                System.out.println("Adding new games...");
                LocalDateTime now = LocalDateTime.now();
                
                games.save(Game.builder()
                        .name("Cyberpunk 2077")
                        .price(59.99)
                        .description("An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and ceaseless body modification.")
                        .category("RPG")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("CD Projekt RED")
                        .monthlyPrice(9.99)
                        .sixMonthPrice(49.99)
                        .annualPrice(89.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("The Witcher 3: Wild Hunt")
                        .price(39.99)
                        .description("A story-driven, next-generation open world RPG set in a fantasy universe full of meaningful choices and impactful consequences.")
                        .category("RPG")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("CD Projekt RED")
                        .monthlyPrice(6.99)
                        .sixMonthPrice(34.99)
                        .annualPrice(59.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Elden Ring")
                        .price(59.99)
                        .description("A new fantasy action RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.")
                        .category("Action RPG")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("FromSoftware")
                        .monthlyPrice(9.99)
                        .sixMonthPrice(49.99)
                        .annualPrice(89.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Minecraft")
                        .price(26.95)
                        .description("Create, explore, and survive in a randomly generated world made entirely of blocks.")
                        .category("Sandbox")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("Mojang Studios")
                        .monthlyPrice(4.99)
                        .sixMonthPrice(24.99)
                        .annualPrice(44.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Grand Theft Auto V")
                        .price(29.99)
                        .description("Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4K and beyond.")
                        .category("Action")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("Rockstar Games")
                        .monthlyPrice(5.99)
                        .sixMonthPrice(29.99)
                        .annualPrice(54.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("The Legend of Zelda: Breath of the Wild")
                        .price(59.99)
                        .description("Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.")
                        .category("Adventure")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("Nintendo EPD")
                        .monthlyPrice(9.99)
                        .sixMonthPrice(49.99)
                        .annualPrice(89.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Red Dead Redemption 2")
                        .price(59.99)
                        .description("America, 1899. The end of the wild west era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee.")
                        .category("Action")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("Rockstar Games")
                        .monthlyPrice(9.99)
                        .sixMonthPrice(49.99)
                        .annualPrice(89.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Among Us")
                        .price(4.99)
                        .description("An online and local party game of teamwork and betrayal for 4-15 players...in space!")
                        .category("Multiplayer")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("InnerSloth")
                        .monthlyPrice(1.99)
                        .sixMonthPrice(9.99)
                        .annualPrice(19.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Valorant")
                        .price(0.00)
                        .description("A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.")
                        .category("FPS")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("Riot Games")
                        .monthlyPrice(0.00)
                        .sixMonthPrice(0.00)
                        .annualPrice(0.00)
                        .hasSubscription(false)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Fall Guys")
                        .price(19.99)
                        .description("Fall Guys is a massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round of escalating chaos until one victor remains!")
                        .category("Party")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("Mediatonic")
                        .monthlyPrice(4.99)
                        .sixMonthPrice(24.99)
                        .annualPrice(44.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Hades")
                        .price(24.99)
                        .description("Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.")
                        .category("Roguelike")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("Supergiant Games")
                        .monthlyPrice(4.99)
                        .sixMonthPrice(24.99)
                        .annualPrice(44.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Stardew Valley")
                        .price(14.99)
                        .description("You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life.")
                        .category("Simulation")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("ConcernedApe")
                        .monthlyPrice(2.99)
                        .sixMonthPrice(14.99)
                        .annualPrice(29.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Dead by Daylight")
                        .price(19.99)
                        .description("Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors.")
                        .category("Horror")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("Behaviour Interactive")
                        .monthlyPrice(4.99)
                        .sixMonthPrice(24.99)
                        .annualPrice(44.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Rocket League")
                        .price(0.00)
                        .description("Soccer meets driving once again in the long-awaited, physics-based multiplayer-focused sequel to Supersonic Acrobatic Rocket-Powered Battle-Cars!")
                        .category("Sports")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("Psyonix")
                        .monthlyPrice(0.00)
                        .sixMonthPrice(0.00)
                        .annualPrice(0.00)
                        .hasSubscription(false)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Apex Legends")
                        .price(0.00)
                        .description("Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities.")
                        .category("Battle Royale")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("Respawn Entertainment")
                        .monthlyPrice(0.00)
                        .sixMonthPrice(0.00)
                        .annualPrice(0.00)
                        .hasSubscription(false)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("It Takes Two")
                        .price(39.99)
                        .description("Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure built purely for two players.")
                        .category("Co-op")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg")
                        .developer("Hazelight Studios")
                        .monthlyPrice(6.99)
                        .sixMonthPrice(34.99)
                        .annualPrice(59.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
                
                games.save(Game.builder()
                        .name("Hollow Knight")
                        .price(14.99)
                        .description("Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.")
                        .category("Metroidvania")
                        .imageUrl("https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg")
                        .developer("Team Cherry")
                        .monthlyPrice(2.99)
                        .sixMonthPrice(14.99)
                        .annualPrice(29.99)
                        .hasSubscription(true)
                        .createdAt(now)
                        .updatedAt(now)
                        .build());
            }
        };
    }
}


