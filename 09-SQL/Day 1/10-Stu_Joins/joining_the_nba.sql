-- -- Create tables and import data
-- -- Drop table if exists
-- DROP TABLE IF EXISTS players;

-- -- Create new table
-- CREATE TABLE players (
--   id INT,
--   player VARCHAR,
--   height INT,
--   weight INT,
--   college VARCHAR,
--   born INT,
--   birth_city VARCHAR,
--   birth_state VARCHAR
-- );

-- -- Verify successful data import
-- SELECT * FROM players;

-- -- Drop if exists
-- DROP TABLE IF EXISTS seasons_stats;

-- -- Create new table
-- CREATE TABLE seasons_stats (
--   player_id INT,
--   year DEC,
--   position VARCHAR,
--   age DEC,
--   Tm VARCHAR,
--   G VARCHAR,
--   TS_Percentage DEC,
--   FTr DEC,
--   OWS DEC,
--   DWS DEC,
--   WS DEC,
--   FG DEC,
--   FGA DEC,
--   FG_Percentage DEC,
--   Two_Points DEC,
--   Two_PA DEC,
--   Two_Point_Percentage DEC,
--   eFG_Percentage DEC,
--   FT DEC,
--   FTA DEC,
--   FT_Percentage DEC,
--   AST DEC,
--   PF DEC,
--   PTS DEC
-- );

-- -- Verify successful data import
-- SELECT * FROM seasons_stats;

SELECT * FROM seasons_stats LIMIT 10;

SELECT id, player, height, weight college, born, position, tm
FROM players
JOIN seasons_stats
ON id = player_id;


SELECT player_id, college, year, position, two_point_percentage, fg_percentage, ft_percentage, ts_percentage
FROM seasons_stats
JOIN players
ON id = player_id;














