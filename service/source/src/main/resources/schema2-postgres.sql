DROP TABLE IF EXISTS public.wiki CASCADE;
DROP TABLE IF EXISTS public.feedplan CASCADE;
DROP TABLE IF EXISTS public.filtered_by CASCADE;
DROP TABLE IF EXISTS public.component CASCADE;
DROP TABLE IF EXISTS public.animal CASCADE;
DROP TABLE IF EXISTS public.plansettings CASCADE;
DROP TABLE IF EXISTS public.barfuser CASCADE;

CREATE TABLE public.barfuser(
   user_id BIGSERIAL PRIMARY KEY,
   username VARCHAR (50) UNIQUE NOT NULL,
   password VARCHAR (50) NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL
);
--fett ist in prozent (15- 20%) protein ist in Prozent
CREATE TABLE public.plansettings(
   setting_id BIGSERIAL PRIMARY KEY,
   animal_amount NUMERIC (3) NOT NULL DEFAULT 70,
   plant_amount NUMERIC (3) NOT NULL DEFAULT 30,
   fet_per_day NUMERIC (4, 1) NOT NULL DEFAULT 15,
   protein_per_day NUMERIC (4, 1) NOT NULL DEFAULT 10,
   factor NUMERIC (1) NOT NULL DEFAULT 2,
   fullfil_demant NUMERIC (1) NOT NULL DEFAULT 1,
   intervall NUMERIC (1) NOT NULL DEFAULT 4,
   own_component BOOLEAN NOT NULL DEFAULT FALSE,
   plan_view BOOLEAN NOT NULL DEFAULT FALSE  
);
CREATE TABLE public.animal(
   animal_id BIGSERIAL PRIMARY KEY,
   birthday DATE NOT NULL,
   age NUMERIC (2) NOT NULL,
   spezies VARCHAR (50) NOT NULL,
   name VARCHAR (50) NOT NULL,
   weight NUMERIC (4, 1) NOT NULL,
   target_weight NUMERIC (4, 1) NOT NULL,
   aktivity VARCHAR (50) NOT NULL,
   user_id BIGINT REFERENCES barfuser ON DELETE CASCADE  NOT NULL,
   setting_id BIGINT REFERENCES plansettings ON DELETE CASCADE NOT NULL DEFAULT 1
);
CREATE TABLE public.component(
   component_id BIGSERIAL PRIMARY KEY,
   categorie VARCHAR (50) NOT NULL,
   animal_sort VARCHAR (50),
   name VARCHAR (50) NOT NULL,
   info VARCHAR (50),
   fet NUMERIC (4, 1),
   protein NUMERIC (4, 1),
   user_id BIGINT REFERENCES barfuser ON DELETE CASCADE NOT NULL DEFAULT 1,
   setting_id BIGINT REFERENCES plansettings ON DELETE CASCADE NOT NULL DEFAULT 1
);
CREATE TABLE public.filtered_by(
   filtered_by_id BIGSERIAL PRIMARY KEY,
   sort VARCHAR (50),
   name VARCHAR (50),
   categorie VARCHAR (50),
   property VARCHAR (50) NOT NULL,
   component_id BIGINT REFERENCES component ON DELETE CASCADE,
   animal_id BIGINT REFERENCES animal ON DELETE CASCADE NOT NULL
);
CREATE TABLE public.feedplan(
   feedplan_id BIGSERIAL PRIMARY KEY,
   component VARCHAR (50) NOT NULL,
   name VARCHAR (50) NOT NULL,
   value NUMERIC (4, 1) NOT NULL,
   weekday VARCHAR (10) NOT NULL,
   week NUMERIC (3) NOT NULL,
   setting_id BIGINT REFERENCES component ON DELETE CASCADE,   
);
CREATE TABLE public.wiki(
   wiki_id BIGSERIAL PRIMARY KEY,
   titel VARCHAR (100) NOT NULL,
   artikel VARCHAR (500) NOT NULL 
);