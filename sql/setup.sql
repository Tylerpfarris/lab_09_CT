DROP TABLE IF EXISTS mezcal;

CREATE TABLE mezcal (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    brand TEXT NOT NULL,
    _name TEXT NOT NULL,
    agave TEXT,
    single_agave_species BOOLEAN, 
    producer TEXT,
    abv INTEGER NOT NULL
);