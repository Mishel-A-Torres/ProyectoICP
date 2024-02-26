# ProyectoICP: 
La finalidad del proyecto es la de presentar una interfaz amigable con el usuario en la que se haga uso de la tecnología ICP y azle, en la que el usuario pueda interactuar 
#PARA COMENZAR:
Crea una carpeta dentro de la terminal.
#CLONA EL SIGUIENTE ARCHIVO:
git clone https://github.com/adrian-d-hidalgo/azle-api-rest-nextjs
#ACCEDE AL DIRECTORIO:
cd azle-api-rest-nextjs
#INSTALA LAS DEPENDENDENCIAS:
npm install
# CREA UN ARCHIVO .env 
cp frontend/.env-example frontend/.env
#INICIA UNA REPLICA LOCAL:
dfx start --background --clean
#INICIA LOS SIGUIENTES CANISTERS:
dfx canister create --all
dfx canister id backend
dfx canister id internet-identity
#REMPLAZA EL BACKEND ID POR EL BACKEND CANISTER ID DE TU TERMINAL, Y DEBE VERSE ALGO ASÍ:
# Replace BACKEND_CANISTER_ID with your backend canister id
NEXT_PUBLIC_API_REST_URL=http://BACKEND_CANISTER_ID.localshot:4943
# Replace INTERNET_IDENTITY_CANISTER_ID with your internet-identity canister id
NEXT_PUBLIC_INTERNET_IDENTITY_URL=http://INTERNET_IDENTITY_CANISTER_ID.localshot:4943
#INTRODUCE EN TU TERMINAL: 
dfx deploy


