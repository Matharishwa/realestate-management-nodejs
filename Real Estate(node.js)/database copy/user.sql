CREATE TABLE [dbo].[User] (
    [UID]      INT           IDENTITY (1, 1) NOT NULL,
    [Name]     VARCHAR (50)  NOT NULL,
    [Email]    VARCHAR (50)  NOT NULL,
    [Password] VARCHAR (50)  NOT NULL,
    [Phone]    NUMERIC (10)  NOT NULL,
    [Income]   MONEY         NOT NULL,
    [Address]  VARCHAR (100) NULL,
    PRIMARY KEY CLUSTERED ([UID] ASC),
    UNIQUE NONCLUSTERED ([Email] ASC),
    UNIQUE NONCLUSTERED ([Email] ASC)
);

