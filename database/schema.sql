use abcd;
create TABLE USER (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) not null
);

