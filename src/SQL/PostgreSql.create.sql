




CREATE TABLE Материал (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Склад UUID NOT NULL,
 Номенклатура UUID NOT NULL,
 АктПриемки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заказ (
 primaryKey UUID NOT NULL,
 НомерЗаказа INT NULL,
 ФИОЗаказчика VARCHAR(255) NULL,
 АдресЗаказа VARCHAR(255) NULL,
 СпособДоставки VARCHAR(255) NULL,
 Количество INT NULL,
 Номенклатура UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Поставщики (
 primaryKey UUID NOT NULL,
 КодПоставщика INT NULL,
 Наименование VARCHAR(255) NULL,
 НомерТС VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтпускМатериала (
 primaryKey UUID NOT NULL,
 ДатаПроводки TIMESTAMP(3) NULL,
 Сотрудники UUID NOT NULL,
 Заказ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE АктПриемки (
 primaryKey UUID NOT NULL,
 НомерАкта INT NULL,
 ДатаПриемки TIMESTAMP(3) NULL,
 Поставщики UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИОсотрудника VARCHAR(255) NULL,
 Должность VARCHAR(255) NULL,
 Табель INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Склад (
 primaryKey UUID NOT NULL,
 КодСклада INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 КодМатериала INT NULL,
 Материал VARCHAR(255) NULL,
 Цена DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Материал ADD CONSTRAINT FKd3357a56bd7d61f391e7b232ff393b459f2b6f77 FOREIGN KEY (Склад) REFERENCES Склад; 
CREATE INDEX Indexd3357a56bd7d61f391e7b232ff393b459f2b6f77 on Материал (Склад); 

 ALTER TABLE Материал ADD CONSTRAINT FK6553ec40bd160d16e18f9ac13c4bcb5da57f8f94 FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index6553ec40bd160d16e18f9ac13c4bcb5da57f8f94 on Материал (Номенклатура); 

 ALTER TABLE Материал ADD CONSTRAINT FK4a99a9544b8873a50858f55b12dc8dcac95bf2f9 FOREIGN KEY (АктПриемки) REFERENCES АктПриемки; 
CREATE INDEX Index4a99a9544b8873a50858f55b12dc8dcac95bf2f9 on Материал (АктПриемки); 

 ALTER TABLE Заказ ADD CONSTRAINT FK10b65dcf8c121639684e0075029a3238026da178 FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index10b65dcf8c121639684e0075029a3238026da178 on Заказ (Номенклатура); 

 ALTER TABLE ОтпускМатериала ADD CONSTRAINT FK48c855b7557233f26ca6b6c90e43a34e295ae2e6 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index48c855b7557233f26ca6b6c90e43a34e295ae2e6 on ОтпускМатериала (Сотрудники); 

 ALTER TABLE ОтпускМатериала ADD CONSTRAINT FK63fea698cc077cb538ab8ac9a1f4fae9e5e23644 FOREIGN KEY (Заказ) REFERENCES Заказ; 
CREATE INDEX Index63fea698cc077cb538ab8ac9a1f4fae9e5e23644 on ОтпускМатериала (Заказ); 

 ALTER TABLE АктПриемки ADD CONSTRAINT FKbdd553adce84b9ebcbc0f3752a3cba7cf0b567da FOREIGN KEY (Поставщики) REFERENCES Поставщики; 
CREATE INDEX Indexbdd553adce84b9ebcbc0f3752a3cba7cf0b567da on АктПриемки (Поставщики); 

 ALTER TABLE АктПриемки ADD CONSTRAINT FK96a348ff0dd82a8e693a83f05e7d7bb16df138da FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index96a348ff0dd82a8e693a83f05e7d7bb16df138da on АктПриемки (Сотрудники); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

