# UDP Units
Fast UDP Server written in NodeJS to process incoming messages from devices and register in database server.


        | HDR | UUID                             | FV | OPCODE | Checksum | LEN | Payload                           |
        |=====|==================================|====|========|==========|=====|===================================|
        | FC  | 22EF615E7BCD47E0AFD18D43C866DBAB | 10 | A1     | 090E     | 0A  | 0A,81,28,06,44,69,73,68,6C,61,... |
        |===========================================================================================================|


Methods sent by the client
--------------------------
01 - ACK for Set Registers OPCODE
03 - ACK for Set Primary Key for WAN OPCODE
05 - ACK for Set Primary Key for LAN OPCODE
07 - ACK for Set Firmware Update Required OPCODE
09 - ACK for Send Firmware Page OPCODE

A0 - Push Registers (Without confirmation)
A1 - Push Registers (With confirmation)


Methods sent by the server
--------------------------
C0 - Set Registers (Without confirmation)
C1 - Set Registers (With confirmation)

C2 - Set Primary Key for WAN (Without confirmation)
C3 - Set Primary Key for WAN (With confirmation)

C4 - Set Primary Key for LAN (Without confirmation)
C5 - Set Primary Key for LAN (With confirmation)

C6 - Set Firmware Update Required (Without confirmation)
C7 - Set Firmware Update Required (With confirmation)

C8 - Send Firmware Page (Without confirmation)
C9 - Send Firmware Page (With confirmation)

