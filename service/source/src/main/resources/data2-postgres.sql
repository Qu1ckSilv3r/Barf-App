INSERT INTO barfuser(username, password, email) VALUES ('admin', 'admin', 'admin@admin.de');
INSERT INTO barfuser(username, password, email) VALUES ('erstser', 'erster', 'erste@admin.de');

INSERT INTO plansettings DEFAULT VALUES ;
--INSERT INTO planSettings(animalAmount, fetPerDay, plantAmount, factor, fullfilDemant, intervall, ownComponent, planView, proteinPerDay)VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT);


INSERT INTO animal(birthday, age, spezies, name, weight, target_weight, aktivity, user_id, setting_id) VALUES ('2018-08-18', 1, 'Dog', 'Bello', 20.5, 20, 'normal', 1, 1);
INSERT INTO animal(birthday, age, spezies, name, weight, target_weight, aktivity, user_id, setting_id) VALUES ('2018-01-01', 2, 'Dog', 'Hasso', 50, 50, 'middel', 1, 1);  
--INSERT INTO animal VALUES(DEFAULT, '2018-08-17', 2, 'Dog', 'Bello3', 20.5, 20, 'normal');

INSERT INTO component (categorie, animal_sort, name, fet) VALUES ('Muskelfleisch', 'Rind', 'Schulter', 15), ('Innerein', 'Rind', 'Leber', 10), ('Innerein', 'Rind', 'Magen', 5), ('Pansen', 'Rind', 'Grün', 5), ('Knochen', 'Rind', 'Oberschenkel', 20);  
INSERT INTO component (categorie, animal_sort, name) VALUES ('Gemüse', NULL, 'Gurke'), ('Obst', NULL, 'Banane');

INSERT INTO filtered_by (sort, name, categorie, property, component_id, animal_id) VALUES (NULL, 'Leber', NULL, 'Abneigung', 1, 1), ('Rind', NULL, NULL, 'Allergie', 3, 1), (NULL, 'Gurke', 'Gemüse', 'Vorliebe', 2, 1);

INSERT INTO feedplan (componente, name, value, weekday, week, setting_id) VALUES ('Muskelfleisch', 'Rinderschulter', 50,'Montag', 1, 1), ('Innerein', 'Rinderleber', 30,'Montag', 1, 1);
