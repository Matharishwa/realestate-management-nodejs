CREATE TABLE Locality (
    Name      VARCHAR (50) NOT NULL,
    City_Name VARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED (Name ASC),
    UNIQUE NONCLUSTERED (Name ASC, City_Name ASC),
    CONSTRAINT FK_Locality_ToTable FOREIGN KEY (City_Name) REFERENCES City (Name)
);

