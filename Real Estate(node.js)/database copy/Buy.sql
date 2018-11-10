CREATE TABLE Buy (
    PID          INT          NOT NULL,
    Area         INT          NOT NULL,
    Rooms        INT          NOT NULL,
    NoFloors     INT          NOT NULL,
    Floor        INT          NOT NULL,
    Corner       BIT          NOT NULL,
    Availability BIT          NOT NULL,
    Parking      INT          NOT NULL,
    RegYear      DATE         NOT NULL,
    AskPrice     int        NOT NULL,
    Road         INT          NOT NULL,
    Garden       BIT          NOT NULL,
    Additional   VARCHAR (50) NULL,
    Photo        BLOB       NULL,
    CONSTRAINT FK_Buy_ToTable FOREIGN KEY (PID) REFERENCES Property (PID)
);

