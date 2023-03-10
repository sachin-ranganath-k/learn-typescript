---- npm init -y : Initiates the npm project
---- npm i parcel --save-dev --> Parcel automatically transpiles TypeScript to Javascript whenever you use a .ts or .tsx file
---- tsc --init : Creates tsconfig.json file
Goto tsconfig.js file and uncomment noEmitOnError flag (to true)
Also add "start": "(npx parcel ./index.html) & npx parcel watch ./index.html" in package.json
Remove "main" from package.json

