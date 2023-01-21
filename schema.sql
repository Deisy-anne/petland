DROP TABLE IF EXISTS users;

create table users (
  id text not null primary key,
  name text not null,
  last_name text not null,
  birth_date date not null,
  phone_number numeric not null,
  email text not null unique,
  password text not null
)

