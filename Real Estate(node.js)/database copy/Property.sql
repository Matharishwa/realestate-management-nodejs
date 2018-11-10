CREATE TABLE Property (
    PID           INT auto_increment NOT NULL,
    Locality_Name VARCHAR (50) NOT NULL,
    UID           INT          NOT NULL,
    Address       VARCHAR (50) NOT NULL,
    PropertyName  VARCHAR (50) NOT NULL,
    City_Name     VARCHAR (50) NOT NULL,
    CONSTRAINT PK_Property PRIMARY KEY CLUSTERED (PID ASC),
    UNIQUE NONCLUSTERED (UID ASC, PropertyName ASC),
    CONSTRAINT FK_Property_ToTable FOREIGN KEY (Locality_Name) REFERENCES Locality (Name),
    CONSTRAINT FK_Property_ToTable_1 FOREIGN KEY (UID) REFERENCES User (UID),
    CONSTRAINT FK_Property_ToTable_2 FOREIGN KEY (City_Name) REFERENCES City (Name)
);

