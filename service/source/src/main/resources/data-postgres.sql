-- Diese Testdaten sind immer in der Datenbank beim neuen Starten 
INSERT INTO barfuser(username, password, email) VALUES ('admin', 'admin', 'admin@admin.de');
INSERT INTO barfuser(username, password, email) VALUES ('erstser', 'erster', 'erste@admin.de');

INSERT INTO plansettings DEFAULT VALUES ;
--INSERT INTO planSettings(animalAmount, fetPerDay, plantAmount, factor, fullfilDemant, intervall, ownComponent, planView, proteinPerDay)VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO animal(birthday, age, spezies, name, weight, target_weight, aktivity, user_id) VALUES ('2018-08-18', 1, 'Dog', 'Bello', 20.5, 20, 'normal', 1);
INSERT INTO animal(birthday, age, spezies, name, weight, target_weight, aktivity, user_id) VALUES ('2018-01-01', 2, 'Dog', 'Hasso', 50, 50, 'niedrig', 1);  
--INSERT INTO animal VALUES(DEFAULT, '2018-08-17', 2, 'Dog', 'Bello3', 20.5, 20, 'normal');

INSERT INTO component (categorie, animal_sort, name) VALUES ('Muskelfleisch', 'Rind', 'Rinderschulter'), ('Innerein', 'Rind', 'Rinderleber'), ('Innerein', 'Rind', 'Rindermagen'), ('Pansen', 'Rind', 'Grüner Rinderpansen'), ('Knochen', 'Rind', 'Rinderoberschenkelknochen');  
INSERT INTO component (categorie, animal_sort, name) VALUES ('Muskelfleisch', 'Schwein', 'Schweineschulter'), ('Innerein', 'Schwein', 'Schweineleber'), ('Innerein', 'Schwein', 'Schweinemagen'), ('Pansen', 'Schwein', 'Grüner Schweinepansen'), ('Knochen', 'Schwein', 'Schweineoberschenkelknochen');  
INSERT INTO component (categorie, animal_sort, name) VALUES ('Muskelfleisch', 'Huhn', 'Hühnerflügel'), ('Innerein', 'Huhn', 'Hühnerleber'), ('Innerein', 'Huhn', 'Hühnermagen'), ('Pansen', 'Huhn', 'Grüner Hühnerpansen'), ('Knochen', 'Huhn', 'Hühneroberschenkelknochen');
INSERT INTO component (categorie, animal_sort, name) VALUES ('Gemüse', NULL, 'Gurke'), ('Gemüse', NULL, 'Tomate'),('Obst', NULL, 'Banane'),('Obst', NULL, 'Apfel'),('Obst', NULL, 'Birne'),('Gemüse', NULL, 'Blumenkohl');

INSERT INTO nutritions (nutrition, component_id, value) VALUES ('Fett', 1, 10.5), ('Protein', 1, 5);  

INSERT INTO ouchie (rash, heartburn, day_date, animal_id) VALUES (TRUE, TRUE, current_date, 2);

INSERT INTO schedultday (weekday, week) VALUES ('Montag', 1), ('Dienstag', 1), ('Mittwoch', 1), ('Donnerstag', 1), ('Freitag', 1), ('Samstag', 1), ('Sonntag', 1);
INSERT INTO schedultday (weekday, week) VALUES ('Montag', 2), ('Dienstag', 2), ('Mittwoch', 2), ('Donnerstag', 2), ('Freitag', 2), ('Samstag', 2), ('Sonntag', 2);
INSERT INTO schedultday (weekday, week) VALUES ('Montag', 3), ('Dienstag', 3), ('Mittwoch', 3), ('Donnerstag', 3), ('Freitag', 3), ('Samstag', 3), ('Sonntag', 3);
INSERT INTO schedultday (weekday, week) VALUES ('Montag', 4), ('Dienstag', 4), ('Mittwoch', 4), ('Donnerstag', 4), ('Freitag', 4), ('Samstag', 4), ('Sonntag', 4);

INSERT INTO feedlist (feed_part, schedult_id, amount, animal_id, categorie) VALUES ('Rinderschulter', 3, 50, 1, 'Innerei');

INSERT INTO filtered_by (sort, name, categorie, property, component_id, animal_id) VALUES (NULL, 'Leber', NULL, 'Abneigung', 1, 1), ('Rind', NULL, NULL, 'Allergie', 3, 1), (NULL, 'Gurke', 'Gemüse', 'Vorliebe', 2, 1);
INSERT INTO filtered_by (sort, name, categorie, property, component_id, animal_id) VALUES (NULL, 'Schulter', NULL, 'Abneigung', 1, 1), (NULL, 'Apfel', 'Obst', 'Allergie', 3, 1), ('Schwein', NULL, NULL, 'Vorliebe', 2, 1);


INSERT INTO wiki (titel, artikel) VALUES ('test', 'langer text eines artikels');