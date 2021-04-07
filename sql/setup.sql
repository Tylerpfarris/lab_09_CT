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

DROP TABLE IF EXISTS gin;

CREATE TABLE gin (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    brand TEXT NOT NULL,
    _name TEXT NOT NUll,
    origin TEXT NOT NULL, 
    botanicals TEXT NOT NULL,
    number_of_botanicals INTEGER,
    base_spirit TEXT NOT NULL,
    barrel_aged BOOLEAN,
    type_of_still TEXT,
    style TEXT NOT NULL
);

DROP TABLE IF EXISTS nonsense;

CREATE TABLE nonsense (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    farts BOOLEAN,
    giggles INTEGER NOT NULL,
    stubbed_toes BOOLEAN NOT NULL,
    late_night_snack TEXT NOT NULL
);