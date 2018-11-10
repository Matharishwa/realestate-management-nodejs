CREATE TABLE Transaction (
    TID          INT  auto_increment NOT NULL,
    customer_UID INT   NOT NULL,
    owner_UID    INT   NOT NULL,
    PID          INT   NOT NULL,
    price        BLOB NOT NULL,
    date         DATE  NOT NULL,
    PRIMARY KEY CLUSTERED (TID ASC),
    CONSTRAINT FK_Transaction_ToTable_2 FOREIGN KEY (PID) REFERENCES Property (PID),
    CONSTRAINT FK_Transaction_ToTable FOREIGN KEY (customer_UID) REFERENCES User (UID),
    CONSTRAINT FK_Transaction_ToTable_1 FOREIGN KEY (owner_UID) REFERENCES User (UID)
);

