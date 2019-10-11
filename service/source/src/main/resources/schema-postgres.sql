DROP TABLE IF EXISTS public.filteredBy CASCADE;
DROP TABLE IF EXISTS public.feedList CASCADE;
DROP TABLE IF EXISTS public.schedultDay CASCADE;
DROP TABLE IF EXISTS public.ouchie CASCADE;
DROP TABLE IF EXISTS public.nutritions CASCADE;
DROP TABLE IF EXISTS public.component CASCADE;
DROP TABLE IF EXISTS public.wiki CASCADE;
DROP TABLE IF EXISTS public.animal CASCADE;
DROP TABLE IF EXISTS public.planSettings CASCADE;
DROP TABLE IF EXISTS public.barfuser CASCADE;

CREATE TABLE public.barfuser(
   user_id serial PRIMARY KEY,
   username VARCHAR (50) UNIQUE NOT NULL,
   password VARCHAR (50) NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL
);
--fett ist in prozent (15- 20%) protein ist in Prozent
CREATE TABLE public.planSettings(
   settingID serial PRIMARY KEY,
   animalAmount NUMERIC (3) NOT NULL DEFAULT 70,
   fetPerDay NUMERIC (4, 1) NOT NULL DEFAULT 20,
   plantAmount NUMERIC (3) NOT NULL DEFAULT 30,
   factor NUMERIC (1) NOT NULL DEFAULT 2,
   fullfilDemant NUMERIC (1) NOT NULL DEFAULT 1,
   intervall NUMERIC (1) NOT NULL DEFAULT 4,
   ownComponent BOOLEAN NOT NULL DEFAULT FALSE,
   planView BOOLEAN NOT NULL DEFAULT FALSE,
   proteinPerDay NUMERIC (4, 1) NOT NULL DEFAULT 4
);
CREATE TABLE public.animal(
   animalID serial PRIMARY KEY,
   birthday DATE NOT NULL,
   age NUMERIC (2) NOT NULL,
   spezies VARCHAR (50) NOT NULL,
   name VARCHAR (50) NOT NULL,
   weight NUMERIC (4, 1) NOT NULL,
   target_weight NUMERIC (4, 1) NOT NULL,
   aktivity VARCHAR (50) NOT NULL,
   user_id INTEGER REFERENCES barfuser ON DELETE CASCADE  NOT NULL ,
   settingID INTEGER REFERENCES planSettings ON DELETE CASCADE NOT NULL DEFAULT 1
);
CREATE TABLE public.wiki(
   wikiID serial PRIMARY KEY,
   titel VARCHAR (100) NOT NULL,
   artikel VARCHAR (500) NOT NULL 
);
CREATE TABLE public.component(
   componentID serial PRIMARY KEY,
   categorie VARCHAR (50) NOT NULL,
   animalSort VARCHAR (50),
   name VARCHAR (50) NOT NULL,
   info VARCHAR (50),
   userID INTEGER REFERENCES barfuser ON DELETE CASCADE NOT NULL DEFAULT 1,
   wikiID INTEGER REFERENCES wiki ON DELETE CASCADE DEFAULT NULL
);
CREATE TABLE public.nutritions(
   nutrition VARCHAR (10) NOT NULL,
   componentID INTEGER REFERENCES component ON DELETE CASCADE NOT NULL,
   value NUMERIC (4, 1) NOT NULL,
   PRIMARY KEY (nutrition, componentID) 
);

CREATE TABLE public.ouchie(
   ouchieID serial PRIMARY KEY,
   note BOOLEAN,
   poo BOOLEAN,
   rash BOOLEAN,
   heartburn BOOLEAN,
   itsch BOOLEAN,
   puke BOOLEAN,
   others VARCHAR (150),
   dayDate DATE NOT NULL,
   animalID INTEGER REFERENCES animal ON DELETE CASCADE NOT NULL
);
CREATE TABLE public.schedultDay(
   schedultID serial PRIMARY KEY,
   weekday VARCHAR (10) NOT NULL,
   week NUMERIC (3) NOT NULL,
   ouchieID INTEGER REFERENCES ouchie ON DELETE CASCADE DEFAULT NULL,
   settingID INTEGER REFERENCES planSettings ON DELETE CASCADE NOT NULL DEFAULT 1
);
CREATE TABLE public.feedList(
   feedPart VARCHAR (50) NOT NULL,
   schedultID INTEGER REFERENCES schedultDay ON DELETE CASCADE NOT NULL,
   amount NUMERIC (4, 1) NOT NULL,
   PRIMARY KEY (feedPart, schedultID) 
);
CREATE TABLE public.filteredBy(
   sort VARCHAR (50),
   name VARCHAR (50),
   categorie VARCHAR (50),
   property VARCHAR (50) NOT NULL,
   componentID INTEGER REFERENCES component ON DELETE CASCADE NOT NULL,
   animalID INTEGER REFERENCES animal ON DELETE CASCADE NOT NULL,
   PRIMARY KEY (componentID, animalID) 
);