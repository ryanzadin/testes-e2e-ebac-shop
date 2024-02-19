pipeline {
    agent any 

         stages {
             stage('Instalar dependencias'){
  scripts: {
    start: "my-server -p 8080",
    cy:run: "cypress run",
    test: "start-server-and-test start http://localhost:8080 cy:run"
  }
}     


        }
    }