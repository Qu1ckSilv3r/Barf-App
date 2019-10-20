-- Diese Testdaten sind immer in der Datenbank beim neuen Starten 
INSERT INTO barfuser(username, password, email) VALUES ('admin', 'admin', 'admin@admin.de');
INSERT INTO barfuser(username, password, email) VALUES ('erstser', 'erster', 'erste@admin.de');

INSERT INTO plansettings DEFAULT VALUES ;
--INSERT INTO planSettings(animalAmount, fetPerDay, plantAmount, factor, fullfilDemant, intervall, ownComponent, planView, proteinPerDay)VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO animal(birthday, age, spezies, name, weight, target_weight, aktivity, user_id) VALUES ('2018-08-18', 1, 'Dog', 'Bello', 20.5, 20, 'normal', 1);
INSERT INTO animal(birthday, age, spezies, name, weight, target_weight, aktivity, user_id) VALUES ('2018-01-01', 2, 'Dog', 'Hasso', 50, 50, 'middel', 1);  
--INSERT INTO animal VALUES(DEFAULT, '2018-08-17', 2, 'Dog', 'Bello3', 20.5, 20, 'normal');

INSERT INTO component (categorie, animal_sort, name) VALUES ('Muskelfleisch', 'Rind', 'Schulter'), ('Innerein', 'Rind', 'Leber'), ('Innerein', 'Rind', 'Magen'), ('Pansen', 'Rind', 'Grün'), ('Knochen', 'Rind', 'Oberschenkel');  
INSERT INTO component (categorie, animal_sort, name) VALUES ('Gemüse', NULL, 'Gurke'), ('Obst', NULL, 'Banane');

INSERT INTO nutritions (nutrition, component_id, value) VALUES ('Fett', 1, 10.5), ('Protein', 1, 5);  

INSERT INTO ouchie (rash, heartburn, day_date, animal_id) VALUES (TRUE, TRUE, current_date, 2);

INSERT INTO schedultday (weekday, week) VALUES ('Montag', 1), ('Dienstag', 1), ('Mittwoch', 1), ('Donnerstag', 1), ('Freitag', 1), ('Samstag', 1), ('Sonntag', 1), ('Montag', 2);

INSERT INTO feedlist (feed_part, schedult_id, amount) VALUES ('Rinderschulter', 3, 50), ('Rinderleber', 3, 30);

INSERT INTO filtered_by (sort, name, categorie, property, component_id, animal_id) VALUES (NULL, 'Leber', NULL, 'Abneigung', 1, 1), ('Rind', NULL, NULL, 'Allergie', 3, 1), (NULL, 'Gurke', 'Gemüse', 'Vorliebe', 2, 1);

INSERT INTO wiki (titel, artikel) VALUES ('test', 'langer text eines artikels');