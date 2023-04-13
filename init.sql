create table name (
	id serial,
	title VARCHAR(10),
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	primary key(id)
);

create table coordinates (
	id serial,
	latitude VARCHAR(50),
	longitude VARCHAR(50),
	primary key(id)
);

create table street (
	id serial,
	number INT,
	name VARCHAR(50),
	primary key(id)
);

create table timezone (
	id serial,
	offset_tz VARCHAR(50),
	description VARCHAR(200),
	primary key(id)
);

create table location (
	id serial,
	street_id INT,
	city VARCHAR(50),
	state VARCHAR(50),
	country VARCHAR(50),
	postcode VARCHAR(50),
	coordinates_id INT,
	timezone_id INT,
	
	primary key(id),
	constraint fk_street
		foreign key(street_id)
		references street(id)
		on delete set null,
			
	constraint fk_coordinates
		foreign key(coordinates_id)
		references coordinates(id)
		on delete set null,
	
	constraint fk_timezone
		foreign key(timezone_id)
		references timezone(id)
		on delete set null
);

create table login (
	id serial,
	uuid VARCHAR(100),
	username VARCHAR(100),
	password VARCHAR(100),
	salt VARCHAR(100),
	md5 VARCHAR(100),
	sha1 VARCHAR(100),
	sha256 VARCHAR(100),
	primary key(id)
	
	
);

create table dob (
	id serial,
	date VARCHAR(50),
	age INT,
	primary key(id)
);

create table registered (
	id serial,
	date VARCHAR(50),
	age INT,
	primary key(id)
);

create table person_id (
	id serial,
	name VARCHAR(50),
	value VARCHAR(50),
	primary key(id)
);

create table picture (
	id serial,
	large VARCHAR(200),
	medium VARCHAR(200),
	thumbnail VARCHAR(200),
	primary key(id)
);

create table person (
	id serial,
	gender VARCHAR(50),
	name_id INT,
	location_id INT,
	email VARCHAR(100),
	login_id INT,
	dob_id INT,
	registered_id INT,
	phone VARCHAR(20),
	cell VARCHAR(20),
	person_id_id INT,
	picture_id INT,
	nat VARCHAR(50),
	
	primary key(id),
			
	constraint fk_name
		foreign key(name_id)
		references name(id)
		on delete set null,
		
	constraint fk_location
		foreign key(location_id)
		references location(id)
		on delete set null,
		
	constraint fk_login
		foreign key(login_id)
		references login(id)
		on delete set null,
	
	constraint fk_dob
		foreign key(dob_id)
		references dob(id)
		on delete set null,
		
	constraint fk_registered
		foreign key(registered_id)
		references registered(id)
		on delete set null,
		
	constraint fk_person_id
		foreign key(person_id_id)
		references person_id(id)
		on delete set null,
		
	constraint fk_picture
		foreign key(picture_id)
		references picture(id)
		on delete set null	
);
